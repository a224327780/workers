export const DevClashRule = [
    'DOMAIN-KEYWORD,qq,全局选择',
    'DOMAIN-KEYWORD,weixin,全局选择',
    'DOMAIN-KEYWORD,bilibili,全局选择',
    'DOMAIN-KEYWORD,aliyundrive,全局选择',
    'DOMAIN-KEYWORD,baidu,全局选择',
    'DOMAIN-KEYWORD,weibo,全局选择',
    'DOMAIN-KEYWORD,qlogo,全局选择',
    'DOMAIN-KEYWORD,qpic,全局选择',
    'DOMAIN-KEYWORD,hdslb,全局选择',
    'DOMAIN-KEYWORD,360.cn,全局选择'
]

export const DefaultClashYml = `
mixed-port: 7890
allow-lan: false
mode: rule
log-level: info
external-controller: 127.0.0.1:9090

dns:
  enable: true
  ipv6: true
  default-nameserver:
    - 1.1.1.1
    - 223.5.5.5
  nameserver:
    - https://dns.cooluc.com/dns-query
    - https://doh.pub/dns-query
    - https://dns.twnic.tw/dns-query
  fallback:
    - https://dns.cloudflare.com/dns-query
    - https://dns.alidns.com/dns-query
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
proxy-providers: {}

proxy-groups: []
rules:
  - DOMAIN-SUFFIX,smtp,DIRECT
  - DOMAIN-KEYWORD,aria2,DIRECT
  - DOMAIN-KEYWORD,cjy.me,全局选择
  - DOMAIN-SUFFIX,ampproject.org,全局选择
  - DOMAIN-SUFFIX,appspot.com,全局选择
  - DOMAIN-SUFFIX,blogger.com,全局选择
  - DOMAIN-SUFFIX,getoutline.org,全局选择
  - DOMAIN-SUFFIX,gvt0.com,全局选择
  - DOMAIN-SUFFIX,gvt1.com,全局选择
  - DOMAIN-SUFFIX,gvt3.com,全局选择
  - DOMAIN-SUFFIX,xn--ngstr-lra8j.com,全局选择
  - DOMAIN-KEYWORD,google,全局选择
  - DOMAIN-KEYWORD,blogspot,全局选择
  - DOMAIN-SUFFIX,onedrive.live.com,全局选择
  - DOMAIN-SUFFIX,xboxlive.com,全局选择
  - DOMAIN-SUFFIX,cdninstagram.com,全局选择
  - DOMAIN-SUFFIX,fb.com,全局选择
  - DOMAIN-SUFFIX,fb.me,全局选择
  - DOMAIN-SUFFIX,fbaddins.com,全局选择
  - DOMAIN-SUFFIX,fbcdn.net,全局选择
  - DOMAIN-SUFFIX,fbsbx.com,全局选择
  - DOMAIN-SUFFIX,fbworkmail.com,全局选择
  - DOMAIN-SUFFIX,instagram.com,全局选择
  - DOMAIN-SUFFIX,m.me,全局选择
  - DOMAIN-SUFFIX,messenger.com,全局选择
  - DOMAIN-SUFFIX,oculus.com,全局选择
  - DOMAIN-SUFFIX,oculuscdn.com,全局选择
  - DOMAIN-SUFFIX,rocksdb.org,全局选择
  - DOMAIN-SUFFIX,whatsapp.com,全局选择
  - DOMAIN-SUFFIX,whatsapp.net,全局选择
  - DOMAIN-KEYWORD,facebook,全局选择
  - IP-CIDR,3.123.36.126/32,全局选择,no-resolve
  - IP-CIDR,35.157.215.84/32,全局选择,no-resolve
  - IP-CIDR,35.157.217.255/32,全局选择,no-resolve
  - IP-CIDR,52.58.209.134/32,全局选择,no-resolve
  - IP-CIDR,54.93.124.31/32,全局选择,no-resolve
  - IP-CIDR,54.162.243.80/32,全局选择,no-resolve
  - IP-CIDR,54.173.34.141/32,全局选择,no-resolve
  - IP-CIDR,54.235.23.242/32,全局选择,no-resolve
  - IP-CIDR,169.45.248.118/32,全局选择,no-resolve
  - DOMAIN-SUFFIX,pscp.tv,全局选择
  - DOMAIN-SUFFIX,periscope.tv,全局选择
  - DOMAIN-SUFFIX,t.co,全局选择
  - DOMAIN-SUFFIX,twimg.co,全局选择
  - DOMAIN-SUFFIX,twimg.com,全局选择
  - DOMAIN-SUFFIX,twitpic.com,全局选择
  - DOMAIN-SUFFIX,vine.co,全局选择
  - DOMAIN-KEYWORD,twitter,全局选择
  - DOMAIN-SUFFIX,t.me,全局选择
  - DOMAIN-SUFFIX,tdesktop.com,全局选择
  - DOMAIN-SUFFIX,telegra.ph,全局选择
  - DOMAIN-SUFFIX,telegram.me,全局选择
  - DOMAIN-SUFFIX,telegram.org,全局选择
  - IP-CIDR,91.108.4.0/22,全局选择,no-resolve
  - IP-CIDR,91.108.8.0/22,全局选择,no-resolve
  - IP-CIDR,91.108.12.0/22,全局选择,no-resolve
  - IP-CIDR,91.108.16.0/22,全局选择,no-resolve
  - IP-CIDR,91.108.56.0/22,全局选择,no-resolve
  - IP-CIDR,149.154.160.0/20,全局选择,no-resolve
  - IP-CIDR6,2001:b28:f23d::/48,全局选择,no-resolve
  - IP-CIDR6,2001:b28:f23f::/48,全局选择,no-resolve
  - IP-CIDR6,2001:67c:4e8::/48,全局选择,no-resolve
  - DOMAIN-SUFFIX,line.me,全局选择
  - DOMAIN-SUFFIX,line-apps.com,全局选择
  - DOMAIN-SUFFIX,line-scdn.net,全局选择
  - DOMAIN-SUFFIX,naver.jp,全局选择
  - IP-CIDR,103.2.30.0/23,全局选择,no-resolve
  - IP-CIDR,125.209.208.0/20,全局选择,no-resolve
  - IP-CIDR,147.92.128.0/17,全局选择,no-resolve
  - IP-CIDR,203.104.144.0/21,全局选择,no-resolve
  - DOMAIN-SUFFIX,4shared.com,全局选择
  - DOMAIN-SUFFIX,520cc.cc,全局选择
  - DOMAIN-SUFFIX,881903.com,全局选择
  - DOMAIN-SUFFIX,9cache.com,全局选择
  - DOMAIN-SUFFIX,9gag.com,全局选择
  - DOMAIN-SUFFIX,abc.com,全局选择
  - DOMAIN-SUFFIX,abc.net.au,全局选择
  - DOMAIN-SUFFIX,abebooks.com,全局选择
  - DOMAIN-SUFFIX,amazon.co.jp,全局选择
  - DOMAIN-SUFFIX,apigee.com,全局选择
  - DOMAIN-SUFFIX,apk-dl.com,全局选择
  - DOMAIN-SUFFIX,apkfind.com,全局选择
  - DOMAIN-SUFFIX,apkmirror.com,全局选择
  - DOMAIN-SUFFIX,apkmonk.com,全局选择
  - DOMAIN-SUFFIX,apkpure.com,全局选择
  - DOMAIN-SUFFIX,aptoide.com,全局选择
  - DOMAIN-SUFFIX,archive.is,全局选择
  - DOMAIN-SUFFIX,archive.org,全局选择
  - DOMAIN-SUFFIX,arte.tv,全局选择
  - DOMAIN-SUFFIX,artstation.com,全局选择
  - DOMAIN-SUFFIX,arukas.io,全局选择
  - DOMAIN-SUFFIX,ask.com,全局选择
  - DOMAIN-SUFFIX,avg.com,全局选择
  - DOMAIN-SUFFIX,avgle.com,全局选择
  - DOMAIN-SUFFIX,badoo.com,全局选择
  - DOMAIN-SUFFIX,bandwagonhost.com,全局选择
  - DOMAIN-SUFFIX,bbc.com,全局选择
  - DOMAIN-SUFFIX,behance.net,全局选择
  - DOMAIN-SUFFIX,bibox.com,全局选择
  - DOMAIN-SUFFIX,biggo.com.tw,全局选择
  - DOMAIN-SUFFIX,binance.com,全局选择
  - DOMAIN-SUFFIX,bitcointalk.org,全局选择
  - DOMAIN-SUFFIX,bitfinex.com,全局选择
  - DOMAIN-SUFFIX,bitmex.com,全局选择
  - DOMAIN-SUFFIX,bit-z.com,全局选择
  - DOMAIN-SUFFIX,bloglovin.com,全局选择
  - DOMAIN-SUFFIX,bloomberg.cn,全局选择
  - DOMAIN-SUFFIX,bloomberg.com,全局选择
  - DOMAIN-SUFFIX,blubrry.com,全局选择
  - DOMAIN-SUFFIX,book.com.tw,全局选择
  - DOMAIN-SUFFIX,booklive.jp,全局选择
  - DOMAIN-SUFFIX,books.com.tw,全局选择
  - DOMAIN-SUFFIX,boslife.net,全局选择
  - DOMAIN-SUFFIX,box.com,全局选择
  - DOMAIN-SUFFIX,businessinsider.com,全局选择
  - DOMAIN-SUFFIX,bwh1.net,全局选择
  - DOMAIN-SUFFIX,castbox.fm,全局选择
  - DOMAIN-SUFFIX,cbc.ca,全局选择
  - DOMAIN-SUFFIX,cdw.com,全局选择
  - DOMAIN-SUFFIX,change.org,全局选择
  - DOMAIN-SUFFIX,channelnewsasia.com,全局选择
  - DOMAIN-SUFFIX,ck101.com,全局选择
  - DOMAIN-SUFFIX,clarionproject.org,全局选择
  - DOMAIN-SUFFIX,clyp.it,全局选择
  - DOMAIN-SUFFIX,cna.com.tw,全局选择
  - DOMAIN-SUFFIX,comparitech.com,全局选择
  - DOMAIN-SUFFIX,conoha.jp,全局选择
  - DOMAIN-SUFFIX,crucial.com,全局选择
  - DOMAIN-SUFFIX,cts.com.tw,全局选择
  - DOMAIN-SUFFIX,cw.com.tw,全局选择
  - DOMAIN-SUFFIX,cyberctm.com,全局选择
  - DOMAIN-SUFFIX,dailymotion.com,全局选择
  - DOMAIN-SUFFIX,dailyview.tw,全局选择
  - DOMAIN-SUFFIX,daum.net,全局选择
  - DOMAIN-SUFFIX,daumcdn.net,全局选择
  - DOMAIN-SUFFIX,dcard.tw,全局选择
  - DOMAIN-SUFFIX,deepdiscount.com,全局选择
  - DOMAIN-SUFFIX,depositphotos.com,全局选择
  - DOMAIN-SUFFIX,deviantart.com,全局选择
  - DOMAIN-SUFFIX,disconnect.me,全局选择
  - DOMAIN-SUFFIX,discordapp.com,全局选择
  - DOMAIN-SUFFIX,discordapp.net,全局选择
  - DOMAIN-SUFFIX,disqus.com,全局选择
  - DOMAIN-SUFFIX,dlercloud.com,全局选择
  - DOMAIN-SUFFIX,dns2go.com,全局选择
  - DOMAIN-SUFFIX,dowjones.com,全局选择
  - DOMAIN-SUFFIX,dropbox.com,全局选择
  - DOMAIN-SUFFIX,dropboxusercontent.com,全局选择
  - DOMAIN-SUFFIX,duckduckgo.com,全局选择
  - DOMAIN-SUFFIX,dw.com,全局选择
  - DOMAIN-SUFFIX,dynu.com,全局选择
  - DOMAIN-SUFFIX,earthcam.com,全局选择
  - DOMAIN-SUFFIX,ebookservice.tw,全局选择
  - DOMAIN-SUFFIX,economist.com,全局选择
  - DOMAIN-SUFFIX,edgecastcdn.net,全局选择
  - DOMAIN-SUFFIX,edu,全局选择
  - DOMAIN-SUFFIX,elpais.com,全局选择
  - DOMAIN-SUFFIX,enanyang.my,全局选择
  - DOMAIN-SUFFIX,encyclopedia.com,全局选择
  - DOMAIN-SUFFIX,esoir.be,全局选择
  - DOMAIN-SUFFIX,etherscan.io,全局选择
  - DOMAIN-SUFFIX,euronews.com,全局选择
  - DOMAIN-SUFFIX,evozi.com,全局选择
  - DOMAIN-SUFFIX,feedly.com,全局选择
  - DOMAIN-SUFFIX,firech.at,全局选择
  - DOMAIN-SUFFIX,flickr.com,全局选择
  - DOMAIN-SUFFIX,flitto.com,全局选择
  - DOMAIN-SUFFIX,foreignpolicy.com,全局选择
  - DOMAIN-SUFFIX,全局选择browser.org,全局选择
  - DOMAIN-SUFFIX,全局选择wechat.com,全局选择
  - DOMAIN-SUFFIX,全局选择weibo.com,全局选择
  - DOMAIN-SUFFIX,friday.tw,全局选择
  - DOMAIN-SUFFIX,ftchinese.com,全局选择
  - DOMAIN-SUFFIX,ftimg.net,全局选择
  - DOMAIN-SUFFIX,gate.io,全局选择
  - DOMAIN-SUFFIX,getlantern.org,全局选择
  - DOMAIN-SUFFIX,getsync.com,全局选择
  - DOMAIN-SUFFIX,globalvoices.org,全局选择
  - DOMAIN-SUFFIX,goo.ne.jp,全局选择
  - DOMAIN-SUFFIX,goodreads.com,全局选择
  - DOMAIN-SUFFIX,gov,全局选择
  - DOMAIN-SUFFIX,gov.tw,全局选择
  - DOMAIN-SUFFIX,greatfire.org,全局选择
  - DOMAIN-SUFFIX,gumroad.com,全局选择
  - DOMAIN-SUFFIX,hbg.com,全局选择
  - DOMAIN-SUFFIX,heroku.com,全局选择
  - DOMAIN-SUFFIX,hightail.com,全局选择
  - DOMAIN-SUFFIX,hk01.com,全局选择
  - DOMAIN-SUFFIX,hkbf.org,全局选择
  - DOMAIN-SUFFIX,hkbookcity.com,全局选择
  - DOMAIN-SUFFIX,hkej.com,全局选择
  - DOMAIN-SUFFIX,hket.com,全局选择
  - DOMAIN-SUFFIX,hkgolden.com,全局选择
  - DOMAIN-SUFFIX,hootsuite.com,全局选择
  - DOMAIN-SUFFIX,hudson.org,全局选择
  - DOMAIN-SUFFIX,hyread.com.tw,全局选择
  - DOMAIN-SUFFIX,ibtimes.com,全局选择
  - DOMAIN-SUFFIX,i-cable.com,全局选择
  - DOMAIN-SUFFIX,icij.org,全局选择
  - DOMAIN-SUFFIX,icoco.com,全局选择
  - DOMAIN-SUFFIX,imgur.com,全局选择
  - DOMAIN-SUFFIX,initiummall.com,全局选择
  - DOMAIN-SUFFIX,insecam.org,全局选择
  - DOMAIN-SUFFIX,ipfs.io,全局选择
  - DOMAIN-SUFFIX,issuu.com,全局选择
  - DOMAIN-SUFFIX,istockphoto.com,全局选择
  - DOMAIN-SUFFIX,japantimes.co.jp,全局选择
  - DOMAIN-SUFFIX,jiji.com,全局选择
  - DOMAIN-SUFFIX,jinx.com,全局选择
  - DOMAIN-SUFFIX,jkforum.net,全局选择
  - DOMAIN-SUFFIX,joinmastodon.org,全局选择
  - DOMAIN-SUFFIX,justmysocks.net,全局选择
  - DOMAIN-SUFFIX,justpaste.it,全局选择
  - DOMAIN-SUFFIX,kakao.com,全局选择
  - DOMAIN-SUFFIX,kakaocorp.com,全局选择
  - DOMAIN-SUFFIX,kik.com,全局选择
  - DOMAIN-SUFFIX,kobo.com,全局选择
  - DOMAIN-SUFFIX,kobobooks.com,全局选择
  - DOMAIN-SUFFIX,kodingen.com,全局选择
  - DOMAIN-SUFFIX,lemonde.fr,全局选择
  - DOMAIN-SUFFIX,lepoint.fr,全局选择
  - DOMAIN-SUFFIX,lihkg.com,全局选择
  - DOMAIN-SUFFIX,listennotes.com,全局选择
  - DOMAIN-SUFFIX,livestream.com,全局选择
  - DOMAIN-SUFFIX,logmein.com,全局选择
  - DOMAIN-SUFFIX,mail.ru,全局选择
  - DOMAIN-SUFFIX,mailchimp.com,全局选择
  - DOMAIN-SUFFIX,marc.info,全局选择
  - DOMAIN-SUFFIX,matters.news,全局选择
  - DOMAIN-SUFFIX,maying.co,全局选择
  - DOMAIN-SUFFIX,medium.com,全局选择
  - DOMAIN-SUFFIX,mega.nz,全局选择
  - DOMAIN-SUFFIX,mil,全局选择
  - DOMAIN-SUFFIX,mingpao.com,全局选择
  - DOMAIN-SUFFIX,mobile01.com,全局选择
  - DOMAIN-SUFFIX,myspace.com,全局选择
  - DOMAIN-SUFFIX,myspacecdn.com,全局选择
  - DOMAIN-SUFFIX,nanyang.com,全局选择
  - DOMAIN-SUFFIX,naver.com,全局选择
  - DOMAIN-SUFFIX,neowin.net,全局选择
  - DOMAIN-SUFFIX,newstapa.org,全局选择
  - DOMAIN-SUFFIX,nexitally.com,全局选择
  - DOMAIN-SUFFIX,nhk.or.jp,全局选择
  - DOMAIN-SUFFIX,nicovideo.jp,全局选择
  - DOMAIN-SUFFIX,nii.ac.jp,全局选择
  - DOMAIN-SUFFIX,nikkei.com,全局选择
  - DOMAIN-SUFFIX,nofile.io,全局选择
  - DOMAIN-SUFFIX,now.com,全局选择
  - DOMAIN-SUFFIX,nrk.no,全局选择
  - DOMAIN-SUFFIX,nyt.com,全局选择
  - DOMAIN-SUFFIX,nytchina.com,全局选择
  - DOMAIN-SUFFIX,nytcn.me,全局选择
  - DOMAIN-SUFFIX,nytco.com,全局选择
  - DOMAIN-SUFFIX,nytimes.com,全局选择
  - DOMAIN-SUFFIX,nytimg.com,全局选择
  - DOMAIN-SUFFIX,nytlog.com,全局选择
  - DOMAIN-SUFFIX,nytstyle.com,全局选择
  - DOMAIN-SUFFIX,ok.ru,全局选择
  - DOMAIN-SUFFIX,okex.com,全局选择
  - DOMAIN-SUFFIX,on.cc,全局选择
  - DOMAIN-SUFFIX,orientaldaily.com.my,全局选择
  - DOMAIN-SUFFIX,overcast.fm,全局选择
  - DOMAIN-SUFFIX,paltalk.com,全局选择
  - DOMAIN-SUFFIX,pao-pao.net,全局选择
  - DOMAIN-SUFFIX,parsevideo.com,全局选择
  - DOMAIN-SUFFIX,pbxes.com,全局选择
  - DOMAIN-SUFFIX,pcdvd.com.tw,全局选择
  - DOMAIN-SUFFIX,pchome.com.tw,全局选择
  - DOMAIN-SUFFIX,pcloud.com,全局选择
  - DOMAIN-SUFFIX,picacomic.com,全局选择
  - DOMAIN-SUFFIX,pinimg.com,全局选择
  - DOMAIN-SUFFIX,pixiv.net,全局选择
  - DOMAIN-SUFFIX,player.fm,全局选择
  - DOMAIN-SUFFIX,plurk.com,全局选择
  - DOMAIN-SUFFIX,po18.tw,全局选择
  - DOMAIN-SUFFIX,potato.im,全局选择
  - DOMAIN-SUFFIX,potatso.com,全局选择
  - DOMAIN-SUFFIX,prism-break.org,全局选择
  - DOMAIN-SUFFIX,proxifier.com,全局选择
  - DOMAIN-SUFFIX,pt.im,全局选择
  - DOMAIN-SUFFIX,pts.org.tw,全局选择
  - DOMAIN-SUFFIX,pubu.com.tw,全局选择
  - DOMAIN-SUFFIX,pubu.tw,全局选择
  - DOMAIN-SUFFIX,pureapk.com,全局选择
  - DOMAIN-SUFFIX,quora.com,全局选择
  - DOMAIN-SUFFIX,quoracdn.net,全局选择
  - DOMAIN-SUFFIX,rakuten.co.jp,全局选择
  - DOMAIN-SUFFIX,readingtimes.com.tw,全局选择
  - DOMAIN-SUFFIX,readmoo.com,全局选择
  - DOMAIN-SUFFIX,redbubble.com,全局选择
  - DOMAIN-SUFFIX,reddit.com,全局选择
  - DOMAIN-SUFFIX,redditmedia.com,全局选择
  - DOMAIN-SUFFIX,resilio.com,全局选择
  - DOMAIN-SUFFIX,reuters.com,全局选择
  - DOMAIN-SUFFIX,reutersmedia.net,全局选择
  - DOMAIN-SUFFIX,rfi.fr,全局选择
  - DOMAIN-SUFFIX,rixcloud.com,全局选择
  - DOMAIN-SUFFIX,roadshow.hk,全局选择
  - DOMAIN-SUFFIX,scmp.com,全局选择
  - DOMAIN-SUFFIX,scribd.com,全局选择
  - DOMAIN-SUFFIX,seatguru.com,全局选择
  - DOMAIN-SUFFIX,shadowsocks.org,全局选择
  - DOMAIN-SUFFIX,shopee.tw,全局选择
  - DOMAIN-SUFFIX,slideshare.net,全局选择
  - DOMAIN-SUFFIX,softfamous.com,全局选择
  - DOMAIN-SUFFIX,soundcloud.com,全局选择
  - DOMAIN-SUFFIX,ssrcloud.org,全局选择
  - DOMAIN-SUFFIX,startpage.com,全局选择
  - DOMAIN-SUFFIX,steamcommunity.com,全局选择
  - DOMAIN-SUFFIX,steemit.com,全局选择
  - DOMAIN-SUFFIX,steemitwallet.com,全局选择
  - DOMAIN-SUFFIX,t66y.com,全局选择
  - DOMAIN-SUFFIX,tapatalk.com,全局选择
  - DOMAIN-SUFFIX,teco-hk.org,全局选择
  - DOMAIN-SUFFIX,teco-mo.org,全局选择
  - DOMAIN-SUFFIX,teddysun.com,全局选择
  - DOMAIN-SUFFIX,textnow.me,全局选择
  - DOMAIN-SUFFIX,theguardian.com,全局选择
  - DOMAIN-SUFFIX,theinitium.com,全局选择
  - DOMAIN-SUFFIX,thetvdb.com,全局选择
  - DOMAIN-SUFFIX,tineye.com,全局选择
  - DOMAIN-SUFFIX,torproject.org,全局选择
  - DOMAIN-SUFFIX,tumblr.com,全局选择
  - DOMAIN-SUFFIX,turbobit.net,全局选择
  - DOMAIN-SUFFIX,tutanota.com,全局选择
  - DOMAIN-SUFFIX,tvboxnow.com,全局选择
  - DOMAIN-SUFFIX,udn.com,全局选择
  - DOMAIN-SUFFIX,unseen.is,全局选择
  - DOMAIN-SUFFIX,upmedia.mg,全局选择
  - DOMAIN-SUFFIX,uptodown.com,全局选择
  - DOMAIN-SUFFIX,urbandictionary.com,全局选择
  - DOMAIN-SUFFIX,ustream.tv,全局选择
  - DOMAIN-SUFFIX,uwants.com,全局选择
  - DOMAIN-SUFFIX,v2ray.com,全局选择
  - DOMAIN-SUFFIX,viber.com,全局选择
  - DOMAIN-SUFFIX,videopress.com,全局选择
  - DOMAIN-SUFFIX,vimeo.com,全局选择
  - DOMAIN-SUFFIX,voachinese.com,全局选择
  - DOMAIN-SUFFIX,voanews.com,全局选择
  - DOMAIN-SUFFIX,voxer.com,全局选择
  - DOMAIN-SUFFIX,vzw.com,全局选择
  - DOMAIN-SUFFIX,w3schools.com,全局选择
  - DOMAIN-SUFFIX,washingtonpost.com,全局选择
  - DOMAIN-SUFFIX,wattpad.com,全局选择
  - DOMAIN-SUFFIX,whoer.net,全局选择
  - DOMAIN-SUFFIX,wikimapia.org,全局选择
  - DOMAIN-SUFFIX,wikipedia.org,全局选择
  - DOMAIN-SUFFIX,wikiquote.org,全局选择
  - DOMAIN-SUFFIX,wikiwand.com,全局选择
  - DOMAIN-SUFFIX,winudf.com,全局选择
  - DOMAIN-SUFFIX,wire.com,全局选择
  - DOMAIN-SUFFIX,wordpress.com,全局选择
  - DOMAIN-SUFFIX,workflow.is,全局选择
  - DOMAIN-SUFFIX,worldcat.org,全局选择
  - DOMAIN-SUFFIX,wsj.com,全局选择
  - DOMAIN-SUFFIX,wsj.net,全局选择
  - DOMAIN-SUFFIX,xhamster.com,全局选择
  - DOMAIN-SUFFIX,xn--90wwvt03e.com,全局选择
  - DOMAIN-SUFFIX,xn--i2ru8q2qg.com,全局选择
  - DOMAIN-SUFFIX,xnxx.com,全局选择
  - DOMAIN-SUFFIX,xvideos.com,全局选择
  - DOMAIN-SUFFIX,yahoo.com,全局选择
  - DOMAIN-SUFFIX,yandex.ru,全局选择
  - DOMAIN-SUFFIX,ycombinator.com,全局选择
  - DOMAIN-SUFFIX,yesasia.com,全局选择
  - DOMAIN-SUFFIX,yes-news.com,全局选择
  - DOMAIN-SUFFIX,yomiuri.co.jp,全局选择
  - DOMAIN-SUFFIX,you-get.org,全局选择
  - DOMAIN-SUFFIX,zaobao.com,全局选择
  - DOMAIN-SUFFIX,zb.com,全局选择
  - DOMAIN-SUFFIX,zello.com,全局选择
  - DOMAIN-SUFFIX,zeronet.io,全局选择
  - DOMAIN-SUFFIX,zoom.us,全局选择
  - DOMAIN-KEYWORD,github,全局选择
  - DOMAIN-KEYWORD,jav,全局选择
  - DOMAIN-KEYWORD,pinterest,全局选择
  - DOMAIN-KEYWORD,porn,全局选择
  - DOMAIN-KEYWORD,wikileaks,全局选择
  - DOMAIN-SUFFIX,apartmentratings.com,全局选择
  - DOMAIN-SUFFIX,apartments.com,全局选择
  - DOMAIN-SUFFIX,bankmobilevibe.com,全局选择
  - DOMAIN-SUFFIX,bing.com,全局选择
  - DOMAIN-SUFFIX,booktopia.com.au,全局选择
  - DOMAIN-SUFFIX,cccat.io,全局选择
  - DOMAIN-SUFFIX,centauro.com.br,全局选择
  - DOMAIN-SUFFIX,clearsurance.com,全局选择
  - DOMAIN-SUFFIX,costco.com,全局选择
  - DOMAIN-SUFFIX,crackle.com,全局选择
  - DOMAIN-SUFFIX,depositphotos.cn,全局选择
  - DOMAIN-SUFFIX,dish.com,全局选择
  - DOMAIN-SUFFIX,dmm.co.jp,全局选择
  - DOMAIN-SUFFIX,dmm.com,全局选择
  - DOMAIN-SUFFIX,dnvod.tv,全局选择
  - DOMAIN-SUFFIX,esurance.com,全局选择
  - DOMAIN-SUFFIX,extmatrix.com,全局选择
  - DOMAIN-SUFFIX,fastpic.ru,全局选择
  - DOMAIN-SUFFIX,flipboard.com,全局选择
  - DOMAIN-SUFFIX,fnac.be,全局选择
  - DOMAIN-SUFFIX,fnac.com,全局选择
  - DOMAIN-SUFFIX,funkyimg.com,全局选择
  - DOMAIN-SUFFIX,fxnetworks.com,全局选择
  - DOMAIN-SUFFIX,gettyimages.com,全局选择
  - DOMAIN-SUFFIX,go.com,全局选择
  - DOMAIN-SUFFIX,here.com,全局选择
  - DOMAIN-SUFFIX,jcpenney.com,全局选择
  - DOMAIN-SUFFIX,jiehua.tv,全局选择
  - DOMAIN-SUFFIX,mailfence.com,全局选择
  - DOMAIN-SUFFIX,nationwide.com,全局选择
  - DOMAIN-SUFFIX,nbc.com,全局选择
  - DOMAIN-SUFFIX,nexon.com,全局选择
  - DOMAIN-SUFFIX,nordstrom.com,全局选择
  - DOMAIN-SUFFIX,nordstromimage.com,全局选择
  - DOMAIN-SUFFIX,nordstromrack.com,全局选择
  - DOMAIN-SUFFIX,superpages.com,全局选择
  - DOMAIN-SUFFIX,target.com,全局选择
  - DOMAIN-SUFFIX,thinkgeek.com,全局选择
  - DOMAIN-SUFFIX,tracfone.com,全局选择
  - DOMAIN-SUFFIX,unity3d.com,全局选择
  - DOMAIN-SUFFIX,uploader.jp,全局选择
  - DOMAIN-SUFFIX,vevo.com,全局选择
  - DOMAIN-SUFFIX,viu.tv,全局选择
  - DOMAIN-SUFFIX,vk.com,全局选择
  - DOMAIN-SUFFIX,vsco.co,全局选择
  - DOMAIN-SUFFIX,xfinity.com,全局选择
  - DOMAIN-SUFFIX,zattoo.com,全局选择
  - DOMAIN,testflight.apple.com,全局选择
  - DOMAIN-SUFFIX,appsto.re,全局选择
  - DOMAIN,books.itunes.apple.com,全局选择
  - DOMAIN,hls.itunes.apple.com,全局选择
  - DOMAIN,apps.apple.com,全局选择
  - DOMAIN,itunes.apple.com,全局选择
  - DOMAIN,api-glb-sea.smoot.apple.com,全局选择
  - DOMAIN,lookup-api.apple.com,全局选择
  - DOMAIN-SUFFIX,abc.xyz,全局选择
  - DOMAIN-SUFFIX,android.com,全局选择
  - DOMAIN-SUFFIX,androidify.com,全局选择
  - DOMAIN-SUFFIX,dialogflow.com,全局选择
  - DOMAIN-SUFFIX,autodraw.com,全局选择
  - DOMAIN-SUFFIX,capitalg.com,全局选择
  - DOMAIN-SUFFIX,certificate-transparency.org,全局选择
  - DOMAIN-SUFFIX,chrome.com,全局选择
  - DOMAIN-SUFFIX,chromeexperiments.com,全局选择
  - DOMAIN-SUFFIX,chromestatus.com,全局选择
  - DOMAIN-SUFFIX,chromium.org,全局选择
  - DOMAIN-SUFFIX,creativelab5.com,全局选择
  - DOMAIN-SUFFIX,debug.com,全局选择
  - DOMAIN-SUFFIX,deepmind.com,全局选择
  - DOMAIN-SUFFIX,firebaseio.com,全局选择
  - DOMAIN-SUFFIX,getmdl.io,全局选择
  - DOMAIN-SUFFIX,ggpht.com,全局选择
  - DOMAIN-SUFFIX,gmail.com,全局选择
  - DOMAIN-SUFFIX,gmodules.com,全局选择
  - DOMAIN-SUFFIX,godoc.org,全局选择
  - DOMAIN-SUFFIX,golang.org,全局选择
  - DOMAIN-SUFFIX,gstatic.com,全局选择
  - DOMAIN-SUFFIX,gv.com,全局选择
  - DOMAIN-SUFFIX,gwtproject.org,全局选择
  - DOMAIN-SUFFIX,itasoftware.com,全局选择
  - DOMAIN-SUFFIX,madewithcode.com,全局选择
  - DOMAIN-SUFFIX,material.io,全局选择
  - DOMAIN-SUFFIX,polymer-project.org,全局选择
  - DOMAIN-SUFFIX,admin.recaptcha.net,全局选择
  - DOMAIN-SUFFIX,recaptcha.net,全局选择
  - DOMAIN-SUFFIX,shattered.io,全局选择
  - DOMAIN-SUFFIX,synergyse.com,全局选择
  - DOMAIN-SUFFIX,tensorflow.org,全局选择
  - DOMAIN-SUFFIX,tfhub.dev,全局选择
  - DOMAIN-SUFFIX,tiltbrush.com,全局选择
  - DOMAIN-SUFFIX,waveprotocol.org,全局选择
  - DOMAIN-SUFFIX,waymo.com,全局选择
  - DOMAIN-SUFFIX,webmproject.org,全局选择
  - DOMAIN-SUFFIX,webrtc.org,全局选择
  - DOMAIN-SUFFIX,whatbrowser.org,全局选择
  - DOMAIN-SUFFIX,widevine.com,全局选择
  - DOMAIN-SUFFIX,x.company,全局选择
  - DOMAIN-SUFFIX,youtu.be,全局选择
  - DOMAIN-SUFFIX,yt.be,全局选择
  - DOMAIN-SUFFIX,ytimg.com,全局选择
  - DOMAIN-SUFFIX,1drv.com,全局选择
  - DOMAIN-SUFFIX,1drv.ms,全局选择
  - DOMAIN-SUFFIX,blob.core.windows.net,全局选择
  - DOMAIN-SUFFIX,livefilestore.com,全局选择
  - DOMAIN-SUFFIX,onedrive.com,全局选择
  - DOMAIN-SUFFIX,storage.live.com,全局选择
  - DOMAIN-SUFFIX,storage.msn.com,全局选择
  - DOMAIN,oneclient.sfx.ms,全局选择
  - DOMAIN-SUFFIX,0rz.tw,全局选择
  - DOMAIN-SUFFIX,4bluestones.biz,全局选择
  - DOMAIN-SUFFIX,9bis.net,全局选择
  - DOMAIN-SUFFIX,allconnected.co,全局选择
  - DOMAIN-SUFFIX,aol.com,全局选择
  - DOMAIN-SUFFIX,bcc.com.tw,全局选择
  - DOMAIN-SUFFIX,bit.ly,全局选择
  - DOMAIN-SUFFIX,bitshare.com,全局选择
  - DOMAIN-SUFFIX,blog.jp,全局选择
  - DOMAIN-SUFFIX,blogimg.jp,全局选择
  - DOMAIN-SUFFIX,blogtd.org,全局选择
  - DOMAIN-SUFFIX,broadcast.co.nz,全局选择
  - DOMAIN-SUFFIX,camfrog.com,全局选择
  - DOMAIN-SUFFIX,cfos.de,全局选择
  - DOMAIN-SUFFIX,citypopulation.de,全局选择
  - DOMAIN-SUFFIX,cloudfront.net,全局选择
  - DOMAIN-SUFFIX,ctitv.com.tw,全局选择
  - DOMAIN-SUFFIX,cuhk.edu.hk,全局选择
  - DOMAIN-SUFFIX,cusu.hk,全局选择
  - DOMAIN-SUFFIX,discord.gg,全局选择
  - DOMAIN-SUFFIX,discuss.com.hk,全局选择
  - DOMAIN-SUFFIX,dropboxapi.com,全局选择
  - DOMAIN-SUFFIX,duolingo.cn,全局选择
  - DOMAIN-SUFFIX,edditstatic.com,全局选择
  - DOMAIN-SUFFIX,flickriver.com,全局选择
  - DOMAIN-SUFFIX,focustaiwan.tw,全局选择
  - DOMAIN-SUFFIX,全局选择.fr,全局选择
  - DOMAIN-SUFFIX,gigacircle.com,全局选择
  - DOMAIN-SUFFIX,hk-pub.com,全局选择
  - DOMAIN-SUFFIX,hosting.co.uk,全局选择
  - DOMAIN-SUFFIX,hwcdn.net,全局选择
  - DOMAIN-SUFFIX,ifixit.com,全局选择
  - DOMAIN-SUFFIX,iphone4hongkong.com,全局选择
  - DOMAIN-SUFFIX,iphonetaiwan.org,全局选择
  - DOMAIN-SUFFIX,iptvbin.com,全局选择
  - DOMAIN-SUFFIX,linksalpha.com,全局选择
  - DOMAIN-SUFFIX,manyvids.com,全局选择
  - DOMAIN-SUFFIX,myactimes.com,全局选择
  - DOMAIN-SUFFIX,newsblur.com,全局选择
  - DOMAIN-SUFFIX,now.im,全局选择
  - DOMAIN-SUFFIX,nowe.com,全局选择
  - DOMAIN-SUFFIX,redditlist.com,全局选择
  - DOMAIN-SUFFIX,s3.amazonaws.com,全局选择
  - DOMAIN-SUFFIX,signal.org,全局选择
  - DOMAIN-SUFFIX,smartmailcloud.com,全局选择
  - DOMAIN-SUFFIX,sparknotes.com,全局选择
  - DOMAIN-SUFFIX,streetvoice.com,全局选择
  - DOMAIN-SUFFIX,supertop.co,全局选择
  - DOMAIN-SUFFIX,tv.com,全局选择
  - DOMAIN-SUFFIX,typepad.com,全局选择
  - DOMAIN-SUFFIX,udnbkk.com,全局选择
  - DOMAIN-SUFFIX,urbanairship.com,全局选择
  - DOMAIN-SUFFIX,whispersystems.org,全局选择
  - DOMAIN-SUFFIX,wikia.com,全局选择
  - DOMAIN-SUFFIX,wn.com,全局选择
  - DOMAIN-SUFFIX,wolframalpha.com,全局选择
  - DOMAIN-SUFFIX,x-art.com,全局选择
  - DOMAIN-SUFFIX,yimg.com,全局选择
  - DOMAIN,api.steampowered.com,全局选择
  - DOMAIN,store.steampowered.com,全局选择
  - DOMAIN-SUFFIX,aaplimg.com,DIRECT
  - DOMAIN-SUFFIX,apple.co,DIRECT
  - DOMAIN-SUFFIX,apple.com,DIRECT
  - DOMAIN-SUFFIX,apple-cloudkit.com,DIRECT
  - DOMAIN-SUFFIX,appstore.com,DIRECT
  - DOMAIN-SUFFIX,cdn-apple.com,DIRECT
  - DOMAIN-SUFFIX,crashlytics.com,DIRECT
  - DOMAIN-SUFFIX,icloud.com,DIRECT
  - DOMAIN-SUFFIX,icloud-content.com,DIRECT
  - DOMAIN-SUFFIX,me.com,DIRECT
  - DOMAIN-SUFFIX,mzstatic.com,DIRECT
  - DOMAIN,www-cdn.icloud.com.akadns.net,DIRECT
  - DOMAIN-SUFFIX,t.me,全局选择
  - DOMAIN-SUFFIX,tdesktop.com,全局选择
  - DOMAIN-SUFFIX,telegra.ph,全局选择
  - DOMAIN-SUFFIX,telegram.me,全局选择
  - DOMAIN-SUFFIX,telegram.org,全局选择
  - IP-CIDR,91.108.4.0/22,全局选择,no-resolve
  - IP-CIDR,91.108.8.0/22,全局选择,no-resolve
  - IP-CIDR,91.108.12.0/22,全局选择,no-resolve
  - IP-CIDR,91.108.16.0/22,全局选择,no-resolve
  - IP-CIDR,91.108.56.0/22,全局选择,no-resolve
  - IP-CIDR,149.154.160.0/20,全局选择,no-resolve
  - IP-CIDR6,2001:b28:f23d::/48,全局选择,no-resolve
  - IP-CIDR6,2001:b28:f23f::/48,全局选择,no-resolve
  - IP-CIDR6,2001:67c:4e8::/48,全局选择,no-resolve
  - DOMAIN-SUFFIX,googlevideo.com,全局选择
  - DOMAIN-SUFFIX,youtube.com,全局选择
  - DOMAIN,youtubei.googleapis.com,全局选择
  - DOMAIN-SUFFIX,netflix.com,全局选择
  - DOMAIN-SUFFIX,netflix.net,全局选择
  - DOMAIN-SUFFIX,nflxext.com,全局选择
  - DOMAIN-SUFFIX,nflximg.com,全局选择
  - DOMAIN-SUFFIX,nflximg.net,全局选择
  - DOMAIN-SUFFIX,nflxso.net,全局选择
  - DOMAIN-SUFFIX,nflxvideo.net,全局选择
  - DOMAIN-SUFFIX,netflixdnstest0.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest1.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest2.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest3.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest4.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest5.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest6.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest7.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest8.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest9.com,全局选择
  - IP-CIDR,23.246.0.0/18,全局选择,no-resolve
  - IP-CIDR,37.77.184.0/21,全局选择,no-resolve
  - IP-CIDR,45.57.0.0/17,全局选择,no-resolve
  - IP-CIDR,64.120.128.0/17,全局选择,no-resolve
  - IP-CIDR,66.197.128.0/17,全局选择,no-resolve
  - IP-CIDR,108.175.32.0/20,全局选择,no-resolve
  - IP-CIDR,192.173.64.0/18,全局选择,no-resolve
  - IP-CIDR,198.38.96.0/19,全局选择,no-resolve
  - IP-CIDR,198.45.48.0/20,全局选择,no-resolve

  - DOMAIN-SUFFIX,deezer.com,全局选择
  - DOMAIN-SUFFIX,dzcdn.net,全局选择
  - DOMAIN-SUFFIX,kkbox.com,全局选择
  - DOMAIN-SUFFIX,kkbox.com.tw,全局选择
  - DOMAIN-SUFFIX,kfs.io,全局选择
  - DOMAIN-SUFFIX,joox.com,全局选择
  - DOMAIN-SUFFIX,pandora.com,全局选择
  - DOMAIN-SUFFIX,p-cdn.us,全局选择
  - DOMAIN-SUFFIX,sndcdn.com,全局选择
  - DOMAIN-SUFFIX,soundcloud.com,全局选择
  - DOMAIN-SUFFIX,pscdn.co,全局选择
  - DOMAIN-SUFFIX,scdn.co,全局选择
  - DOMAIN-SUFFIX,spotify.com,全局选择
  - DOMAIN-SUFFIX,spoti.fi,全局选择
  - DOMAIN-KEYWORD,spotify.com,全局选择
  - DOMAIN-KEYWORD,-spotify-com,全局选择
  - DOMAIN-SUFFIX,tidal.com,全局选择
  - DOMAIN-SUFFIX,c4assets.com,全局选择
  - DOMAIN-SUFFIX,channel4.com,全局选择
  - DOMAIN-SUFFIX,abema.io,全局选择
  - DOMAIN-SUFFIX,ameba.jp,全局选择
  - DOMAIN-SUFFIX,abema.tv,全局选择
  - DOMAIN-SUFFIX,hayabusa.io,全局选择
  - DOMAIN,abematv.akamaized.net,全局选择
  - DOMAIN,ds-linear-abematv.akamaized.net,全局选择
  - DOMAIN,ds-vod-abematv.akamaized.net,全局选择
  - DOMAIN,linear-abematv.akamaized.net,全局选择
  - DOMAIN-SUFFIX,aiv-cdn.net,全局选择
  - DOMAIN-SUFFIX,aiv-delivery.net,全局选择
  - DOMAIN-SUFFIX,amazonvideo.com,全局选择
  - DOMAIN-SUFFIX,primevideo.com,全局选择
  - DOMAIN,avodmp4s3ww-a.akamaihd.net,全局选择
  - DOMAIN,d25xi40x97liuc.cloudfront.net,全局选择
  - DOMAIN,dmqdd6hw24ucf.cloudfront.net,全局选择
  - DOMAIN,d22qjgkvxw22r6.cloudfront.net,全局选择
  - DOMAIN,d1v5ir2lpwr8os.cloudfront.net,全局选择
  - DOMAIN-KEYWORD,avoddashs,全局选择
  - DOMAIN-SUFFIX,bahamut.com.tw,全局选择
  - DOMAIN-SUFFIX,gamer.com.tw,全局选择
  - DOMAIN,gamer-cds.cdn.hinet.net,全局选择
  - DOMAIN,gamer2-cds.cdn.hinet.net,全局选择
  - DOMAIN-SUFFIX,bbc.co.uk,全局选择
  - DOMAIN-SUFFIX,bbci.co.uk,全局选择
  - DOMAIN-KEYWORD,bbcfmt,全局选择
  - DOMAIN-KEYWORD,uk-live,全局选择
  - DOMAIN-SUFFIX,dazn.com,全局选择
  - DOMAIN-SUFFIX,dazn-api.com,全局选择
  - DOMAIN,d151l6v8er5bdm.cloudfront.net,全局选择
  - DOMAIN-KEYWORD,voddazn,全局选择
  - DOMAIN-SUFFIX,bamgrid.com,全局选择
  - DOMAIN-SUFFIX,disney-plus.net,全局选择
  - DOMAIN-SUFFIX,disneyplus.com,全局选择
  - DOMAIN-SUFFIX,dssott.com,全局选择
  - DOMAIN,cdn.registerdisney.go.com,全局选择
  - DOMAIN-SUFFIX,encoretvb.com,全局选择
  - DOMAIN,edge.api.brightcove.com,全局选择
  - DOMAIN,bcbolt446c5271-a.akamaihd.net,全局选择
  - DOMAIN-SUFFIX,fox.com,全局选择
  - DOMAIN-SUFFIX,foxdcg.com,全局选择
  - DOMAIN-SUFFIX,theplatform.com,全局选择
  - DOMAIN-SUFFIX,uplynk.com,全局选择
  - DOMAIN-SUFFIX,hbo.com,全局选择
  - DOMAIN-SUFFIX,hbogo.com,全局选择
  - DOMAIN-SUFFIX,hbonow.com,全局选择
  - DOMAIN-SUFFIX,hbogoasia.com,全局选择
  - DOMAIN-SUFFIX,hbogoasia.hk,全局选择
  - DOMAIN,bcbolthboa-a.akamaihd.net,全局选择
  - DOMAIN,players.brightcove.net,全局选择
  - DOMAIN,s3-ap-southeast-1.amazonaws.com,全局选择
  - DOMAIN,dai3fd1oh325y.cloudfront.net,全局选择
  - DOMAIN,44wilhpljf.execute-api.ap-southeast-1.amazonaws.com,全局选择
  - DOMAIN,hboasia1-i.akamaihd.net,全局选择
  - DOMAIN,hboasia2-i.akamaihd.net,全局选择
  - DOMAIN,hboasia3-i.akamaihd.net,全局选择
  - DOMAIN,hboasia4-i.akamaihd.net,全局选择
  - DOMAIN,hboasia5-i.akamaihd.net,全局选择
  - DOMAIN,cf-images.ap-southeast-1.prod.boltdns.net,全局选择
  - DOMAIN-SUFFIX,5itv.tv,全局选择
  - DOMAIN-SUFFIX,ocnttv.com,全局选择
  - DOMAIN-SUFFIX,hulu.com,全局选择
  - DOMAIN-SUFFIX,huluim.com,全局选择
  - DOMAIN-SUFFIX,hulustream.com,全局选择
  - DOMAIN-SUFFIX,happyon.jp,全局选择
  - DOMAIN-SUFFIX,hulu.jp,全局选择
  - DOMAIN-SUFFIX,itv.com,全局选择
  - DOMAIN-SUFFIX,itvstatic.com,全局选择
  - DOMAIN,itvpnpmobile-a.akamaihd.net,全局选择
  - DOMAIN-SUFFIX,kktv.com.tw,全局选择
  - DOMAIN-SUFFIX,kktv.me,全局选择
  - DOMAIN,kktv-theater.kk.stream,全局选择
  - DOMAIN-SUFFIX,linetv.tw,全局选择
  - DOMAIN,d3c7rimkq79yfu.cloudfront.net,全局选择
  - DOMAIN-SUFFIX,litv.tv,全局选择
  - DOMAIN,litv全局选择mobile-hichannel.cdn.hinet.net,全局选择
  - DOMAIN-SUFFIX,channel5.com,全局选择
  - DOMAIN-SUFFIX,my5.tv,全局选择
  - DOMAIN,d349g9zuie06uo.cloudfront.net,全局选择
  - DOMAIN-SUFFIX,mytvsuper.com,全局选择
  - DOMAIN-SUFFIX,tvb.com,全局选择
  - DOMAIN-SUFFIX,netflix.com,全局选择
  - DOMAIN-SUFFIX,netflix.net,全局选择
  - DOMAIN-SUFFIX,nflxext.com,全局选择
  - DOMAIN-SUFFIX,nflximg.com,全局选择
  - DOMAIN-SUFFIX,nflximg.net,全局选择
  - DOMAIN-SUFFIX,nflxso.net,全局选择
  - DOMAIN-SUFFIX,nflxvideo.net,全局选择
  - DOMAIN-SUFFIX,netflixdnstest0.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest1.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest2.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest3.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest4.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest5.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest6.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest7.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest8.com,全局选择
  - DOMAIN-SUFFIX,netflixdnstest9.com,全局选择
  - IP-CIDR,23.246.0.0/18,全局选择,no-resolve
  - IP-CIDR,37.77.184.0/21,全局选择,no-resolve
  - IP-CIDR,45.57.0.0/17,全局选择,no-resolve
  - IP-CIDR,64.120.128.0/17,全局选择,no-resolve
  - IP-CIDR,66.197.128.0/17,全局选择,no-resolve
  - IP-CIDR,108.175.32.0/20,全局选择,no-resolve
  - IP-CIDR,192.173.64.0/18,全局选择,no-resolve
  - IP-CIDR,198.38.96.0/19,全局选择,no-resolve
  - IP-CIDR,198.45.48.0/20,全局选择,no-resolve
  - DOMAIN-SUFFIX,dmc.nico,全局选择
  - DOMAIN-SUFFIX,nicovideo.jp,全局选择
  - DOMAIN-SUFFIX,nimg.jp,全局选择
  - DOMAIN-SUFFIX,socdm.com,全局选择
  - DOMAIN-SUFFIX,pbs.org,全局选择
  - DOMAIN-SUFFIX,phncdn.com,全局选择
  - DOMAIN-SUFFIX,pornhub.com,全局选择
  - DOMAIN-SUFFIX,pornhubpremium.com,全局选择
  - DOMAIN-SUFFIX,skyking.com.tw,全局选择
  - DOMAIN,hamifans.emome.net,全局选择
  - DOMAIN-SUFFIX,twitch.tv,全局选择
  - DOMAIN-SUFFIX,twitchcdn.net,全局选择
  - DOMAIN-SUFFIX,ttvnw.net,全局选择
  - DOMAIN-SUFFIX,jtvnw.net,全局选择
  - DOMAIN-SUFFIX,viu.com,全局选择
  - DOMAIN-SUFFIX,viu.tv,全局选择
  - DOMAIN,api.viu.now.com,全局选择
  - DOMAIN,d1k2us671qcoau.cloudfront.net,全局选择
  - DOMAIN,d2anahhhmp1ffz.cloudfront.net,全局选择
  - DOMAIN,dfp6rglgjqszk.cloudfront.net,全局选择
  - DOMAIN-SUFFIX,googlevideo.com,全局选择
  - DOMAIN-SUFFIX,youtube.com,全局选择
  - DOMAIN,youtubei.googleapis.com,全局选择
  - DOMAIN-SUFFIX,local,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
  - IP-CIDR,10.0.0.0/8,DIRECT,no-resolve
  - IP-CIDR,172.16.0.0/12,DIRECT,no-resolve
  - IP-CIDR,127.0.0.0/8,DIRECT,no-resolve
  - IP-CIDR,100.64.0.0/10,DIRECT,no-resolve
  - IP-CIDR6,::1/128,DIRECT,no-resolve
  - IP-CIDR6,fc00::/7,DIRECT,no-resolve
  - IP-CIDR6,fe80::/10,DIRECT,no-resolve
  - IP-CIDR6,fd00::/8,DIRECT,no-resolve
  - DOMAIN,msg.umeng.com,DIRECT
  - DOMAIN,msg.umengcloud.com,DIRECT
  - DOMAIN-SUFFIX,qhres.com,DIRECT
  - DOMAIN-SUFFIX,qhimg.com,DIRECT
  - DOMAIN-SUFFIX,akadns.net,DIRECT
  - DOMAIN-SUFFIX,alibaba.com,DIRECT
  - DOMAIN-SUFFIX,alicdn.com,DIRECT
  - DOMAIN-SUFFIX,alikunlun.com,DIRECT
  - DOMAIN-SUFFIX,alipay.com,DIRECT
  - DOMAIN-SUFFIX,amap.com,DIRECT
  - DOMAIN-SUFFIX,autonavi.com,DIRECT
  - DOMAIN-SUFFIX,dingtalk.com,DIRECT
  - DOMAIN-SUFFIX,mxhichina.com,DIRECT
  - DOMAIN-SUFFIX,soku.com,DIRECT
  - DOMAIN-SUFFIX,taobao.com,DIRECT
  - DOMAIN-SUFFIX,tmall.com,DIRECT
  - DOMAIN-SUFFIX,tmall.hk,DIRECT
  - DOMAIN-SUFFIX,ykimg.com,DIRECT
  - DOMAIN-SUFFIX,youku.com,DIRECT
  - DOMAIN-SUFFIX,xiami.com,DIRECT
  - DOMAIN-SUFFIX,xiami.net,DIRECT
  - DOMAIN-SUFFIX,aaplimg.com,DIRECT
  - DOMAIN-SUFFIX,apple.co,DIRECT
  - DOMAIN-SUFFIX,apple.com,DIRECT
  - DOMAIN-SUFFIX,apple-cloudkit.com,DIRECT
  - DOMAIN-SUFFIX,appstore.com,DIRECT
  - DOMAIN-SUFFIX,cdn-apple.com,DIRECT
  - DOMAIN-SUFFIX,crashlytics.com,DIRECT
  - DOMAIN-SUFFIX,icloud.com,DIRECT
  - DOMAIN-SUFFIX,icloud-content.com,DIRECT
  - DOMAIN,www-cdn.icloud.com.akadns.net,DIRECT
  - DOMAIN-SUFFIX,acgvideo.com,DIRECT
  - DOMAIN-SUFFIX,hdslb.com,DIRECT
  - DOMAIN-SUFFIX,blizzard.com,DIRECT
  - DOMAIN-SUFFIX,battle.net,DIRECT
  - DOMAIN,blzddist1-a.akamaihd.net,DIRECT
  - DOMAIN-SUFFIX,feiliao.com,DIRECT
  - DOMAIN-SUFFIX,pstatp.com,DIRECT
  - DOMAIN-SUFFIX,snssdk.com,DIRECT
  - DOMAIN-SUFFIX,iesdouyin.com,DIRECT
  - DOMAIN-SUFFIX,toutiao.com,DIRECT
  - DOMAIN-SUFFIX,cctv.com,DIRECT
  - DOMAIN-SUFFIX,cctvpic.com,DIRECT
  - DOMAIN-SUFFIX,livechina.com,DIRECT
  - DOMAIN-SUFFIX,didialift.com,DIRECT
  - DOMAIN-SUFFIX,didiglobal.com,DIRECT
  - DOMAIN-SUFFIX,udache.com,DIRECT
  - DOMAIN-SUFFIX,343480.com,DIRECT
  - DOMAIN-SUFFIX,baduziyuan.com,DIRECT
  - DOMAIN-SUFFIX,com-hs-hkdy.com,DIRECT
  - DOMAIN-SUFFIX,czybjz.com,DIRECT
  - DOMAIN-SUFFIX,dandanzan.com,DIRECT
  - DOMAIN-SUFFIX,fjhps.com,DIRECT
  - DOMAIN-SUFFIX,kuyunbo.club,DIRECT
  - DOMAIN-SUFFIX,21cn.com,DIRECT
  - DOMAIN-SUFFIX,hitv.com,DIRECT
  - DOMAIN-SUFFIX,mgtv.com,DIRECT
  - DOMAIN-SUFFIX,iqiyi.com,DIRECT
  - DOMAIN-SUFFIX,iqiyipic.com,DIRECT
  - DOMAIN-SUFFIX,71.am.com,DIRECT
  - DOMAIN-SUFFIX,jd.com,DIRECT
  - DOMAIN-SUFFIX,jd.hk,DIRECT
  - DOMAIN-SUFFIX,jdpay.com,DIRECT
  - DOMAIN-SUFFIX,360buyimg.com,DIRECT
  - DOMAIN-SUFFIX,iciba.com,DIRECT
  - DOMAIN-SUFFIX,ksosoft.com,DIRECT
  - DOMAIN-SUFFIX,meitu.com,DIRECT
  - DOMAIN-SUFFIX,meitudata.com,DIRECT
  - DOMAIN-SUFFIX,meitustat.com,DIRECT
  - DOMAIN-SUFFIX,meipai.com,DIRECT
  - DOMAIN-SUFFIX,duokan.com,DIRECT
  - DOMAIN-SUFFIX,mi-img.com,DIRECT
  - DOMAIN-SUFFIX,miui.com,DIRECT
  - DOMAIN-SUFFIX,miwifi.com,DIRECT
  - DOMAIN-SUFFIX,xiaomi.com,DIRECT
  - DOMAIN-SUFFIX,microsoft.com,DIRECT
  - DOMAIN-SUFFIX,msecnd.net,DIRECT
  - DOMAIN-SUFFIX,office365.com,DIRECT
  - DOMAIN-SUFFIX,outlook.com,DIRECT
  - DOMAIN-SUFFIX,s-microsoft.com,DIRECT
  - DOMAIN-SUFFIX,visualstudio.com,DIRECT
  - DOMAIN-SUFFIX,windows.com,DIRECT
  - DOMAIN-SUFFIX,windowsupdate.com,DIRECT
  - DOMAIN,officecdn-microsoft-com.akamaized.net,DIRECT
  - DOMAIN-SUFFIX,163.com,DIRECT
  - DOMAIN-SUFFIX,126.net,DIRECT
  - DOMAIN-SUFFIX,127.net,DIRECT
  - DOMAIN-SUFFIX,163yun.com,DIRECT
  - DOMAIN-SUFFIX,lofter.com,DIRECT
  - DOMAIN-SUFFIX,netease.com,DIRECT
  - DOMAIN-SUFFIX,ydstatic.com,DIRECT
  - DOMAIN-SUFFIX,sina.com,DIRECT
  - DOMAIN-SUFFIX,weibo.com,DIRECT
  - DOMAIN-SUFFIX,weibocdn.com,DIRECT
  - DOMAIN-SUFFIX,sohu.com,DIRECT
  - DOMAIN-SUFFIX,sohucs.com,DIRECT
  - DOMAIN-SUFFIX,idqqimg.com,DIRECT
  - DOMAIN-SUFFIX,igamecj.com,DIRECT
  - DOMAIN-SUFFIX,myapp.com,DIRECT
  - DOMAIN-SUFFIX,myqcloud.com,DIRECT
  - DOMAIN-SUFFIX,qq.com,DIRECT
  - DOMAIN-SUFFIX,tencent.com,DIRECT
  - DOMAIN-SUFFIX,tencent-cloud.net,DIRECT
  - DOMAIN-SUFFIX,jstucdn.com,DIRECT
  - DOMAIN-SUFFIX,zimuzu.io,DIRECT
  - DOMAIN-SUFFIX,zimuzu.tv,DIRECT
  - DOMAIN-SUFFIX,zmz2019.com,DIRECT
  - DOMAIN-SUFFIX,zmzapi.com,DIRECT
  - DOMAIN-SUFFIX,zmzapi.net,DIRECT
  - DOMAIN-SUFFIX,zmzfile.com,DIRECT
  - DOMAIN-SUFFIX,ccgslb.com,DIRECT
  - DOMAIN-SUFFIX,ccgslb.net,DIRECT
  - DOMAIN-SUFFIX,chinanetcenter.com,DIRECT
  - DOMAIN-SUFFIX,meixincdn.com,DIRECT
  - DOMAIN-SUFFIX,ourdvs.com,DIRECT
  - DOMAIN-SUFFIX,staticdn.net,DIRECT
  - DOMAIN-SUFFIX,wangsu.com,DIRECT
  - DOMAIN-SUFFIX,ipip.net,DIRECT
  - DOMAIN-SUFFIX,ip.la,DIRECT
  - DOMAIN-SUFFIX,ip-cdn.com,DIRECT
  - DOMAIN-SUFFIX,ipv6-test.com,DIRECT
  - DOMAIN-SUFFIX,test-ipv6.com,DIRECT
  - IP-CIDR,119.28.28.28/32,DIRECT,no-resolve
  - GEOIP,CN,DIRECT
  - MATCH,全局选择
`