/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","2db36f2bd8d8a5247b7b9e6684d5cd5e"],["/20210802/luogu-p1601/index.html","026332115a299515104191e53118b212"],["/20210803/luogu-p2393/index.html","1de6e95d2b6b60327f3fe320417302c9"],["/20210815/hexo-clicker/index.html","4f3f443d6793366c1f13e0f424dd406e"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","657ab107c3e13991eaacc2736653b73e"],["/20210824/git-ignorecase/index.html","e5033de89afdb875decf43f952331d47"],["/20210826/get-csrf-token-of-luogu/index.html","d16e429e923e4df9852e2875e88c46d7"],["/20210829/server-changing-to-cloudflare-pages/index.html","54a0b229d602a5144b3fdd49de8f1a44"],["/20210831/itdog-gfw-api/index.html","dbe469e8544c25abbf3f2809142aa98c"],["/20210912/hexo-pop-welcome-window/index.html","f9ac865566ca44fde4908128989683d3"],["/20210919/csp2021-travelogue/index.html","b5219971f6f1e63f446df1a416a95d38"],["/20210930/hexo-katex/index.html","dc6b4968dbf736422135407b9e6de2c9"],["/20211010/hdu-1702/index.html","b8f6c3d6852e44b01393e6b6fad4f9f3"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","98fa2d43f2325cb422580fa23e1eb524"],["/20211011/download-vscode-faster-in-china/index.html","e4a5b425127fbcffce4e65b0c6fce72b"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","0580b1221a8e2036ab11d4ef545a2c85"],["/20211013/luogu-p1141/index.html","b387d9ea3d9521a20bd3383365631c50"],["/20211014/noip1999pj-t1/index.html","cba1e8313820f151c17bbdab255fcc7a"],["/20211114/noip2004pj-t2/index.html","bfd8b6788261ce9a0f93fca7c9035356"],["/20211219/amp-solution-oi/index.html","baf84c95fb061a20cdf4c0754e3ab588"],["/20220102/noip2009tg-t4/index.html","4cf2ee5c9ea6f3b48240984e41e0d01b"],["/20220109/how-to-use-go-jumper/index.html","dd052f1d79533c06e09d54185895b8d0"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","c8a07dcb6fef52804fbc60d1da55cc8a"],["/20220207/change-the-theme-to-butterfly/index.html","7d6a6b69a1157272bf859224d0b37d15"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","df59181c895582fa01e005ea8e59d5a3"],["/20220209/5-free-static-page-hosting/index.html","3a15ffdaa08e34782d748d96388c9833"],["/20220213/friend-links-exchange-rules/index.html","f65cea6d5bd19b34d463be264e20c0f8"],["/20220213/usaco2019dec-silver-moobuzz/index.html","e4efe712f904177d253fe5e5f2028c18"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","14b69d5d2d165e2a73c32c93c1de636a"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","e82c8b429e78248e14c40f59a28e5c68"],["/20220312/init-your-hexo-blog/index.html","f45e48aff31459c01bd5300c42839ddf"],["/20220327/some-good-themes-for-hexo/index.html","844cc7cc061868e5aaeade16a7c03502"],["/20220409/butterfly-popup-welcome-window/index.html","6b4fe08369095784dd337cfb9261f933"],["/20220503/butterfly-go-jumper/index.html","d81ee34631b3933935502e3c23b6395d"],["/20220503/how-to-get-a-microsoft-365-e5-account/index.html","a3bf534a971b1903359d90a645b40e5e"],["/404.html","6c01bc4f90043a8e7be371e93bcf9148"],["/about/index.html","2da7c1c591885be436b90db2cb3055f7"],["/archives/2021/07/index.html","f8609e1782ba1920a7dd733cb46732fe"],["/archives/2021/08/index.html","4d02a3acff27fe93c9f503a26994b670"],["/archives/2021/09/index.html","69be7e81ccd8aec0be6ebeb0c566e5cd"],["/archives/2021/10/index.html","7008fba2736ec1e51b427a9fc5dd70f1"],["/archives/2021/11/index.html","f76f0b8cebae8d3536aafa7f326cb9c4"],["/archives/2021/12/index.html","42294fa4bca0fbe48ccb18cc04b1a12e"],["/archives/2021/index.html","8aded59230918310e2aa340a0f385936"],["/archives/2021/page/2/index.html","4a1e3c5255092f336679b4d3518a90e0"],["/archives/2022/01/index.html","f28319eee35cf29326488dc7bc4622fd"],["/archives/2022/02/index.html","689e243beed3cfc220804b97e88df891"],["/archives/2022/03/index.html","21038d2d0dbee07a9c65454c00b1c823"],["/archives/2022/04/index.html","b2abf069efa8af5cd835eead999fb509"],["/archives/2022/05/index.html","958301e805e169e057968e2c84b53429"],["/archives/2022/index.html","c37bfdfd7bdef7a5091126fff2bd435e"],["/archives/index.html","c6e48e8325076f9e66282fab8b4508f9"],["/archives/page/2/index.html","f8540d4fc76e709fe97120e103bfc7ed"],["/archives/page/3/index.html","abe2eef4ace5d5b8a05d7e38e65dcc7d"],["/atom.xml","9578f84a96633f6e19678e491d297100"],["/baidusitemap.xml","d503f302a09e1de1963db8d55daa8371"],["/categories/index.html","aa3749f478888ff0ce0f587d1235e27d"],["/categories/博客美化/CDN/index.html","2a54f193aaca9b1950e215760778d781"],["/categories/博客美化/index.html","2389e37db32e9802a51f72868864ae2c"],["/categories/博客美化/功能/index.html","fde01bb5f3280af4301ad9b3e3d02f8f"],["/categories/博客美化/部署/index.html","118c44ff2ebde6d6dd83f0f9c1ac70a5"],["/categories/博客美化/页面/index.html","d92e99588f6f755c883828c4979322a0"],["/categories/咕咕小站/index.html","25b9d8aef17022a6f3ba257b6e17bdd9"],["/categories/咕咕小站/博客动态/index.html","acdea28ecf6382daf6ad15d807c8ba7b"],["/categories/推荐/Web服务/index.html","a895b5b67b75fc1926837322160050b3"],["/categories/推荐/index.html","11da1bb6d08afcd5ef3197caa782d80a"],["/categories/推荐/微软/index.html","f8e584317866c1d70e15754027b174fd"],["/categories/游记/CSP/index.html","4e0cade91006a85a9a0eb951a8552da9"],["/categories/游记/index.html","f1f81aa4922875f2a435ee9a33069af8"],["/categories/算法学习/index.html","82dac38c0ad5585fcf0495cee2c3b2b8"],["/categories/算法学习/搜索/index.html","01386f3c259a59e63826f28cdff7dc28"],["/categories/算法学习/数据结构/index.html","5f46989e3efc40c418307f6874958d01"],["/categories/算法学习/数论/index.html","888ad3718e63b14a04914b30453e9ed5"],["/categories/算法学习/模拟/index.html","faa3538fa90682fd7a44528265475f84"],["/categories/算法学习/高精度/index.html","18c786c58c51a2fd7d0274bdbb3e718c"],["/categories/随笔/GFW/index.html","4a51306df771a8f70469adb9677755bc"],["/categories/随笔/Git/index.html","c25ecafb0293a7afbf5fafc068606fdb"],["/categories/随笔/Hexo搭建/index.html","aa2b6ef2ce6e79917870c0df7453e421"],["/categories/随笔/VS-Code扩展/index.html","5d4e79fa15639bd9695997e92d47fb65"],["/categories/随笔/VS-Code扩展/编辑框/index.html","483256ac2363cdc4937d95d8dce0dca1"],["/categories/随笔/index.html","9c6064393c0906e94956f78b019a88bc"],["/categories/随笔/反向代理/index.html","39bdd83558d6a19c6ab4d66c6f081853"],["/categories/随笔/咕咕小报/index.html","d703bfc0775252a7a86efb607dffa02a"],["/categories/随笔/奇淫技巧/index.html","07f96c55c1e905031b948d87524e0d38"],["/categories/随笔/洛谷API/index.html","7f4c0d285864e122c75f6a418a2afb1a"],["/css/font.css","eb49ae059d2b7553f9ade00483b7d9a9"],["/css/index.css","e9f890452a2f9b625dc8c7024563d451"],["/css/sweetalert.css","196c08c89f0c8a9b688a16d3435ac327"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.woff2","7dba266595ef1f9505dfd23eef011341"],["/friend-links/index.html","0a127d41ad65db753a1022501d273c50"],["/friend-links/rules/index.html","2ee79de13055c651e8e18cb51da2120c"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/banner.png","c35d400ce371f8befb35dd55712569ae"],["/img/blocked.png","3cff34a282278f44244a8252ad2cd352"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/link-lost.jpg","12c7bff4c19b1fd457fe91017edad27a"],["/img/loading.gif","22b1adc497ba662040d227519416f32d"],["/img/qiniu-actfree-wide.jpg","30621505ec4a2cd6681a53d767a4a517"],["/img/qiniu-cdn-wide.jpg","c73e74d7d8813ca2ce218a8a04b5cdf4"],["/img/qiniu-server-wide.jpg","9a4b0de9f0573ff7374c70e5c927816c"],["/img/qiniu-storage-aside.jpg","52753956a8be18e9d8f4559f60989f7c"],["/img/qqwallet.png","808ecf886e4e71c02b4728c6bed71090"],["/img/undefined.jpg","9caec22fe36bad53191055b6f40f6908"],["/img/wechatpay.png","d25ade1e4be4aa943932c56e37d708ff"],["/index.html","5d1ed3d69657b091a00ef2fc2a7ae87c"],["/js/link-checker.js","02991a3e40b6c75a6bcb0df2457d3f13"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/serverlist-loader.js","fe1c7c40db15bd11366c97db4eff5d66"],["/js/sweetalert.js","800cbdcad6a26e06fc9471102d8c50c4"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message-board/index.html","6ccf4ff554a04cd72ab89a88f757e886"],["/page/2/index.html","963beb3e99da09f597d3e3900e4ec1f3"],["/page/3/index.html","248d0c81fdc6dc38d76ec5efa06bf3cf"],["/search.xml","226ca75627cf620d8895b155858ea0d8"],["/server-list/index.html","0b94499a0b7b81aeca92adf429ad3075"],["/service-worker.js","ac2dfb48e86d11521d4ff0caf29706c3"],["/sitemap.xml","f9ee912fab698ed0cf7428461104b6b1"],["/sw-register.js","7bff3ea1b4f49d163f8f36818fcdcd41"],["/tags/API/index.html","29b136e40f1c7071aab0a7983b6ec5ce"],["/tags/Blog/index.html","46110614a1b7a7d43fce73cdfaf712d1"],["/tags/Butterfly/index.html","74256068ebe35fa165e42352cde39706"],["/tags/C/index.html","f810ce22685e0081c66ccd16840c4378"],["/tags/CCF/index.html","d77cd754236ad2224407eb46422ee500"],["/tags/CSP/index.html","3dc1ac5556f2f69efb1a83562cc3b0f2"],["/tags/Cloudflare/index.html","ae838582c0a5909be2376b0084850bd3"],["/tags/Firebase/index.html","b7bf64396982dc4bc54c97d729abe94a"],["/tags/GFW/index.html","96fb4dc440f5457c5f3c3bab94bae4d3"],["/tags/Git/index.html","eb4d8e737f8942c86f0f8ad81adeef82"],["/tags/HDU/index.html","2f9451694db6f2cd56f4d3b33c499734"],["/tags/Hexo/index.html","b59e444aff365d736db53b05f338ec37"],["/tags/JQuery/index.html","7654c406437cc6bc0453c59c12196970"],["/tags/JavaScript/index.html","adbb908174ccfa5bef548da4e07f1591"],["/tags/LaTeX/index.html","c78b49cc0ab2f6c0d6db93876442b4da"],["/tags/Microsoft/index.html","1e3fcf86479e3ee4477df99e58d227d8"],["/tags/NOIP/index.html","d0ca27163e51f637baa8cb9860972921"],["/tags/Node-js/index.html","e2a2d5c98ca60ab6beb099d0b3b4a815"],["/tags/OI/index.html","aa6ae9a2408b6cdd0e6223488dcc30d6"],["/tags/Office/index.html","2ee19187ff359c7fd73767d3c512cd18"],["/tags/Proxy/index.html","7e5459c2429f1be418d56b45378aa755"],["/tags/Python/index.html","37bc012a34b89f655a42071c4103fe26"],["/tags/Sweetalert/index.html","92474ef243e71de150e5a80f568c3fb8"],["/tags/USACO/index.html","c36be19f0b67cf3c932e90d9f3d21891"],["/tags/VS-Code/index.html","06f74f51704d6fe3d43441e81ff7196d"],["/tags/index.html","7cf3d899c9a0f14056252efa2ff6eb9a"],["/tags/jsDelivr/index.html","dc267cfb68d68ec718b0d88371a27134"],["/tags/主板/index.html","3bdffc1c548ae475a6420f06d4736494"],["/tags/主题/index.html","212bcd741f6acc486ca9c8b01b4f6e35"],["/tags/免费/index.html","57042f1d7fc74453eb46a6247f9ca8a1"],["/tags/反向代理/index.html","fd7e439f20f0b7e0a6e25d1327ee66de"],["/tags/奇淫技巧/index.html","03dd09355fcee5f5480727d58c573b07"],["/tags/小报/index.html","4b7019bd7b94c6442998345a107a1949"],["/tags/扩展/index.html","d6f3179a5746b1bbbf8793e9272ee762"],["/tags/技嘉/index.html","d511912687ce3677c0f519860cca8f78"],["/tags/来源未知/index.html","db32b8f2896aa7d3ff3c4364362c87fe"],["/tags/洛谷/index.html","2aab5475edc2504a9ca8345c2c86960e"],["/tags/游记/index.html","65702728cd166e61c67024e07db78195"],["/tags/白嫖/index.html","e6b37493438eeec8d9e035c362640a4b"],["/tags/维修/index.html","0aecd2a48f87a3e64aaec06d46d7bdbe"],["/tags/美化/index.html","05637fb3eb19df45464091a281c3319b"],["/tags/部署/index.html","b828e4000e255b3f8300a7aea287231f"],["/tags/题解/index.html","08de374477b0f18473e449fe54286a10"],["/talking/index.html","6b48efa1f76db81fbbe67fa2952fc501"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
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
