/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","488154c3f27dd6c326619d4dd759bf35"],["/20210802/luogu-p1601/index.html","45685e9308f5e0f608bc82e6427da511"],["/20210803/luogu-p2393/index.html","0e26c688b5de0daf795811d2e80204af"],["/20210815/hexo-clicker/index.html","bf2e834051a081075bf1591dc72f451a"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","187185fcd2acf7caa9754616cf02b4dd"],["/20210824/git-ignorecase/index.html","1e087586dc3bd2523f7b5cdf313ecafa"],["/20210826/get-csrf-token-of-luogu/index.html","2fb5d1cfd2f319bae496bea517ebaa82"],["/20210829/server-changing-to-cloudflare-pages/index.html","200a863bc98d76246229b708214bbb3d"],["/20210831/itdog-gfw-api/index.html","0022d99e80f6322a43e148f0853551f1"],["/20210912/hexo-pop-welcome-window/index.html","21171940863e11eab5cb31de9b328e92"],["/20210919/csp2021-travelogue/index.html","2d62b9d92b038485205b66e172d5fdc4"],["/20210930/hexo-katex/index.html","b39533a6d864db7cac0628f9cd10ed5f"],["/20211010/hdu-1702/index.html","ae9844a29972a9d736f69f43019ae3b8"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","545e5841d6faa6294dd516d5ab6d5e82"],["/20211011/download-vscode-faster-in-china/index.html","9a040c26d637d4455bd8759218004933"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","79d48767b30d1fb27737bedb32a3f84a"],["/20211013/luogu-p1141/index.html","5249593014d7e37cecaf8a4e2c7967dd"],["/20211014/noip1999pj-t1/index.html","0a05a624c19d5c4e9c1a5c83d4b81462"],["/20211114/noip2004pj-t2/index.html","dde8a4a085ed4b435a9b460ba4c8f20a"],["/20211219/amp-solution-oi/index.html","02eaa81913a39994ff47c8d6e0202129"],["/20220102/noip2009tg-t4/index.html","59c6a977a0acc7525a453c83fc09beeb"],["/20220109/how-to-use-go-jumper/index.html","be10d25809606ba91ffe8e3048674e3f"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","d78fc1ecb25ce91d495f1396b1a25c0f"],["/20220207/change-the-theme-to-butterfly/index.html","ce0a89b775b4321719574d2f48ef2e06"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","b54892a356ebd791c265ff36b7997619"],["/20220209/5-free-static-page-hosting/index.html","03cc18a5731eb6c120bdcce370df6ee3"],["/20220213/friend-links-exchange-rules/index.html","28ced819ad162f536e9b262e29fbe235"],["/20220213/usaco2019dec-silver-moobuzz/index.html","9b3282d15ae6056020159a161ea97945"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","dae2efa14d92422af09cbe764cf567b5"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","b38a0109ca1f8f641909f9b786507666"],["/20220312/init-your-hexo-blog/index.html","0842cd4bc0f641597175ee571680a93f"],["/20220327/some-good-themes-for-hexo/index.html","985ae8f5d468c71ccb64150dfd911901"],["/20220409/butterfly-popup-welcome-window/index.html","0d581fd1a7c963890d78f2830f987dfc"],["/20220503/butterfly-go-jumper/index.html","1adcd3f1ba47239153f24813344f2a02"],["/20220503/how-to-get-a-microsoft-365-e5-account/index.html","433a8df5e5ab30eb17ed5d9c95b1855f"],["/404.html","f9fc871ed92a875e321072afbd208fad"],["/about/index.html","282f37b9edf1343cdc36e054ee92c484"],["/archives/2021/07/index.html","1feb89e20e99b6c5aa95564ddb4daba2"],["/archives/2021/08/index.html","4054fc599b0b2810d594d041a27a690d"],["/archives/2021/09/index.html","e95cf340f22b2e21d5c9faa694ebbe47"],["/archives/2021/10/index.html","4f0aded7f6dcafa856d7761944e0f4f1"],["/archives/2021/11/index.html","f048ba57117960b6e4e977757092f90f"],["/archives/2021/12/index.html","9bbe0ea8f50664c5b7a2b63054c86a18"],["/archives/2021/index.html","96e29a1af57d225ca15fb579ceb5ee1a"],["/archives/2021/page/2/index.html","4682bbb60bb643e125a87e051b404b20"],["/archives/2022/01/index.html","727631523a03b46c4ba3ad5ec954636e"],["/archives/2022/02/index.html","2529a7e89475bdf9d27cc7990e91c257"],["/archives/2022/03/index.html","5379d293accfbde92a8cb696e3a32b2a"],["/archives/2022/04/index.html","92de8cac65852c7011dd65fe019067aa"],["/archives/2022/05/index.html","6d5a472bf46b1ebad0049ad832aee793"],["/archives/2022/index.html","8753ebb616c2759658f9fa1166700ca3"],["/archives/index.html","6558cd1ccdcf05ee2ef09fdeeeb84e86"],["/archives/page/2/index.html","7747f2164c0a2d0dfc2d7a558a845f25"],["/archives/page/3/index.html","2a57c64e0f74d6c0fc00b26ad54a5de4"],["/atom.xml","9578f84a96633f6e19678e491d297100"],["/baidusitemap.xml","d503f302a09e1de1963db8d55daa8371"],["/categories/index.html","6631b1cff719d8b37f49fc5223d31c77"],["/categories/博客美化/CDN/index.html","7b593c009957d19fd9c08a7da3af51bb"],["/categories/博客美化/index.html","6ccfa24476d60a942737bd79fe61c87c"],["/categories/博客美化/功能/index.html","473978086971afe0a8bc8da60402693c"],["/categories/博客美化/部署/index.html","afe403360cd794b57b9e5d0f5511d316"],["/categories/博客美化/页面/index.html","02ea2b5317b446292b735db3152bb97a"],["/categories/咕咕小站/index.html","72d5ed9bf9ce289909901c56ff11bca5"],["/categories/咕咕小站/博客动态/index.html","1c8fa7f75c6b318feabcb26cbb5d18a3"],["/categories/推荐/Web服务/index.html","22e2ed586d509468b66ab3f1335fe2fb"],["/categories/推荐/index.html","94b052c2d81e823e3109561ef4c636d5"],["/categories/推荐/微软/index.html","04307879e2e7734b83a70e3e7a28b715"],["/categories/游记/CSP/index.html","b63d85cb62e4c103e84f32ae70025823"],["/categories/游记/index.html","ac7017887ffb68461348c004d9366824"],["/categories/算法学习/index.html","750898d8454e7583118d89839605632d"],["/categories/算法学习/搜索/index.html","5b6a30f0c98c8bd1104811beddbfd6ca"],["/categories/算法学习/数据结构/index.html","7e74be27166ecf32d5d59b97d0fb17f4"],["/categories/算法学习/数论/index.html","2c08155269e909df91c0a8ed3f61f625"],["/categories/算法学习/模拟/index.html","a000e158acf5b6ba2642dcf29d413c4b"],["/categories/算法学习/高精度/index.html","66689b8e48721054640923174fbebc73"],["/categories/随笔/GFW/index.html","7d3b662a31eaf3473b66ea59789970dc"],["/categories/随笔/Git/index.html","db5bbf78f8f2a56b5ca8f4939cb427f5"],["/categories/随笔/Hexo搭建/index.html","10ae1cb490b96f63efa795f23b96ecda"],["/categories/随笔/VS-Code扩展/index.html","a5e088bccf6cbc2143d33c48055e1c5b"],["/categories/随笔/VS-Code扩展/编辑框/index.html","11a686ffd140f5ac633e059a40439026"],["/categories/随笔/index.html","3a0da58a5e094735cc7303b4600512c4"],["/categories/随笔/反向代理/index.html","6204af55af18725d133164b0c7764d31"],["/categories/随笔/咕咕小报/index.html","0c3119b5f4cfb8d92d104bf7b912e53b"],["/categories/随笔/奇淫技巧/index.html","527ec433c812caa8fd53380fded5f3ae"],["/categories/随笔/洛谷API/index.html","919438d7e833cea72f679cecfc43e939"],["/css/font.css","3886260fd56fa489b3c6f8c50e721707"],["/css/index.css","0d32a2e3eecb9311ae3f621f149eb004"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Fredoka.woff2","c05ed7a4be6d56badb689cfb1453289a"],["/fonts/UbuntuMono.woff2","8b2a874ab5c9080453c2d558a3c4adb8"],["/friend-links/index.html","d6578e0145e3c136ef095d63ecc00b62"],["/friend-links/rules/index.html","06b69a96c5662ef052e3f194942521bb"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","326bcbae2e21007fa73b906975a1c3d0"],["/img/avatar.jpg","423657a8e34d2c034ba19a1ae2238f3a"],["/img/banner.png","54c016144996414b0250c39ec496a3f3"],["/img/blocked.png","d2a8991190c8fb3570d0763522b6cb3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","bdad5f33f46c332ef482a967d9039a31"],["/img/link-lost.jpg","7cf7bb1235bb747361a289b26668e38c"],["/img/loading.gif","8fc901ea9e3826ed6d1ecc1acbb929d4"],["/img/qiniu-actfree-wide.jpg","20f78080707100910a852c88983ab44b"],["/img/qiniu-cdn-wide.jpg","c2da2893971a233dffc72cbda3a24cae"],["/img/qiniu-server-wide.jpg","259b0df49e3328f7a8dffeb71f965acf"],["/img/qiniu-storage-aside.jpg","acb47f7421adee911655680a243f2908"],["/img/qqwallet.png","2b89bfcd01401aae0c60a581131995c3"],["/img/undefined.jpg","fb2ee0a0d15fbae961867ae300a34fb5"],["/img/wechatpay.png","5696cae32dc19c7aea08d23098572a44"],["/index.html","5888053367e3bdb89efcee296faf23c8"],["/js/link-checker.js","2c6474fce00835b35f30c4798689466a"],["/js/main.js","396291332560459bcc82dcba71b971d8"],["/js/search/algolia.js","df1ac71726c61743d55c86bdd1e74a03"],["/js/search/local-search.js","06b6cdc4efe57a53987d1effde8431a4"],["/js/serverlist-loader.js","7ffed140c22e167d4d3fe666666af27c"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/tw_cn.js","4c05755c2f8e23cb674c983981a9e104"],["/js/utils.js","64062a7dac10b70165ab319a5a09069c"],["/js/welcome.js","d96971cc869b0cd7ea3bfd88d63a2e67"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7a66afd2cd6825550f6faac92b3cc1dc"],["/live2dw/lib/L2Dwidget.min.js","d4ccc01e11fab003bc722ca5bc41ef9c"],["/message-board/index.html","8f879067c4ddb2c47f25242d4c8dfe57"],["/page/2/index.html","e4d655dda51d7d067ec91d0b5b34dd06"],["/page/3/index.html","a0a6de7b978c4cf0092032cdcd781b03"],["/search.xml","301129cf3ce87630c2e63b1151586cf2"],["/server-list/index.html","cb3430b9f6530ee948d43a211fc5259e"],["/service-worker.js","73158598a0a5574ebdea4f7daacea7e2"],["/sitemap.xml","996c34a9e05884658fede122959c7f0f"],["/sw-register.js","8e80a0ddeab71656d592bbf99aba7c3f"],["/tags/API/index.html","52bce1032e3cc3095133fa0f150bba8e"],["/tags/Blog/index.html","9f2ca270181de29f503fdfd63ec18fa6"],["/tags/Butterfly/index.html","24155fac0306e21d00faf238a340d4fa"],["/tags/C/index.html","86c403c2a9a9ce31f71890eb1a721469"],["/tags/CCF/index.html","4f58f38a21b8095d2c8c6c5a2c31f9ff"],["/tags/CSP/index.html","32d6e2af365b371d29b8cec0cd4a09d0"],["/tags/Cloudflare/index.html","8f872097eb7e2696fe41ad8df877c1b9"],["/tags/Firebase/index.html","001e07f80153057867ccf8e6565e7ad4"],["/tags/GFW/index.html","1f06edb084e488f5548c311091540b13"],["/tags/Git/index.html","d998d1f2c753a5ea890af61500c27436"],["/tags/HDU/index.html","c1a792cbd63600c3fcb095376333c2c1"],["/tags/Hexo/index.html","5e15faa5198ad8c129718567a6ed19eb"],["/tags/JQuery/index.html","296ccad941b0b678100aba2559841f97"],["/tags/JavaScript/index.html","9c54496b725266d5a239942dc9a5d861"],["/tags/LaTeX/index.html","ae61e45b500d3a0b11a89192f531ec5d"],["/tags/Microsoft/index.html","92d77857b1d6ae069d2b6e97dce8471c"],["/tags/NOIP/index.html","5dae06e84292be7ba375f2c703c351e7"],["/tags/Node-js/index.html","eab5b4c85a58ae1de5a0553fcdc9e0b0"],["/tags/OI/index.html","9b41f46e8b72038524b1744ccb4e2e6f"],["/tags/Office/index.html","8f73dbd1792fa0fb8067720723a0be53"],["/tags/Proxy/index.html","e0afa7d9c2fbad19ae07d9a301e4cf8f"],["/tags/Python/index.html","99598662130f2a1933527994982c5bac"],["/tags/Sweetalert/index.html","7753e897fec95531b7d42546a357c2bc"],["/tags/USACO/index.html","e44c8bc673e418edf3297c1977ad4539"],["/tags/VS-Code/index.html","93c726cf6790c5e4d85c524836d40e7f"],["/tags/index.html","ec635647cf84bb95772c0a025eed187e"],["/tags/jsDelivr/index.html","9da30e1359015b0b4b2eb1be59748779"],["/tags/主板/index.html","819fcbb5ee11829fd38f4d8c383b2ccc"],["/tags/主题/index.html","5cc6b0275e60dd9bb0e74ca356ea25ed"],["/tags/免费/index.html","26acaa5cc9d8c5c294c6ff3ed9edbf5a"],["/tags/反向代理/index.html","36dbe37c2374e2d248e1ed14d5411db4"],["/tags/奇淫技巧/index.html","9ba22939a1796e0b77dd5760ccce28e5"],["/tags/小报/index.html","729b200c29735c23b89922b7013576e8"],["/tags/扩展/index.html","d7859c57f560cb3aeaa4068d77dfb8c1"],["/tags/技嘉/index.html","6876b492f793964b33e15ffcd0167547"],["/tags/来源未知/index.html","aa1610cc0c65dccfa6a36f094bc20f7a"],["/tags/洛谷/index.html","5f0014c81ff47f2e83e372fb2b724492"],["/tags/游记/index.html","54117c7d108764534e10915ae43ae3f4"],["/tags/白嫖/index.html","9c544d4fed9d9887650a29057fad7634"],["/tags/维修/index.html","fa3ea103c9cc4c12a88afd4ac197146d"],["/tags/美化/index.html","1c3771689bc1e4f608e0534c57d9440f"],["/tags/部署/index.html","d58b6d5704aea9fbae0ff64fa51dc63a"],["/tags/题解/index.html","265408474525c388a12e4f04ab10f554"],["/talking/index.html","b2aa3e3573f4534b062a651beb16f462"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.pai233.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"jsd.pai233.top"});





/* eslint-enable */
