import {Router} from 'itty-router';
import {DefaultClashYml, DevClashRule} from './clash';
import {login, get_nodes} from './mjj';

import YAML from 'yaml'

class Subscribe {

    private _request: Request;
    private _env: Env
    private _kv: KVNamespace;
    private testUrl = 'http://www.gstatic.com/generate_204'
    private subscribeName: string = 'subscribe'
    private subscribeNodeName: string = 'subscribe_node'
    private mjjCookieName: string = 'share_cjy_cookie'
    private mjjCookie: any = null
    private mjjUserName: string = ''
    private default_node = { 
        name: '订阅失败', type: 'vmess', 
        server: '1.1.1.1', port: '1111', uuid: '89dc0742-7baf-4eb7-8fda-5fe7818bedf0', 
        alterId: 0, cipher: 'auto', udp: true, network: 'ws' 
    }
    private jsonHeader = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        }
    }
    private fetchUserAgent = {'User-Agent': 'ClashMetaForAndroid/2.7.1.Meta-Alpha (Prefer ClashMeta Format)'}
    private providerTemplate = {
        'interval': 7200, 'url': '', 'type': 'http', 'path': '',
        'health-check': {'enable': true, 'interval': 7200, 'url': this.testUrl}
    }

    async init(env: Env, request: any) {
        this._env = env
        this._request = request
        this._kv = env.SUBSCRIBE
        this.mjjUserName = env.SECRET_MJJ_USERNAME
        this.mjjCookieName = `${this.mjjCookieName}_${this.mjjUserName}`

        let cookie = await this._kv.get(this.mjjCookieName)
        if (cookie === null) {
            console.log(`[${env.SECRET_MJJ_USERNAME}] start login.`)
            cookie = await login(env.SECRET_MJJ_USERNAME, env.SECRET_MJJ_PASSWORD)
            if (cookie !== null) {
                console.log(`Logged in successfully! \nCookie: ${cookie}`)
                await this._kv.put(this.mjjCookieName, cookie, {expirationTtl: 3600 * 5})
            }else{
                console.log(`[${env.SECRET_MJJ_USERNAME}] Login Fail.`)
            }
        }

        this.mjjCookie = cookie
        await this.sleep(2)
    }

     sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms * 1000));
    }

    trim(str, char) {
        const reg = new RegExp(`^${char}+|${char}+$`, 'g');
        return str.replace(reg, '');
    }

    async save_subscribe(request) {
        const formData = await request.formData();
        let subscribeData = {};
        formData.forEach(function (value, key) {
            subscribeData[key] = value;
        });
        const result = JSON.stringify(subscribeData)
        await this._kv.put(this.subscribeName, result)
        return new Response(result, this.jsonHeader);
    }

    async get_subscribe(is_dev: boolean) {
        const value = await this._kv.get(this.subscribeName)
        if (value === null) {
            return new Response('请先添加订阅', {status: 404});
        }
        const subscribes = JSON.parse(value)
        const userAgent = this._request.headers.get('User-Agent')
        console.log(userAgent)
        let code = YAML.parse(DefaultClashYml)
        let _proxiesNames = []

        code['proxy-providers'] = {}
        code['proxy-groups'] = [
            {'name': '全局选择', 'type': 'select', 'proxies': ['故障转移', '自动选择', '机场节点']},
            {'name': '机场节点', 'type': 'select', 'proxies': []},
            {'name': '故障转移', 'type': 'fallback', 'proxies': [], 'interval': 7200, 'url': this.testUrl},
            {'name': '自动选择', 'type': 'url-test', 'use': [], 'interval': 7200, 'url': this.testUrl},
        ]
        let j = 2
        for (let i in subscribes) {
            if (userAgent && !userAgent.toLowerCase().includes('meta') && i === 'BEST') {
                continue
            }
            const url = encodeURIComponent(subscribes[i])
            const domain = this._request.url.match(/^https?:\/\/([^/:?#]+)(?=[/:?#]|$)/i);
            let provider = JSON.parse(JSON.stringify(this.providerTemplate))
            provider['url'] = `${domain[0]}/convert?url=${url}&name=${i}`
            provider['path'] = `provider1/${i}.yaml`
            _proxiesNames.push(i)
            code['proxy-providers'][i] = provider
            code['proxy-groups'].splice(j, 0, {'name': i, 'type': 'select', 'use': [i]})
            j += 1
        }

        const n = code['proxy-groups'].length
        code['proxy-groups'][1]['proxies'] = _proxiesNames
        code['proxy-groups'][n - 2]['proxies'] = _proxiesNames
        code['proxy-groups'][n - 1]['use'] = _proxiesNames

        if (is_dev) {
            for (let rule in DevClashRule) {
                code['rules'].splice(0, 0, DevClashRule[rule])
            }
        }
        return new Response(YAML.stringify(code));
    }

    async convert(url, name, force) {
        const subscribeNodeKey = `${this.subscribeNodeName}_${name}`
        const value = await this._kv.get(subscribeNodeKey)
        let data = []
        if (value !== null && value !== '[]' && force !== '1') {
            data = JSON.parse(value)
        } else {
            if (url.includes('share.cjy.me')) {
                if(this.mjjCookie === null){
                    await this.init(this._env, this._request)
                }
                data = await get_nodes(this.mjjCookie, this.mjjUserName, this.default_node)
            } else {
                data = await this.update_subscribe_by_url(url)
            }
            console.log(`[${name}] 节点数量: ${data.length}`)
            await this._kv.put(subscribeNodeKey, JSON.stringify(data))
        }
        data.sort((a, b) => a.name.localeCompare(b.name));
        return this.do_response(YAML.stringify({proxies: data}), {'headers': this.jsonHeader})
    }

    async update_subscribe() {
        const value = await this._kv.get(this.subscribeName)
        if (value === null) {
            return
        }
        const subscribes = JSON.parse(value)
        for (let i in subscribes) {
            const url = subscribes[i]
            let data = []
            console.log(`Update subscribe: ${i}`)
            if (url.includes('share.cjy.me')) {
                data = await get_nodes(this.mjjCookie, this.mjjUserName, this.default_node)
            } else {
                data = await this.update_subscribe_by_url(url)
            }
            await this._kv.put(`${this.subscribeNodeName}_${i}`, JSON.stringify(data))
            console.log(`[${i}] 节点数量: ${data.length}`)
        }
    }

    async update_subscribe_by_url(url: string) {
        const response = await fetch(url, {headers: this.fetchUserAgent})
        let html = await response.text()
        if (html.includes('proxies')) {
            const data = YAML.parse(html)
            return data['proxies']
        }
        console.log(html)
        return [this.default_node]
    }

    do_response(data, init = {}) {
        return new Response(data, init)
    }
}

const subscribe = new Subscribe()
const router = Router();

router.post('/save', async (request) => {
    return await subscribe.save_subscribe(request)
});

router.get('/convert', async (request) => {
    const query = request.query
    return await subscribe.convert(query['url'], query['name'], query['force'])
});

router.get('/update', async (request) => {
    await subscribe.update_subscribe()
    return subscribe.do_response('Update successfully.')
});

router.get('/', async (request) => {
    return await subscribe.get_subscribe(request.query['dev'] !== undefined)
});

router.all('*', () => new Response('404, not found!', {status: 404}));

export default {
    async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
        await subscribe.init(env, event)
        await subscribe.update_subscribe()
    },

    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        await subscribe.init(env, request)
        try {
            return router.handle(request);
        } catch (error) {
            return new Response(error.message);
        }
    }
};

