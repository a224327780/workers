import * as cheerio from 'cheerio';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

const base_api = 'https://share.cjy.me'
const login_url = `${base_api}/mjj6/`
const node_url = `${base_api}/nodeinfo/`

const toClash = (item) => {
    const network = item['net']
    let data = {
        "name": item['ps'],
        "server": item['add'],
        "port": item['port'],
        "type": "vmess",
        "uuid": item['id'],
        "alterId": item['aid'],
        "cipher": "auto",
        "tls": item['tls'] !== undefined && item['tls'] !== 'none',
        "skip-cert-verify": true,
    }
    if (network === 'ws') {
        let host = item['host']
        if (!host || host === 'none') {
            host = item['add']
        }
        data['network'] = network
        data['ws-opts'] = {
            "path": item['path'],
            "headers": {
                "Host": host
            }
        }
    }
    return data
}

export const get_nodes = async (cookie) => {
    let response = await fetch(node_url, {headers: {Cookie: cookie}});
    let html = await response.text()
    const $ = cheerio.load(html)
    const items = $('div.node-cell')
    let clashData = []
    for (let i = 0; i <= items.length; i++) {
        let status = $(items[i]).find('.card-header-title span').text()
        if (status === '主机故障') {
            continue
        }
        let vmess = $(items[i]).find('.modal a').attr('href')
        if (vmess === undefined || typeof vmess === 'undefined') {
            continue
        }
        try {
            vmess = atob(vmess.replace('vmess://', ''))
            clashData.push(toClash(JSON.parse(vmess)))
        } catch (e) {
            console.log(e)
        }
    }
    return clashData
}

export const login = async (username, password) => {
    let response = await fetch(login_url)
    let cookies = response.headers.getSetCookie()

    const html = await response.text()
    const token = html.match('name="csrfmiddlewaretoken" value="([^"]+)"')
    if (token === null) {
        return null
    }

    let body = new FormData()
    body.append('csrfmiddlewaretoken', token[1])
    body.append('username', username)
    body.append('password', password)
    let options = {
        body: body,
        method: 'POST',
        redirect: 'manual',
        headers: {Cookie: cookies[0], Referer: login_url}
    }
    response = await fetch(login_url, options);
    let location = response.headers.get('location')
    if (location && location.includes('userinfo')) {
        return response.headers.getSetCookie().join(';')
    }
    return null
}