/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","9ac2fb64bb41d936b24b9ab7e1ae9dee"],["/20210802/luogu-p1601/index.html","d450a41af453c5a80be3a27095279264"],["/20210803/luogu-p2393/index.html","37a3a4948a65bed556cd04568e0f1668"],["/20210815/hexo-clicker/index.html","fb8f63c1637eb2a9d589974b9c09af02"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","811fbb1f3ecb820cafd535f551bf76c3"],["/20210824/git-ignorecase/index.html","ffeaeebb8ed5ad23cc77b748a0925336"],["/20210826/get-csrf-token-of-luogu/index.html","a2716d0480b4c98ec6b08cc06550446a"],["/20210829/server-changing-to-cloudflare-pages/index.html","3b792920a5866c0eda64a234fa3239e8"],["/20210831/itdog-gfw-api/index.html","1b8e1d6b7514fe7ab242816eb0f91295"],["/20210912/hexo-pop-welcome-window/index.html","1fa6bb29a620315ab39aadfd36529d9d"],["/20210919/csp2021-travelogue/index.html","d49aecd9283614adaadd82979eda7659"],["/20210930/hexo-katex/index.html","62471b692b1337392d9c170c0deaaf05"],["/20211010/hdu-1702/index.html","e4defaebed337a4352d84902bb04f2df"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","17ca105d4aca51c3c148abb8612bc620"],["/20211011/download-vscode-faster-in-china/index.html","c88760a316df909f8d01005e2dd1f249"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","ad250a283b5cf1b50fe41604d9581750"],["/20211013/luogu-p1141/index.html","2b240ca545b883492faab76161660661"],["/20211014/noip1999pj-t1/index.html","d54508df327d597fba2d2935e6a449d1"],["/20211114/noip2004pj-t2/index.html","f656fa4ee04210745e31fb93a72a5ae2"],["/20211219/amp-solution-oi/index.html","6deb25e7420cbfdb7aa06c0a7dc90568"],["/20220102/noip2009tg-t4/index.html","365ca49172eaf4d2c49baa2c3a82347b"],["/20220109/how-to-use-go-jumper/index.html","b85156100d7a691dbfb5655e97de6cd7"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","0cde5f43809ca0e249ae6676ab648a5b"],["/20220207/change-the-theme-to-butterfly/index.html","c7bc2888bcd84f2a9ee5f3d34027048c"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","e02e6205a90b784205947feafff27697"],["/20220209/5-free-static-page-hosting/index.html","40142dc368de5ef4d575172265949bb8"],["/20220213/friend-links-exchange-rules/index.html","7ddba00867a3d6b50b6ab8f499c4093a"],["/20220213/usaco2019dec-silver-moobuzz/index.html","be529913c45fe852a283a02fd3c70a3b"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","f484818f272dfca895476ba0b7678213"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","68cdf8f2d425dd20978210300fc731f4"],["/20220312/init-your-hexo-blog/index.html","b8410eb08e558382f63cf80026cfc2ce"],["/20220327/some-good-themes-for-hexo/index.html","b00ffc74fcfe9cc93ea73648f5b5b9e5"],["/404.html","895fd6770f978c63548ee84fab95d283"],["/about/index.html","56e3154385249e7d8ce2dd65074a794c"],["/archives/2021/07/index.html","0ead7ead41bc907685daaca37ce33bee"],["/archives/2021/08/index.html","4625b248d39920e9cc1e4a8d014d7c95"],["/archives/2021/09/index.html","e2c7fd49b967d890003e2606d430ca6b"],["/archives/2021/10/index.html","8e878221d5bb55d618e31df531c91526"],["/archives/2021/11/index.html","464f8b4f8bd15584f4e4a5dd6f0fd934"],["/archives/2021/12/index.html","5d3acd8b56551b58d144bda71734af54"],["/archives/2021/index.html","f068e41928a59174a09c88e6f0d3e5eb"],["/archives/2021/page/2/index.html","5e0703fa06ce3675ae7ca7750e8c1711"],["/archives/2022/01/index.html","b588b864f81b2d7fb52c4abe386a46ec"],["/archives/2022/02/index.html","90c06dc670a20d19b975dab6371c6e48"],["/archives/2022/03/index.html","41c18d0f5eca37fcaaf1fe85e35dfceb"],["/archives/2022/index.html","e303fda1328a3eebee3ef6247d33b25f"],["/archives/index.html","ae14eb93a80e01f9014a159d98215de8"],["/archives/page/2/index.html","6f3c747de99088168ef683e7619cad34"],["/archives/page/3/index.html","890869a8ab4c78983bb593ab59c913f3"],["/atom.xml","a0c21bf7a56f54312cce59a82c2765bd"],["/baidusitemap.xml","c76d79e9a59128bf7c278b415e12efbe"],["/categories/index.html","8c0e76da65236341fd96151753e753b0"],["/categories/博客美化/CDN/index.html","cd05c7c338f3941a9d902358e31056e0"],["/categories/博客美化/index.html","cb480fdcb1a4cb196b6b180a9039c24c"],["/categories/博客美化/功能/index.html","b22fd0c3175fcb647124f17c429ad5c0"],["/categories/博客美化/部署/index.html","939f624eff84f400c0c0f9d51c2c1950"],["/categories/博客美化/页面/index.html","f06b7473559bd1dad23aec5fc20f69bc"],["/categories/咕咕小站/index.html","7d9cacfb6d7d7a1c5977c134d6572eab"],["/categories/咕咕小站/博客动态/index.html","57d3bc145c6e7afea1a8cdf52996b03c"],["/categories/推荐/Web服务/index.html","4eb01ae8afc538b2d95a678b3a1d6e00"],["/categories/推荐/index.html","0ad134320bb606c867de7b4458f5e3e5"],["/categories/游记/CSP/index.html","602ba1a100b82f5f7969e00fe3b8ea68"],["/categories/游记/index.html","f7b4795837368b6277f8101c689767d1"],["/categories/算法学习/index.html","817d61a1dd6126f2ec8b9d6363a5b38b"],["/categories/算法学习/搜索/index.html","33491c302bbc3969f1ccc3c765321e4e"],["/categories/算法学习/数据结构/index.html","6cae914177eb33359b0933ffe795d4f2"],["/categories/算法学习/数论/index.html","c70f1b6b665b9953d8acf38ebdab06b0"],["/categories/算法学习/模拟/index.html","c08e56df581735e107d78d512ef43164"],["/categories/算法学习/高精度/index.html","bbcd783c257465ea388b42392d1c87d6"],["/categories/随笔/GFW/index.html","c98103304c47b279ff982e2b68484418"],["/categories/随笔/Git/index.html","ce85e005e3255e4599e5ff3671af1b58"],["/categories/随笔/Hexo搭建/index.html","be71c3b28b81dc3f1292a0bf871a3d45"],["/categories/随笔/VS-Code扩展/index.html","6c7c4e5c4baa3fca8decc5d0a633ba08"],["/categories/随笔/VS-Code扩展/编辑框/index.html","ef5249f7f8cbf1b31c6a659e0a1d3c3e"],["/categories/随笔/index.html","4d862a31c8b9168564a114e21b9dd9a1"],["/categories/随笔/反向代理/index.html","33569e3aaa8a8c61e8eb487242ef36a7"],["/categories/随笔/咕咕小报/index.html","b1d6b4e973d85b5b660aaea916cdc98c"],["/categories/随笔/奇淫技巧/index.html","65e2865d483246f9c66c9d081935d425"],["/categories/随笔/洛谷API/index.html","819682e933287d786a58cc1df697e787"],["/css/font.css","eb49ae059d2b7553f9ade00483b7d9a9"],["/css/index.css","99dbb15795e20647d11744a6623395ec"],["/css/sweetalert.css","196c08c89f0c8a9b688a16d3435ac327"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.woff2","7dba266595ef1f9505dfd23eef011341"],["/friend-links/index.html","10667c092a635c8eef0aab89886e446a"],["/friend-links/rules/index.html","23af3bfb1f72ef32bd3c82811aea3786"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/banner.png","c35d400ce371f8befb35dd55712569ae"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","22b1adc497ba662040d227519416f32d"],["/img/qqwallet.png","808ecf886e4e71c02b4728c6bed71090"],["/img/undefined.jpg","9caec22fe36bad53191055b6f40f6908"],["/img/wechatpay.png","d25ade1e4be4aa943932c56e37d708ff"],["/index.html","46297c7207dd14db726750e081241aed"],["/js/link-checker.js","02991a3e40b6c75a6bcb0df2457d3f13"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/serverlist-loader.js","fe1c7c40db15bd11366c97db4eff5d66"],["/js/sweetalert.js","800cbdcad6a26e06fc9471102d8c50c4"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","030f89f850aa940182ef72003d72a95e"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message-board/index.html","6853b55a1a13e5e07f09599c089583cc"],["/page/2/index.html","057fc383b3710cfe46af258e3c984e8a"],["/page/3/index.html","23941775b5321e175ca3160ff1fdc8de"],["/search.xml","eb03581f8a1b574a3cbdfe367643d435"],["/server-list/index.html","50328d651c4ecc1fabd27eb3817a0d55"],["/service-worker.js","939fd412502deb39af1700389a6b2982"],["/sitemap.xml","fc7bc257ff19255d9fad1554d3a02328"],["/sw-register.js","fb8074e4eaac646dc3474a6d826df779"],["/tags/API/index.html","40774156285bfd3d6fa5441103dd95d1"],["/tags/Blog/index.html","d7a6701282f8613e4e3ed4253f597370"],["/tags/Butterfly/index.html","cc67bf389a4380deb96b63e731e23973"],["/tags/C/index.html","62cbb614ac266e133561158791abf630"],["/tags/CCF/index.html","8f869958564c58821a2eac35c55ac153"],["/tags/CSP/index.html","d1fc66b5156db65e6b8e87de4f3f8626"],["/tags/Cloudflare/index.html","4dfba20f0ce5497a3e6d4f3a96713078"],["/tags/Firebase/index.html","f045ff919103768878aafb0281a0054a"],["/tags/GFW/index.html","79c8eaeb93e3543ba032d4e7f294423c"],["/tags/Git/index.html","f81ce6c2085846753b19848e50233638"],["/tags/HDU/index.html","cd91eecb7317da2feb8abccaf0179adb"],["/tags/Hexo/index.html","72f8f87ea33e5ea417f7a6eaa2ed910d"],["/tags/JQuery/index.html","eb0e6190be9199fe858e49b02eb789d9"],["/tags/JavaScript/index.html","9aa6542d373680ea6cd67f12241e01c0"],["/tags/LaTeX/index.html","ef542b278afe0c1404078621e862160f"],["/tags/NOIP/index.html","d2cb76b1ebb753a50aa97e47189875f1"],["/tags/Node-js/index.html","7ee8548fa8884d82705dc9c7660a1bfe"],["/tags/OI/index.html","13166a8aca570800aca9bc1c74d28101"],["/tags/Proxy/index.html","5fd7485b470b48c0953ad4f4c89d3fc2"],["/tags/Python/index.html","bba04cf3c43ce28ee0197f0d7b750a87"],["/tags/Sweetalert/index.html","82497a5bbf805460cd0856a973322504"],["/tags/USACO/index.html","0d6f9b150ed2eaa736af7fde91047d56"],["/tags/VS-Code/index.html","a05bff808553d905b321bd832e55c1d7"],["/tags/index.html","54542f0431ba7902cab28a68ce7e18a0"],["/tags/jsDelivr/index.html","11859e1de4b4d89ee02c96d35fffdc21"],["/tags/主板/index.html","d69e4d3a70d32d8cedd8a448e2959202"],["/tags/主题/index.html","621fa4edc042a259f0b523f58c38ff51"],["/tags/免费/index.html","315f2963240d75eb2397df6896cd4b1c"],["/tags/反向代理/index.html","822384222be791580811ce716a7c10b9"],["/tags/奇淫技巧/index.html","ff0974d0c0e9655db8773e3e886dbbdd"],["/tags/小报/index.html","840cfb477049f2a7524281d42176a217"],["/tags/扩展/index.html","6cf1e2ceeaffe3ed2a9f6aa7020454c3"],["/tags/技嘉/index.html","f3d7536a7bfd872fb558bf244b5e4a69"],["/tags/来源未知/index.html","f7d37253bb3a02901e22386f5f477220"],["/tags/洛谷/index.html","6d5919ba03b219772f9a355c0ec5e9be"],["/tags/游记/index.html","6912f2baee49489bb204eb55e03bd45a"],["/tags/白嫖/index.html","76780ad57b6dc5917ffc45d8986084af"],["/tags/维修/index.html","25e8f1f6b6ba5f835c8592a5a7d0b4f2"],["/tags/美化/index.html","202b47db0232eebfffd28de32b7ad2ec"],["/tags/部署/index.html","3724db6d7a34970a91bbbda05295a9d2"],["/tags/题解/index.html","f1b28620088c191b346644a22cb882f0"],["/talking/index.html","fc55e9c1257929cd2002e9aa1e9fec1e"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
