/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","a514a60b39fcd6a32f9df4a2971610eb"],["/20210802/luogu-p1601/index.html","c520854e5afab8d9b9a2a5256574f256"],["/20210803/luogu-p2393/index.html","4a9c00cf53e6eab5a3a134940467bd24"],["/20210815/hexo-clicker/index.html","46bcfdbbcb696d986039aff2bab713ca"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","19c32c3e091ac6aaecb26c246e4db577"],["/20210824/git-ignorecase/index.html","d479d58c15d6994ba31521e1cbd13606"],["/20210826/get-csrf-token-of-luogu/index.html","0808312344fd35600d929fff6207bdb4"],["/20210829/server-changing-to-cloudflare-pages/index.html","b7ff3fe787446e3072b9a0baffdd9b99"],["/20210831/itdog-gfw-api/index.html","449e2b7724ae0453223659cd7ed6d1eb"],["/20210912/hexo-pop-welcome-window/index.html","bbeb9a00b6231154b224138479ceb099"],["/20210919/csp2021-travelogue/index.html","53e414a6178feee55ee7dbefd3952bf8"],["/20210930/hexo-katex/index.html","a178ae080ab0107a44ee31644a577609"],["/20211010/hdu-1702/index.html","d1303d2852e8f1af1301115724a19231"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","9d32fe254afb3f2edcb8856ed6fa4496"],["/20211011/download-vscode-faster-in-china/index.html","522514109ea44ac380f801e62a6db14f"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","94a2fff119475075c6cbf95ac47ffa3c"],["/20211013/luogu-p1141/index.html","7ba89b57f87043bb243a10ac61a94cf9"],["/20211014/noip1999pj-t1/index.html","6c95165ba91f811dbe5034261d22813a"],["/20211114/noip2004pj-t2/index.html","75bb6becfe7f0f88b35d03ff19d45422"],["/20211219/amp-solution-oi/index.html","6699fb8f810fc4bc188aa9006d449b81"],["/20220102/noip2009tg-t4/index.html","51a226c3073408a0ef2d8dc440a6ad91"],["/20220109/how-to-use-go-jumper/index.html","4dad830bb44ad7a0eaf5267c9e50390a"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","53e1d33774092c79f3a4f0d078adb4a1"],["/20220207/change-the-theme-to-butterfly/index.html","45ae4aef5da7b028267b3ac1404bc10e"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","83207ddce0343217da9bf2a4b087b0cb"],["/20220209/5-free-static-page-hosting/index.html","adaf6a2b15700a5470b48a4ff5c6bb81"],["/20220213/friend-links-exchange-rules/index.html","75806f67217f7a620b9f19bd50b29859"],["/20220213/usaco2019dec-silver-moobuzz/index.html","516a3568f3b8bf40d9e6b9b2ae4786c6"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","7d72cbe782cb98d6cf1e864bd45aa3b2"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","8305c5081456f33093a24a9be25735c6"],["/20220312/init-your-hexo-blog/index.html","c6d9f3823cdb9acc6622197c71bcfe40"],["/20220327/some-good-themes-for-hexo/index.html","fe83d867fe097e75e4d6bc0829dd8273"],["/20220409/butterfly-popup-welcome-window/index.html","8aa6669b529697d8e302a307c6f29b38"],["/20220503/butterfly-go-jumper/index.html","ade617bfe12389e98b5d5945db95bdba"],["/20220503/how-to-get-a-microsoft-365-e5-account/index.html","7cd0ee54d8d30fcf9fe897a13ca0d1de"],["/404.html","55a22865c056f4044c11838d0dded2a0"],["/about/index.html","c8a35fd0ae378a88885f890b82c12cfa"],["/archives/2021/07/index.html","9160177e7d8a64f40bb1510bfbfde1ad"],["/archives/2021/08/index.html","dd0c1c5f6e0849f72b1c7fc4cd5b05d0"],["/archives/2021/09/index.html","6c4fb1789835009eb32bd7e5ad71fbfb"],["/archives/2021/10/index.html","6f0399617269ee75b37c0ad26562711f"],["/archives/2021/11/index.html","a6faba9826ab591da2ec1af74a2253d2"],["/archives/2021/12/index.html","2a3dff4e6183c5fdf31c9f717bc05ace"],["/archives/2021/index.html","294fb525715ff0f8019c63ca7c7a3030"],["/archives/2021/page/2/index.html","617ca7688624a759ec228d44ad4a11fc"],["/archives/2022/01/index.html","27fb863a5fd46e1b524bfaf12668121d"],["/archives/2022/02/index.html","6e4e54af64e44de77135e069074fddc5"],["/archives/2022/03/index.html","cf9ce46cf454574d1a10297c279dad4a"],["/archives/2022/04/index.html","069aa64418ee567e509569acebd010fb"],["/archives/2022/05/index.html","a7aa77572eb02bc6202338efdb629c82"],["/archives/2022/index.html","c3103a0d79a2b9550eec58d5a0817665"],["/archives/index.html","47b8ad9c7a2836556316cacf34cf3410"],["/archives/page/2/index.html","4d0080da084b43d8d102247fe8f739fb"],["/archives/page/3/index.html","dead055ed5df06fb1d7ded1923d445d6"],["/atom.xml","9578f84a96633f6e19678e491d297100"],["/baidusitemap.xml","d503f302a09e1de1963db8d55daa8371"],["/categories/index.html","46a9a5e2dfb33520b0947e7064d07b44"],["/categories/博客美化/CDN/index.html","dbf2d305d31b7c647542bd3b41aa37c6"],["/categories/博客美化/index.html","0a3e414f2af9a0950f502a8d7c079734"],["/categories/博客美化/功能/index.html","b8637d83ca7158974d150029d12dfb3f"],["/categories/博客美化/部署/index.html","fd60728be22b6d92aaeae3464e3c2911"],["/categories/博客美化/页面/index.html","fb049b60240be4e53ebbe35a73b8a68f"],["/categories/咕咕小站/index.html","0489d02a425633fd0ca66b4e91ce802c"],["/categories/咕咕小站/博客动态/index.html","fe3b2e8c43180543d0a50919aa210f8e"],["/categories/推荐/Web服务/index.html","1ea51a0f4606ecdad61752999995d0cc"],["/categories/推荐/index.html","2023ed869a1e12341172eaad8e6379c2"],["/categories/推荐/微软/index.html","9205eb255fb131a0dd9373b4d6228631"],["/categories/游记/CSP/index.html","20bd529b3f8cc726166cfeea1dbdc9c6"],["/categories/游记/index.html","ee83a5fb848be6f5c9800c2117d11558"],["/categories/算法学习/index.html","aaa387cad4c1750ca490b796736f7a12"],["/categories/算法学习/搜索/index.html","4d98b7726df33090447a0959254be35d"],["/categories/算法学习/数据结构/index.html","67eebeea950157f099f1f0b62fd1bffd"],["/categories/算法学习/数论/index.html","987755a2459a72637dc8427776687aa0"],["/categories/算法学习/模拟/index.html","26441ed0574a9db76a17bd5d4b5b9fe2"],["/categories/算法学习/高精度/index.html","a6392a5a69e28eab0ee4e6c6d6cacf0d"],["/categories/随笔/GFW/index.html","f4db2e961d4a848a221b71df8b45ff40"],["/categories/随笔/Git/index.html","54b6925b0bcbf96138354e7d0dcbf8cf"],["/categories/随笔/Hexo搭建/index.html","4d4d54a092ba621554126cfcc1383795"],["/categories/随笔/VS-Code扩展/index.html","de7070b51d7ce2768bbc6b0e15b95be8"],["/categories/随笔/VS-Code扩展/编辑框/index.html","f682db944e8d2f87d112890e764470fe"],["/categories/随笔/index.html","a775c07850637ab495c4dd9e8e2add97"],["/categories/随笔/反向代理/index.html","6d30c984396d1f15f35d07cd67353a80"],["/categories/随笔/咕咕小报/index.html","d7f4fc6bbd4f08bb5bad4918157eb9ba"],["/categories/随笔/奇淫技巧/index.html","bfe9057661f1c17e5c39e2a0a7aa2986"],["/categories/随笔/洛谷API/index.html","3575e7b34116758d8ee427c73d6ca481"],["/css/font.css","164ea28a53a805dd271f7ce896f7c1e6"],["/css/index.css","14f1779a4bd08e83b0fec1040098d064"],["/css/sweetalert.css","196c08c89f0c8a9b688a16d3435ac327"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Fredoka.woff2","c05ed7a4be6d56badb689cfb1453289a"],["/fonts/UbuntuMono.woff2","8b2a874ab5c9080453c2d558a3c4adb8"],["/friend-links/index.html","470f170501c1ca70fc740f4bc68c635e"],["/friend-links/rules/index.html","9504ed3f0a045de27336f29485dc503b"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/banner.png","c35d400ce371f8befb35dd55712569ae"],["/img/blocked.png","3cff34a282278f44244a8252ad2cd352"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/link-lost.jpg","12c7bff4c19b1fd457fe91017edad27a"],["/img/loading.gif","22b1adc497ba662040d227519416f32d"],["/img/qiniu-actfree-wide.jpg","30621505ec4a2cd6681a53d767a4a517"],["/img/qiniu-cdn-wide.jpg","c73e74d7d8813ca2ce218a8a04b5cdf4"],["/img/qiniu-server-wide.jpg","9a4b0de9f0573ff7374c70e5c927816c"],["/img/qiniu-storage-aside.jpg","52753956a8be18e9d8f4559f60989f7c"],["/img/qqwallet.png","808ecf886e4e71c02b4728c6bed71090"],["/img/undefined.jpg","9caec22fe36bad53191055b6f40f6908"],["/img/wechatpay.png","d25ade1e4be4aa943932c56e37d708ff"],["/index.html","a6e3fa6d37bd6e7166a1da1c6b71fd10"],["/js/link-checker.js","02991a3e40b6c75a6bcb0df2457d3f13"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/serverlist-loader.js","fe1c7c40db15bd11366c97db4eff5d66"],["/js/sweetalert.js","800cbdcad6a26e06fc9471102d8c50c4"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message-board/index.html","0968a89ac5c3e83ce647c0e7ab42ded6"],["/page/2/index.html","036c7c533ee7d8ad756eb7417b4615db"],["/page/3/index.html","9b16530e94440f257ee268b5e8fcf79a"],["/search.xml","467a16f19aa6106bd3c32f77ad0971e2"],["/server-list/index.html","3d6456b6a3322afb04d77dd54cc66b19"],["/service-worker.js","fdc18bd67c397e835e74fd781d4563dd"],["/sitemap.xml","5a42ae71814d0c91c5e3e36c4b7abc40"],["/sw-register.js","18dccada3c3c83a62a164ac64b5c399e"],["/tags/API/index.html","eea1abb5aceb33640f963f6501880952"],["/tags/Blog/index.html","da7f70c04c2bfbf1bfa20712f96cf6f1"],["/tags/Butterfly/index.html","8ea1a2d23b5ce8b1ebd7865fe956427a"],["/tags/C/index.html","23b125d8a8961aa2497262b6c2ed5bcb"],["/tags/CCF/index.html","f6fb5fd008970b1dbb5b71e54819063b"],["/tags/CSP/index.html","48d1b10ce87094bdd565f54c841edb31"],["/tags/Cloudflare/index.html","4e579e94e1fdc6df07db8c8e65560aee"],["/tags/Firebase/index.html","b76ef11cc62989d738ef2f79969fd4fe"],["/tags/GFW/index.html","039a50a64fcfec7f2237b37bf7fda78a"],["/tags/Git/index.html","df907d9cdcef5a18645fce70147b17d0"],["/tags/HDU/index.html","0adc54b132ddb7b6cb1a26f82df82530"],["/tags/Hexo/index.html","f912f64f0c93592769b7c789d87d7861"],["/tags/JQuery/index.html","9d45c9005ae58bd7b3d8ff2103764666"],["/tags/JavaScript/index.html","20e01442f2088b8ce9e8d1680f387ac8"],["/tags/LaTeX/index.html","82d58bd14d199d27b7a6d48adf4bb2f5"],["/tags/Microsoft/index.html","5c91a86893f5f60be2402b0a6595f971"],["/tags/NOIP/index.html","e26ba920adcfea1a677e514ce229ec17"],["/tags/Node-js/index.html","df3ff8e94687bba5cfaa02800b37d8c7"],["/tags/OI/index.html","77d539cf2539f3fc8b4c719dc516834c"],["/tags/Office/index.html","c5c96092354758e54e6567c345e90916"],["/tags/Proxy/index.html","97846e4de99cbb564eb4467e495aa5f6"],["/tags/Python/index.html","98356e01c54ee9e849525089cfe5b9b4"],["/tags/Sweetalert/index.html","a02245efa0a339ee39a47442ede1e659"],["/tags/USACO/index.html","c175c48788eee0a5c286d85cb439a131"],["/tags/VS-Code/index.html","b590e41f211155f94891b58b166dd5da"],["/tags/index.html","1d97016bffc51e07b3089a43808b615b"],["/tags/jsDelivr/index.html","d5ccb59263ac9b5e977738572cdac473"],["/tags/主板/index.html","8415a80279d4110a6898c464a10c36ae"],["/tags/主题/index.html","ee475980a064496660d7a810b7917fc6"],["/tags/免费/index.html","399f4c61be7baccdb76c6f8296c9af43"],["/tags/反向代理/index.html","9bf3f6d8ddbf480a007b846ae0eaad4d"],["/tags/奇淫技巧/index.html","4292a28642747b94939a6616e4831d49"],["/tags/小报/index.html","6c991b0b59c3f34777c8d469d2bbe917"],["/tags/扩展/index.html","cb2acba0971d483e4e0483a7e3d454d7"],["/tags/技嘉/index.html","8ea13005954b098aa74c580f73d19f0f"],["/tags/来源未知/index.html","e99f09e7f2d317d539bcb9e49856706c"],["/tags/洛谷/index.html","2e236a66522c69ea27bc4f573aa03e90"],["/tags/游记/index.html","9392379ae5b6716beeb8a14b478bd5ea"],["/tags/白嫖/index.html","e7884f0d351854d9492ca060c37175f1"],["/tags/维修/index.html","497e44f90437bca3113c4eee7d80df7e"],["/tags/美化/index.html","e9e262f6cd62267fff1cfe23a706fe43"],["/tags/部署/index.html","759b20df18729f35946b1f5985fcbdab"],["/tags/题解/index.html","24936b2618c57da332357f6b892c74c7"],["/talking/index.html","a14064fe8cceae0b71af937714e5857d"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
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
