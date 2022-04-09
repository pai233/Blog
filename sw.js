/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","8b03717f2aae66bd6fa69ea06eb6098a"],["/20210802/luogu-p1601/index.html","d9f5da7bab1d43a2cc67fb06becb6264"],["/20210803/luogu-p2393/index.html","be3dcf9e9ae22e0058e1647ecf8af40e"],["/20210815/hexo-clicker/index.html","c4677cd861fc52ecbda5c414216cca61"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","3e8195257d7bb8378e37c9f6c1254acb"],["/20210824/git-ignorecase/index.html","ebd91e5b1566a1aa952df0879e1ad804"],["/20210826/get-csrf-token-of-luogu/index.html","2997e47cd047c1c2053019f00ba1462f"],["/20210829/server-changing-to-cloudflare-pages/index.html","b7985c001022dd914ba6075bb367bdec"],["/20210831/itdog-gfw-api/index.html","16ef2abfd7a1d6e09cb29aec7fc69039"],["/20210912/hexo-pop-welcome-window/index.html","70d11d37e56c5d422a5d9c811b247a51"],["/20210919/csp2021-travelogue/index.html","5a6aecd8228b6deaf9b0b8545305b665"],["/20210930/hexo-katex/index.html","bfd98b9a667d8da639b2a3a0be3ef8cb"],["/20211010/hdu-1702/index.html","84ccda40ecb94bcb5db343cea3bf0bd4"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","bbbc20345e639a810b4f0625bce7f9ff"],["/20211011/download-vscode-faster-in-china/index.html","fe560810f2455f814d6d2fa638e08336"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","5da725f4b364b760fd1fa4d55af30a6c"],["/20211013/luogu-p1141/index.html","350df4614cb0b57187733958ae49cb78"],["/20211014/noip1999pj-t1/index.html","a40fd774d72eb57e81102be5748188c5"],["/20211114/noip2004pj-t2/index.html","a97d43acb3a4a9bf45e345fb18db92b3"],["/20211219/amp-solution-oi/index.html","4e335db094605e91eac7846d0d459455"],["/20220102/noip2009tg-t4/index.html","ceaeb989db872ee299ad139bb057a26d"],["/20220109/how-to-use-go-jumper/index.html","8f4e3eca5d8d3aae53444caf333922b8"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","1414ef590d33a4f6726ff751d165e3f8"],["/20220207/change-the-theme-to-butterfly/index.html","46070c19aa154cf64a0b50c3998ed9ff"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","ef7a399c5a48cfc172786e92c39d30d4"],["/20220209/5-free-static-page-hosting/index.html","2a44a5db93913c670395b02e679af0b3"],["/20220213/friend-links-exchange-rules/index.html","d23c70d993e075826d910b7a6b33ce1e"],["/20220213/usaco2019dec-silver-moobuzz/index.html","0c4eacc0fae0b72a9dbba3f135ac2438"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","f9528e7dd59bd13f5e6c71b3c88d9328"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","ee5ea094ae04865eacaf6d423026b7d6"],["/20220312/init-your-hexo-blog/index.html","539ebc695af34f5a865e3acf1e0b9d47"],["/20220327/some-good-themes-for-hexo/index.html","c0d4268a0dd0ac6a390f83ef6a5d359f"],["/20220409/butterfly-popup-welcome-window/index.html","a1f5be082076dad110dc7d4c4fcb724c"],["/404.html","2577f031e62155b1f63f20e475d4e213"],["/about/index.html","af15960b727c57d6ae49b230bf5b9e12"],["/archives/2021/07/index.html","9216bea0d44b14fbde20e2adb400a5fc"],["/archives/2021/08/index.html","fdcf00a4f21ded6ede90fe9135f7e7b6"],["/archives/2021/09/index.html","19c87a71b819deeee5d1c05ba2e752ef"],["/archives/2021/10/index.html","c4c2141dd51d2bb26d2590a5843ec410"],["/archives/2021/11/index.html","ecd05c8ae6ed6da071462f21e5b9b7ce"],["/archives/2021/12/index.html","4abc34a15688ef961f32a365d4283f1e"],["/archives/2021/index.html","d06d4f8d6a1032c652e02b72d9153e48"],["/archives/2021/page/2/index.html","51ee2537ae9c8ebbfbba625cef23b3f6"],["/archives/2022/01/index.html","a3f7839c10a122df760b433bc1f94001"],["/archives/2022/02/index.html","86368982c1a7ef9f837fdbb81496c22d"],["/archives/2022/03/index.html","680bc2033a0c045191cc437b40d790fc"],["/archives/2022/04/index.html","ec054295ebaa410f349cba5a0e38e737"],["/archives/2022/index.html","20277ce3f1b72fd1d1389412fa02e0fb"],["/archives/index.html","eb5decc9c01c4124dea992e033c03030"],["/archives/page/2/index.html","d31165b74b565afd094f305b896b524f"],["/archives/page/3/index.html","22ea6f624960d642f2180401dd72a9c4"],["/atom.xml","93c230d86f12ce4b4d068bc93583e0ae"],["/baidusitemap.xml","f43d7f655e1411b5b60387afca139c45"],["/categories/index.html","f5e606e4cec3491885671a723a4da82f"],["/categories/博客美化/CDN/index.html","b60833feaed83f429e58363534a03719"],["/categories/博客美化/index.html","7e0b241ac4a384fed869708f792c9f94"],["/categories/博客美化/功能/index.html","b60d60f63ec9f7d9e6945956fb37aedc"],["/categories/博客美化/部署/index.html","a96637dfa9750494b0c55b35d639f365"],["/categories/博客美化/页面/index.html","425ba81667aa99eeeb688f9fda44c2c2"],["/categories/咕咕小站/index.html","a815090df24f9b3bd51ad77ea9389eb2"],["/categories/咕咕小站/博客动态/index.html","1521fe9fb17e3f9d0af39815fce28f99"],["/categories/推荐/Web服务/index.html","f7e828f2f003e718ecd6c95fff9b1ece"],["/categories/推荐/index.html","718b2420871e8d96d991189b67047f3c"],["/categories/游记/CSP/index.html","d60ad28822a043f15a14aa4ffb680c8b"],["/categories/游记/index.html","ceaf34992d93c15e9c9535e846273a74"],["/categories/算法学习/index.html","78b809790daee2eb3f9d097199482b8c"],["/categories/算法学习/搜索/index.html","bad4d3d7d112f07ceee82e7673e6daac"],["/categories/算法学习/数据结构/index.html","7f4a1eb569d0a8ebda37b1379e0f08d5"],["/categories/算法学习/数论/index.html","599b3335fa4a6c24ad29f46627de5f29"],["/categories/算法学习/模拟/index.html","6c138b2d360e0dccf820f2519f68c039"],["/categories/算法学习/高精度/index.html","28f540b3efe7645be6358364596359f6"],["/categories/随笔/GFW/index.html","7c320f1969bccbab873cea264e7250c2"],["/categories/随笔/Git/index.html","c937d93810c99f54e55f108761110b57"],["/categories/随笔/Hexo搭建/index.html","bb1d34403b213fe471389c8b8e05672f"],["/categories/随笔/VS-Code扩展/index.html","2fbdc04a3ca63661b86a8a5c3cc3ce49"],["/categories/随笔/VS-Code扩展/编辑框/index.html","651303ee7baf81646d813dab640949f1"],["/categories/随笔/index.html","a389a833b42aa663df2c7026f6046258"],["/categories/随笔/反向代理/index.html","d7118b4a90e2c8287f5fe6a86875a4a5"],["/categories/随笔/咕咕小报/index.html","908ed00d4c0b6111b4d1af795da5e467"],["/categories/随笔/奇淫技巧/index.html","843c617f5d5fd183e028cce383d992ca"],["/categories/随笔/洛谷API/index.html","86f2aa787b15fd303dd3a6d6b2187fce"],["/css/font.css","eb49ae059d2b7553f9ade00483b7d9a9"],["/css/index.css","99dbb15795e20647d11744a6623395ec"],["/css/sweetalert.css","196c08c89f0c8a9b688a16d3435ac327"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.woff2","7dba266595ef1f9505dfd23eef011341"],["/friend-links/index.html","69bf5809010fbf9aec9276c6da311bb5"],["/friend-links/rules/index.html","e314035ed73e3faf8a5487b9a611df98"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/banner.png","c35d400ce371f8befb35dd55712569ae"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","22b1adc497ba662040d227519416f32d"],["/img/qqwallet.png","808ecf886e4e71c02b4728c6bed71090"],["/img/undefined.jpg","9caec22fe36bad53191055b6f40f6908"],["/img/wechatpay.png","d25ade1e4be4aa943932c56e37d708ff"],["/index.html","868d680d558e88c3e71d29d612ef9956"],["/js/link-checker.js","02991a3e40b6c75a6bcb0df2457d3f13"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/serverlist-loader.js","fe1c7c40db15bd11366c97db4eff5d66"],["/js/sweetalert.js","800cbdcad6a26e06fc9471102d8c50c4"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message-board/index.html","0bf947fbede9439d74c285f15fb61135"],["/page/2/index.html","d85482a915e2c84b91dc2fd47fc3a961"],["/page/3/index.html","e7fdfbb188252a6bf49995524229425d"],["/search.xml","182188cd467ebc3a5cd42ffce0bc16c3"],["/server-list/index.html","5ecf7a5233e83027a9b5acabd7070edb"],["/sitemap.xml","d0f6eff54869ddb8a4823718d81a9719"],["/sw-register.js","5b6e8b3a68368e2800ea0ecd89214edb"],["/tags/API/index.html","38172f8fabe49f5445aa0435caec5cea"],["/tags/Blog/index.html","fcab840626bb80e1b467e732f2f59c7c"],["/tags/Butterfly/index.html","f7f1e3e02d727acaeddf1c048505510d"],["/tags/C/index.html","f1ac02386241b28640b736b39665a15f"],["/tags/CCF/index.html","7f1f7419aa5c01be8361d4e4bc59f01b"],["/tags/CSP/index.html","b9324c79c8a7f198d2b25b9b24160d03"],["/tags/Cloudflare/index.html","54e19a878cd30d756f3969bafa9d3a60"],["/tags/Firebase/index.html","3614a52524444132db4c985b74ed16ad"],["/tags/GFW/index.html","eb52b4edadacb114a19495f7ac8a733a"],["/tags/Git/index.html","2cc9a274110ea2ee6fb9226914f7dfb9"],["/tags/HDU/index.html","d81356a207272e1b29a5ee652887a59c"],["/tags/Hexo/index.html","576e138946e3456f5df25b66e2f3a7b6"],["/tags/JQuery/index.html","b5fa194b4beb4792a1ee2e75ef80af2a"],["/tags/JavaScript/index.html","923176fa6b14be8245b0b6272002b434"],["/tags/LaTeX/index.html","b29d063fba8ad863a8bf760c01d7248f"],["/tags/NOIP/index.html","20e4586864342d67c815786ae7e02b72"],["/tags/Node-js/index.html","ac569c530a7e9d3f50a9f5346b072ed1"],["/tags/OI/index.html","c09c6096b13dfebdb3050fc7c62a40b4"],["/tags/Proxy/index.html","cd8c314ae560ed003254d8bf4ba6f0a3"],["/tags/Python/index.html","febc8b053af564ea97ed8f7b0f98a79d"],["/tags/Sweetalert/index.html","49d6ae5eb254d39c9127dbe5abfc92ba"],["/tags/USACO/index.html","7fa8a6f9d7d816cab7b1828917820db9"],["/tags/VS-Code/index.html","be6e581c19c57ca0964252eb90bec172"],["/tags/index.html","6ced1620135e0151d5da28f1efec2c2a"],["/tags/jsDelivr/index.html","7d8ac507c75dcc84664d6c8e15f1998d"],["/tags/主板/index.html","f4104d28e702daef753623667d254a9e"],["/tags/主题/index.html","b95bc3c539329e1fdfe6c7cf77669410"],["/tags/免费/index.html","7d271b150d36d267aa661d292b1f529c"],["/tags/反向代理/index.html","7ee2f56e9683bdc5e0db8b3d61a18bac"],["/tags/奇淫技巧/index.html","916690d11957a14e882744c9e4650948"],["/tags/小报/index.html","c91a4fc4a1883558a601f5be4dbe80fe"],["/tags/扩展/index.html","6eb13c6172a0d33e9dbfec1a764a6a45"],["/tags/技嘉/index.html","db8c9485d0fe8c4de66d2ce1adeff11c"],["/tags/来源未知/index.html","1fa270b44696b4e168aa00436dcafbf1"],["/tags/洛谷/index.html","df68e5554d7aaec3c1f9d6c72cf00589"],["/tags/游记/index.html","301a28497ad96ac0d679420877f74511"],["/tags/白嫖/index.html","0826a6029db70598ee2aa64334cc7880"],["/tags/维修/index.html","6841b88d3741f1b8c5f513ef99165586"],["/tags/美化/index.html","393737f69cc83a505fcd23598f643d2e"],["/tags/部署/index.html","eb0865521eaee713fbb2d60c66fdd3d8"],["/tags/题解/index.html","7ca73774d4502f6a45b6bf8aa5642ef0"],["/talking/index.html","e3266f0446b8d5facef29d313aa3f900"]];
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
