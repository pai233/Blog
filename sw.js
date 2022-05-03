/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","ec3ee592477e2124c08f57928e420161"],["/20210802/luogu-p1601/index.html","71cd617dae29018fbd869defe8eb9925"],["/20210803/luogu-p2393/index.html","11932b1852b1cef76571281259395d9e"],["/20210815/hexo-clicker/index.html","74773999bb3b8b0f7de3f853d74e3f35"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","34dd8b1cb6bcd26e67dc6568529e9c90"],["/20210824/git-ignorecase/index.html","f407aed5f0c815663e05038bd2c04fa4"],["/20210826/get-csrf-token-of-luogu/index.html","370687d318b26acf97296d60969f592d"],["/20210829/server-changing-to-cloudflare-pages/index.html","0208325f6dd3faaaa5beb0ff784acfd5"],["/20210831/itdog-gfw-api/index.html","6bb7e174dbea7e20156b67362cfac7fb"],["/20210912/hexo-pop-welcome-window/index.html","12904f1bedfa241204a7dc668ff7296b"],["/20210919/csp2021-travelogue/index.html","ee999a713fe50d0cb00cbe5a48ed12b9"],["/20210930/hexo-katex/index.html","8f823f7c4857c131aa113267c8167c94"],["/20211010/hdu-1702/index.html","01e1cf167294add48bc5c029cde2f050"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","d46cff79e60d09f08371ee89411a74a3"],["/20211011/download-vscode-faster-in-china/index.html","82e14cf9e79cba62ae31d0be4caaa01e"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","e9e1159d85be4958754ca83f02218353"],["/20211013/luogu-p1141/index.html","b8285d9819dd4dd2fdca0c418d058b6a"],["/20211014/noip1999pj-t1/index.html","0a695ba84690286441617c4130bb3296"],["/20211114/noip2004pj-t2/index.html","4efa4e4eb331a47db219aa6f6ac0ed48"],["/20211219/amp-solution-oi/index.html","44f400091a8e055a1e3bf635f38bbeae"],["/20220102/noip2009tg-t4/index.html","b01e7f6f730caa4dbea61fbf62d1403a"],["/20220109/how-to-use-go-jumper/index.html","48120df308af3468e5a0d97ed47c24b2"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","9b93df14818cb84d9611ee8e1b25c4fe"],["/20220207/change-the-theme-to-butterfly/index.html","304474a103159d13e85dd99a009de07e"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","fc4b7e176ac28553a957dfc869ff6ab3"],["/20220209/5-free-static-page-hosting/index.html","00f477df7cf048ff4bedbc2f160fbc30"],["/20220213/friend-links-exchange-rules/index.html","0eead643513f290966576097642eb1b7"],["/20220213/usaco2019dec-silver-moobuzz/index.html","73fbd39e57d053303d7990d8efc77512"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","8dd5a74dd668a7cc19d3db64d94ee89f"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","dc1f3ee1cce1769a1ea60e013fc84d95"],["/20220312/init-your-hexo-blog/index.html","0af449ed8ac61aceb8bd1c2e38ce533f"],["/20220327/some-good-themes-for-hexo/index.html","a2a172ff69ab9514cd396b07c3340fb3"],["/20220409/butterfly-popup-welcome-window/index.html","892df922f6a4fe3d2c3f6a0ee7e4ab11"],["/20220503/butterfly-go-jumper/index.html","925d29e25d33b43a76cad733d658db4b"],["/20220503/how-to-get-a-microsoft-365-e5-account/index.html","d37f33515b2b17795c820762689cc9fa"],["/404.html","489817e55d16248a1ec5ff4671ea7cb6"],["/about/index.html","d19272bc49aa9dee8de7c7bfa1041d26"],["/archives/2021/07/index.html","b0e9c2a76d72069f07aebab31e64eda1"],["/archives/2021/08/index.html","3a193f9e53fa14793322dfd45759c344"],["/archives/2021/09/index.html","e5277842d64ee508d3dd13fdd5c78364"],["/archives/2021/10/index.html","89a7187a0e9b4db64ce2ac0f118234e4"],["/archives/2021/11/index.html","baa7f82b1a8ae2626f7b2e9ed34ad59a"],["/archives/2021/12/index.html","419d34cf78d25b5d96bb03dac258cc78"],["/archives/2021/index.html","de63cf477c691706707d86b86d84e7dc"],["/archives/2021/page/2/index.html","a8360296e3c925b6b1c7d73d28cf1105"],["/archives/2022/01/index.html","e8b4d444b7e22dbda5a39d8c4f747f86"],["/archives/2022/02/index.html","3565df4c28dfb0e206aa7e75572a3450"],["/archives/2022/03/index.html","98f5e5056cdb56048515fcbe1dff2a4a"],["/archives/2022/04/index.html","0faa8ed415ac964587585a5bd66d4b83"],["/archives/2022/05/index.html","5e8f9967bbd0966209a56cafdffcca82"],["/archives/2022/index.html","3d66c18aee852af6cb19638f5c4fa9a8"],["/archives/index.html","e89c1332e27140b96648df15258286b1"],["/archives/page/2/index.html","cacd5b224859b00381184783813ec41e"],["/archives/page/3/index.html","f1f1207e57ee7103b48ab6c005f9a5fc"],["/atom.xml","32dab616e2e8ed35e775961985f0a8e1"],["/baidusitemap.xml","d503f302a09e1de1963db8d55daa8371"],["/categories/index.html","2d8472ef2aff332ed5228f54e22df38c"],["/categories/博客美化/CDN/index.html","249e2a2a7426b871531ee09506c955a1"],["/categories/博客美化/index.html","e25031e97c8c51e541b190e829d25e17"],["/categories/博客美化/功能/index.html","dc564b0ecdda8a6dad9ded0fd7573e7c"],["/categories/博客美化/部署/index.html","a4ef87f21d0a8b0e158ae8710e19e0ca"],["/categories/博客美化/页面/index.html","621b11143e026078efeca8b04dd76209"],["/categories/咕咕小站/index.html","c3ed35acbe337c69f85c32f229c3a6db"],["/categories/咕咕小站/博客动态/index.html","13ff04496184f0df3691e8764e5a39e0"],["/categories/推荐/Web服务/index.html","120fbf4ac88ba7ecedf5154eb8502f2b"],["/categories/推荐/index.html","8ba8b18c8134c5ebd87629eec328a35b"],["/categories/推荐/微软/index.html","59733cb6f7285508b65e5370ad8fbd73"],["/categories/游记/CSP/index.html","78aa8223ae3f84d9eeb57150ff5f5b10"],["/categories/游记/index.html","f6ac258a43751f8b46e9227c887a3c13"],["/categories/算法学习/index.html","a38a7eb6bc25b687b86851bed1b027e9"],["/categories/算法学习/搜索/index.html","0eac59a3b9e47916dd152d05d0df9048"],["/categories/算法学习/数据结构/index.html","cbe6a184be40da805f378a53b54b158c"],["/categories/算法学习/数论/index.html","87a4d78d2392a57afa601a61aa7e7c57"],["/categories/算法学习/模拟/index.html","c7a0a8b34a3a8cc690356ad045f356cc"],["/categories/算法学习/高精度/index.html","db598bfbef5dacb4738e5be6c2cd3ae0"],["/categories/随笔/GFW/index.html","7789b165097afc5387deeece10c46fcf"],["/categories/随笔/Git/index.html","0439858c94b6969d5f1abee7abaa9122"],["/categories/随笔/Hexo搭建/index.html","28ccd90a4ac6218dbf5e3e1cc786dfa1"],["/categories/随笔/VS-Code扩展/index.html","60ca67a0959e06892ce66d87aa622182"],["/categories/随笔/VS-Code扩展/编辑框/index.html","2337d6f906b951824c2fe6d3cee44420"],["/categories/随笔/index.html","5f0c1fe842e5b945fb99303812a18921"],["/categories/随笔/反向代理/index.html","1261954ccabcad2d5a9fc052d51878e6"],["/categories/随笔/咕咕小报/index.html","86bc4f4f51bff772de04ecee4cddf883"],["/categories/随笔/奇淫技巧/index.html","4f179af7ca4d95e59a250bd24f550acf"],["/categories/随笔/洛谷API/index.html","50282f2069cd3e16299a2abda2f6ca21"],["/css/font.css","eb49ae059d2b7553f9ade00483b7d9a9"],["/css/index.css","e9f890452a2f9b625dc8c7024563d451"],["/css/sweetalert.css","196c08c89f0c8a9b688a16d3435ac327"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.woff2","7dba266595ef1f9505dfd23eef011341"],["/friend-links/index.html","31bfea228e5025f8bef1a4294d8455cd"],["/friend-links/rules/index.html","b309ac4c09af61e7708eb8db8cebdcd5"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/banner.png","c35d400ce371f8befb35dd55712569ae"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","22b1adc497ba662040d227519416f32d"],["/img/qiniu-actfree-wide.jpg","30621505ec4a2cd6681a53d767a4a517"],["/img/qiniu-cdn-wide.jpg","c73e74d7d8813ca2ce218a8a04b5cdf4"],["/img/qiniu-server-wide.jpg","9a4b0de9f0573ff7374c70e5c927816c"],["/img/qiniu-storage-aside.jpg","52753956a8be18e9d8f4559f60989f7c"],["/img/qqwallet.png","808ecf886e4e71c02b4728c6bed71090"],["/img/undefined.jpg","9caec22fe36bad53191055b6f40f6908"],["/img/wechatpay.png","d25ade1e4be4aa943932c56e37d708ff"],["/index.html","2bf5a7e131cba205ffe72e2d5dbae63a"],["/js/link-checker.js","02991a3e40b6c75a6bcb0df2457d3f13"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/serverlist-loader.js","fe1c7c40db15bd11366c97db4eff5d66"],["/js/sweetalert.js","800cbdcad6a26e06fc9471102d8c50c4"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message-board/index.html","7739e7167730e98a211c41b9e7d4c8a9"],["/page/2/index.html","6d5d2d6787c9dc2a4abacfc942862014"],["/page/3/index.html","47c087d44bc6c19470f4d2bc63610f1d"],["/search.xml","c3e4156c0b12dcb59fd19c42589c1d7b"],["/server-list/index.html","e4a40a2551c7e54d03a135c7c1250928"],["/service-worker.js","0a5a015d48dc0d4b85b241c10723eb84"],["/sitemap.xml","1093df5b49cb9a462bb09eec54fef56d"],["/sw-register.js","38d424b4f6457be7bcdca6407a3670c9"],["/tags/API/index.html","1fb3c39526bdc42185749444ad30c884"],["/tags/Blog/index.html","a90bbb2b8883133ea1f43755baa1e55d"],["/tags/Butterfly/index.html","9f7502f0b24ce9720487dc4295b4b228"],["/tags/C/index.html","6f40d81e0e44a7cd92e7f2f148c7fb69"],["/tags/CCF/index.html","ec3a3e479f622c5102317c04ea6b3f3a"],["/tags/CSP/index.html","6458a3ce2e8453b3124f62498df2eb12"],["/tags/Cloudflare/index.html","85e0f7b0444bcedab1e2189ea568a6d9"],["/tags/Firebase/index.html","9694623ca0d6b4ac5ad5b4ecf09caa95"],["/tags/GFW/index.html","25dba093f13d5e848ded0811ee5e4a10"],["/tags/Git/index.html","940e58403d8a0e784acd940ff52c17fd"],["/tags/HDU/index.html","64de23934007ce79434b6105b5133a56"],["/tags/Hexo/index.html","8ff8aee3dd3582c4f48e37288741f0f3"],["/tags/JQuery/index.html","68b9ca3a8145fd00251b9be02ae0650f"],["/tags/JavaScript/index.html","f058e4f2440ee68e89965a76fdf8fb3d"],["/tags/LaTeX/index.html","8c24145e1182eb45db42391166c2f48b"],["/tags/Microsoft/index.html","2f8dadeb91b461e98ed81c0382a84286"],["/tags/NOIP/index.html","46c452e40ca7e3599733e8fbd0b8a703"],["/tags/Node-js/index.html","4261d962a17a5a59b20fae71cff9c7f9"],["/tags/OI/index.html","526c63e0b2a4bd8f94082825d05b5068"],["/tags/Office/index.html","9d04d0aeb59d0b24d42d4b309e178b55"],["/tags/Proxy/index.html","d37457f997bd5a7e73d3dd4c4fe922dd"],["/tags/Python/index.html","fc308f30324a6871d95b478f9534e6d5"],["/tags/Sweetalert/index.html","3e2b35f82d2cefa51dd08aa1343a3132"],["/tags/USACO/index.html","095bb400033799da78305044c7548fa7"],["/tags/VS-Code/index.html","eb5cb7b472fa585b42ad9607c77a78c5"],["/tags/index.html","93eba45f235c6584c542cc6dc7111cbc"],["/tags/jsDelivr/index.html","f0919dedbc3784c25b062775094f95e9"],["/tags/主板/index.html","3bcc7b32e6700d5e07081b959166e749"],["/tags/主题/index.html","9436ff255eb3c79f563fff4997456d52"],["/tags/免费/index.html","8ebfb47fcf9632b540a10547238bd37b"],["/tags/反向代理/index.html","7db546edda3e74efbf9df7917ec95360"],["/tags/奇淫技巧/index.html","e66721ffd3712656377df3498b5f7fa9"],["/tags/小报/index.html","b8c78b8e8b844f0c2ff735d12db8bd97"],["/tags/扩展/index.html","4266955890b553ff98544a5bc0f0a4eb"],["/tags/技嘉/index.html","9f1ec6cb1cd62eb2c3308e02b51a51fe"],["/tags/来源未知/index.html","598cf31268468ce0f6ad33331c98839f"],["/tags/洛谷/index.html","beec8b5b5e91294b215ea7744d277340"],["/tags/游记/index.html","2ab56611c4620c3080059c0d609c0e7f"],["/tags/白嫖/index.html","c2ea2bca5efedbc8a0dbb6a06cfb3256"],["/tags/维修/index.html","830416d38415f3064e87367a51c8e058"],["/tags/美化/index.html","30f55aead99090e4e2de001d9fdc8e0a"],["/tags/部署/index.html","187657423b6c9ef277f0cede0e6fdfa3"],["/tags/题解/index.html","d619124db7314df175f4a28184c38cb7"],["/talking/index.html","f62ff7e44186efb0c8b1bee861a47b81"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
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
