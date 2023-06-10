const base_api = 'https://share.cjy.me'
const login_url = `${base_api}/mjj6/`
const node_url = `${base_api}/nodeinfo/`

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

const get_node_list = async (cookie) => {
    let response = await fetch(node_url, {headers: {Cookie: cookie}});
    let html = await response.text()
    console.log(response.status)
    const cheerio = require('cheerio')
    const $ = cheerio.load(html)
    const items = $('div.node-cell')
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
            console.log(vmess)
        } catch (e) {
            console.log(e)
        }
    }
}

const login = async (username, password) => {
    let response = await fetch(login_url);
    let cookies = response.headers.getSetCookie()

    const result = await response.text()
    const token = result.match('name="csrfmiddlewaretoken" value="([^"]+)"')[1]
    await sleep(3);

    let body = new FormData()
    body.append('csrfmiddlewaretoken', token)
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
    if (location.includes('userinfo')) {
        const cookie = response.headers.getSetCookie().join(';')
        console.log(`Logged in successfully! Cookie: ${cookie}`)
        return cookie
    }
    console.log(response.status)
    // for (const pair of response.headers.entries()) {
    //     console.log(`${pair[0]}: ${pair[1]}`);
    // }
    return null
}

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request))
})

addEventListener('scheduled', event => {
    event.waitUntil(handleSchedule(event.scheduledTime))
})

async function handleSchedule(scheduledTime) {
    console.log(scheduledTime)
}

async function handleRequest(request) {
    const cookie_key = 'share_cjy_cookie'
    const node_key = 'share_cjy_node_list'

    let cookie = await DB.get(cookie_key)
    console.log(cookie)
    if (!cookie) {
        cookie = await login()
    }
    if (cookie) {
        await DB.put(cookie_key, cookie, {expirationTtl: 3600 * 24})
    }
    await get_node_list(cookie)
    return new Response('value.keys');
}