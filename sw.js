/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","bc7a803b583e7370d6c7069184cfe917"],["/20210802/luogu-p1601/index.html","c54c5f07a71b0287b56214c86ee793e4"],["/20210803/luogu-p2393/index.html","04730e326a3e6bba219b781ca8bd2d85"],["/20210815/hexo-clicker/index.html","2df0f30e1a87dd5bd13fc016b566afdd"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","cfa4fab9440a5273d7c30b69f7202130"],["/20210824/git-ignorecase/index.html","5f7aa6e73ca9bf54628df16198a5b1a4"],["/20210826/get-csrf-token-of-luogu/index.html","c7e5101aa2be2f34245d9433d22437d1"],["/20210829/server-changing-to-cloudflare-pages/index.html","54ad0c5bf8890bf9a88e1ea1298664a2"],["/20210831/itdog-gfw-api/index.html","03646f3fd2accf7728b9ef58897fa01d"],["/20210912/hexo-pop-welcome-window/index.html","b332337c9d72550d78fffc50d36735de"],["/20210919/csp2021-travelogue/index.html","ef4d34b5041d7a98023bcccc39f248f6"],["/20210930/hexo-katex/index.html","f3aab4d97e6233339c4f9faae6a041a6"],["/20211010/hdu-1702/index.html","4801afbdf310936ac6fb804ee1da57ef"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","b3e10d2b0df36e13db3d869eed544f3d"],["/20211011/download-vscode-faster-in-china/index.html","433c5f668dfe2453219d38f744839b65"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","952a1a58f14d9c5aedba877875111fbe"],["/20211013/luogu-p1141/index.html","e839ae35e698080739cec323b8d0e35b"],["/20211014/noip1999pj-t1/index.html","08d3cf6294a0df9cbf87cf7ec32ef958"],["/20211114/noip2004pj-t2/index.html","f17709f1e95532dde8c2d089365030e1"],["/20211219/amp-solution-oi/index.html","f423830447e305a625c8288e84560149"],["/20220102/noip2009tg-t4/index.html","3d6f689c649f5e807b0264a6a3e74de3"],["/20220109/how-to-use-go-jumper/index.html","7ec1654c264652214ca44da839d4fde0"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","91bf3dde2950044276d2fef4ded3bf65"],["/20220207/change-the-theme-to-butterfly/index.html","ee4480bc2a23272f17270a9f4f7d08ba"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","6e1b9488868a72ca5e4906de0e55f7f3"],["/20220209/5-free-static-page-hosting/index.html","6b30b680f2ecdc3a3511394af4b05c3e"],["/20220213/friend-links-exchange-rules/index.html","0fe1d46f8a2f474fa0638f909775d625"],["/20220213/usaco2019dec-silver-moobuzz/index.html","a1d7a54ac3e74c90bf7ecbe31d770bfd"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","873b3069a90cead3b44c886cc010feb8"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","4ce2a29fc957a8bb3d197cf090e2433e"],["/20220312/init-your-hexo-blog/index.html","3229b713a83dc2c5e68e3f8739b3ce9e"],["/20220327/some-good-themes-for-hexo/index.html","7e6f808596238b800f5d96ed942e2852"],["/20220409/butterfly-popup-welcome-window/index.html","c813a85a02260b6a074a40fdd64613aa"],["/20220503/butterfly-go-jumper/index.html","d9370a07ee67a141e6370376ae3f8d01"],["/20220503/how-to-get-a-microsoft-365-e5-account/index.html","8d35607d80ec310d1c54b76e8dd22fa5"],["/404.html","2df75ae2d3bfdc8e7bb6ef0993de43ba"],["/about/index.html","65a0ab9e02533c593156d22ab61a22e9"],["/archives/2021/07/index.html","feb1614172a730bef87a8178c903678b"],["/archives/2021/08/index.html","c945bbee01798c6fbf43939c6ff4f66a"],["/archives/2021/09/index.html","a85783d3c2780aa1b01d8aef022994d1"],["/archives/2021/10/index.html","982e82e08d0fac1a38696d6f12572448"],["/archives/2021/11/index.html","d30a14d2993366267a156d2f68851e6e"],["/archives/2021/12/index.html","d8c01dbe76c880868c319fe4d025b4d3"],["/archives/2021/index.html","5376bf1ae3f778a9132180ef374bdac0"],["/archives/2021/page/2/index.html","5463e9c0c335ecc9281d79c664e21297"],["/archives/2022/01/index.html","c900e6315a83e03414d876e253bc2efb"],["/archives/2022/02/index.html","a7a2617b10f3c5b564346c8a19a9fe8f"],["/archives/2022/03/index.html","b7d1933cb3eead1377396512a467fd5e"],["/archives/2022/04/index.html","cb3247bef1a5028d9c8c08fa55789d3a"],["/archives/2022/05/index.html","38d86b96ca83a92177f4d290381d33e6"],["/archives/2022/index.html","02edc33a3764a07b50a54f84e8d5106c"],["/archives/index.html","56537a1234df433e061a528758831a3a"],["/archives/page/2/index.html","e4fb2e9d65b54c98fd9b54c726f8521b"],["/archives/page/3/index.html","1f8e0d469e012df4164811360fda80eb"],["/atom.xml","9578f84a96633f6e19678e491d297100"],["/baidusitemap.xml","d503f302a09e1de1963db8d55daa8371"],["/categories/index.html","679723b251f8fe63a48fbc86de662801"],["/categories/博客美化/CDN/index.html","8208e2f078403a7882997fec1a787e63"],["/categories/博客美化/index.html","28110de14fd134308320e5e358ad2abf"],["/categories/博客美化/功能/index.html","8e613c8cbec53176da7a153f23e368ae"],["/categories/博客美化/部署/index.html","71c7ebc1778e2b0f9eb1a1ea3b01a6b4"],["/categories/博客美化/页面/index.html","cdf51f141525d5d79f304b67ac310850"],["/categories/咕咕小站/index.html","10e1fb43cb5205d7a4455a07165f877b"],["/categories/咕咕小站/博客动态/index.html","50ecafd29a0ef402f2e8ce355162b992"],["/categories/推荐/Web服务/index.html","25fa2ba676dab36e9352d8d8a4107b76"],["/categories/推荐/index.html","2385400273ce240229803a4a5e93ecd5"],["/categories/推荐/微软/index.html","c75ff9d960f5d5820ccfc78fa227f9dc"],["/categories/游记/CSP/index.html","fa2f043927dbc52c7d2bf4085c3f9bc5"],["/categories/游记/index.html","3ab7a00d9ab82395d65f32fe83d402a0"],["/categories/算法学习/index.html","f90302e4d0f6133f59e621fa6821c086"],["/categories/算法学习/搜索/index.html","597da3598d28f3f964759cef461eeaaa"],["/categories/算法学习/数据结构/index.html","dad71bf8763a0e12afe1e11441346fef"],["/categories/算法学习/数论/index.html","a400920fdcb734e4d5b75fb163ef0e05"],["/categories/算法学习/模拟/index.html","dad64eb4b5e911828fa1c9eee945cec1"],["/categories/算法学习/高精度/index.html","d37979f336a982ccb7af119b3d04e375"],["/categories/随笔/GFW/index.html","c30e0fd04f7708a893b68485ed691ed3"],["/categories/随笔/Git/index.html","0ebaff97936d34aa76702fe6056b503f"],["/categories/随笔/Hexo搭建/index.html","a6271dd7bc223b5d6acf808d569c9d93"],["/categories/随笔/VS-Code扩展/index.html","4b82b6f42491cd18fe48f2273a7f5bdc"],["/categories/随笔/VS-Code扩展/编辑框/index.html","e7f38e324a4c19ec2f713e8a77b80c3e"],["/categories/随笔/index.html","43e896859cf234b61783ccdf97b348c4"],["/categories/随笔/反向代理/index.html","380411965832fe60669603bfa7a37091"],["/categories/随笔/咕咕小报/index.html","39d7c7b455546b18b09b1b72d22df343"],["/categories/随笔/奇淫技巧/index.html","dea80d4eb8f2240be7aec1be73b01b29"],["/categories/随笔/洛谷API/index.html","6e3f24d526cdabb8ce0dc9ac5a5e6ec4"],["/css/font.css","2d5d4479cb167525cf7b1b4f34945575"],["/css/index.css","14f1779a4bd08e83b0fec1040098d064"],["/css/sweetalert.css","196c08c89f0c8a9b688a16d3435ac327"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Fredoka.woff2","c05ed7a4be6d56badb689cfb1453289a"],["/fonts/UbuntuMono.woff2","8b2a874ab5c9080453c2d558a3c4adb8"],["/friend-links/index.html","0d1c91fc945d698a8982689d80c6e314"],["/friend-links/rules/index.html","8fda3b58e39ab00ebb0240cd562a93d2"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/banner.png","c35d400ce371f8befb35dd55712569ae"],["/img/blocked.png","3cff34a282278f44244a8252ad2cd352"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/link-lost.jpg","12c7bff4c19b1fd457fe91017edad27a"],["/img/loading.gif","22b1adc497ba662040d227519416f32d"],["/img/qiniu-actfree-wide.jpg","30621505ec4a2cd6681a53d767a4a517"],["/img/qiniu-cdn-wide.jpg","c73e74d7d8813ca2ce218a8a04b5cdf4"],["/img/qiniu-server-wide.jpg","9a4b0de9f0573ff7374c70e5c927816c"],["/img/qiniu-storage-aside.jpg","52753956a8be18e9d8f4559f60989f7c"],["/img/qqwallet.png","808ecf886e4e71c02b4728c6bed71090"],["/img/undefined.jpg","9caec22fe36bad53191055b6f40f6908"],["/img/wechatpay.png","d25ade1e4be4aa943932c56e37d708ff"],["/index.html","59913aba697dcbdaecba0bf896f1f113"],["/js/link-checker.js","02991a3e40b6c75a6bcb0df2457d3f13"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/serverlist-loader.js","fe1c7c40db15bd11366c97db4eff5d66"],["/js/sweetalert.js","800cbdcad6a26e06fc9471102d8c50c4"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message-board/index.html","bf67b30a644bbd6da57e0acbf9761210"],["/page/2/index.html","3ff8f17b274bf3777ae68b41b7f217a3"],["/page/3/index.html","8257b8a3f60aa40f3d837c3c36db344e"],["/search.xml","467a16f19aa6106bd3c32f77ad0971e2"],["/server-list/index.html","8fd03234b26cd74acb17bdea39c2372e"],["/service-worker.js","804f569bf28d019cfc20dd3a6b3df234"],["/sitemap.xml","5a42ae71814d0c91c5e3e36c4b7abc40"],["/sw-register.js","11b8144fa56f8fa53437cc7752dd7284"],["/tags/API/index.html","58ac8465a4955994a2425115b3112727"],["/tags/Blog/index.html","83901ee09f05ebf4f8d73ba14a140a8a"],["/tags/Butterfly/index.html","0850baeb7569f9bc8b6be015903ece5e"],["/tags/C/index.html","516c9a9a6b678761f9e304a353475d95"],["/tags/CCF/index.html","1b2ba07df536afdd7a03d5fedde57c6f"],["/tags/CSP/index.html","76d0fe9561fc766a2f90e912e21bad0a"],["/tags/Cloudflare/index.html","056f40aa715f9af2b65371c28b0b6c8c"],["/tags/Firebase/index.html","251459ec7abe843161c5b48cbed2bcf2"],["/tags/GFW/index.html","d5dd316c3ad5d5fb974b3f4f8ff57a34"],["/tags/Git/index.html","251baa7c399dfbdf651f52783ff92a2b"],["/tags/HDU/index.html","f4e584bcc86dc877d4f5860f20dd9520"],["/tags/Hexo/index.html","ec6bb661a29b0ebadbac29654504061c"],["/tags/JQuery/index.html","ad30f1e65ed01ed8abb5d2494d337a6b"],["/tags/JavaScript/index.html","7615e9c9b6913688556e1495dfea5f03"],["/tags/LaTeX/index.html","ab59f4abf2328fb0fdbd93bd3a71778e"],["/tags/Microsoft/index.html","c2ddefec3b9d99406819d2c449629485"],["/tags/NOIP/index.html","988d7d581d67f9bea6e2fab3a6f9c5fe"],["/tags/Node-js/index.html","8ba0363b640329d419a70f8d6a626967"],["/tags/OI/index.html","4d94ff42c3666c577a049d3b11c8da2f"],["/tags/Office/index.html","3fa953131aa9467783f6949ca9349b91"],["/tags/Proxy/index.html","fbe59528ac4a242fc23c9f51b0296d08"],["/tags/Python/index.html","7f762346a50ef7489e629e816faf504e"],["/tags/Sweetalert/index.html","5d054b666da0fdcf17ec6f83460df2d1"],["/tags/USACO/index.html","d600f828609e4cc9dbfcb71a64cdc6ea"],["/tags/VS-Code/index.html","087f037906d12b07dfa76708d3cfcbf9"],["/tags/index.html","a9a6b3a28d64cfb0926765f36f58201c"],["/tags/jsDelivr/index.html","6e712945b1ab4256fada6ed61da12b22"],["/tags/主板/index.html","d64df0536e50a8580a69e07878ee80fb"],["/tags/主题/index.html","941b4bcb4f34c25a4cd56792c5a348d7"],["/tags/免费/index.html","a3687b8aa69ff95dcb43052240f66915"],["/tags/反向代理/index.html","47015c90f8f09a9bc71ec7455b847018"],["/tags/奇淫技巧/index.html","319c02440bd3d02c5abf6b50423286de"],["/tags/小报/index.html","3f585a5c4a0c92974c1602794b6fc7aa"],["/tags/扩展/index.html","50e93394dab3e7d562791f38beaa8c40"],["/tags/技嘉/index.html","938532b9f552a076f6dab6aa9c1d9295"],["/tags/来源未知/index.html","1ebf46dceb20e10c58515ca85b18f488"],["/tags/洛谷/index.html","005f4b470e9450157c1f71287d22f0c7"],["/tags/游记/index.html","a0e377fbd06573042ffde52fc5fc1c1f"],["/tags/白嫖/index.html","e7ab0e5222b4662c121ae8ec1ac83fa1"],["/tags/维修/index.html","2a5a95fe7db7b71bd2fc6bb807ace694"],["/tags/美化/index.html","f1d36989558821240073288bfb882401"],["/tags/部署/index.html","ac21bbfae05717724c388c923e660995"],["/tags/题解/index.html","4388b5f0f27c35b02eeedc5a34523bdf"],["/talking/index.html","13476cde57e9aaa93d7aa5883ecaa20d"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
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
