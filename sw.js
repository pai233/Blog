/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","4083f37fa792095cccd156393621f34d"],["/20210802/luogu-p1601/index.html","f274c28a2a8a2a939d77e0bbd963cad5"],["/20210803/luogu-p2393/index.html","9149e6d8267c9bc913fe600ec2d0f281"],["/20210815/hexo-clicker/index.html","606772fe0ff21453f87495a5fd9af727"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","b2238f931e53677ded680531727bdf9c"],["/20210824/git-ignorecase/index.html","0535a71b0fa744bc65d6beda40cea7f1"],["/20210826/get-csrf-token-of-luogu/index.html","36124193c93019112565ffd5ca2ba702"],["/20210829/server-changing-to-cloudflare-pages/index.html","815f595c02e1b028e0d97d6a2c87fdaf"],["/20210831/itdog-gfw-api/index.html","f6949cc79b1ba72897604fcc41176e85"],["/20210912/hexo-pop-welcome-window/index.html","861192f9389ab8b92188f12cd1aa2126"],["/20210919/csp2021-travelogue/index.html","fc2dc2b53bad2ceffc2b595037133932"],["/20210930/hexo-katex/index.html","1e0bedbfe396a2a32913147697f79809"],["/20211010/hdu-1702/index.html","c3d8fee48f7e4d96cf19cb245d257f62"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","e2b1555fa0a5689ec160227221f3a6c4"],["/20211011/download-vscode-faster-in-china/index.html","6ed46210de0a74ce253d954c7431dca4"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","b6fa9731aeacbbfdd1e2d4725c696d1c"],["/20211013/luogu-p1141/index.html","97fc6e90f9cc1af2e806a21a9802fb1d"],["/20211014/noip1999pj-t1/index.html","b65dc28d61ddf73e89b88db268f2c63f"],["/20211114/noip2004pj-t2/index.html","e8ef8d6d9af1040775781aa3fecebdad"],["/20211219/amp-solution-oi/index.html","18f476b659f599e2ae66ae4c546d7948"],["/20220102/noip2009tg-t4/index.html","4978f663c4737eb37d0e304c3d7f3b1d"],["/20220109/how-to-use-go-jumper/index.html","cfaf8cb2e88c2d25bc6ab014d4fba1f7"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","8882c29e0220c1caf6eacbd33edfa6cc"],["/20220207/change-the-theme-to-butterfly/index.html","c4cf68c6c6dd6f2c78ca198d2059cbb8"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","4e3e8aebefa93a0671cf2e71639084f2"],["/20220209/5-free-static-page-hosting/index.html","5ab8bad11c46fe4f16f7c11d3f94f7fc"],["/20220213/friend-links-exchange-rules/index.html","9773add8b284296c74c311ad87783fb8"],["/20220213/usaco2019dec-silver-moobuzz/index.html","ad6e3ebe4068c1862eec22b10e6018a8"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","392eee0c72276829bfb2f2561bcfa866"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","de69d28ba4aa57c1bef7961748cd48be"],["/20220312/init-your-hexo-blog/index.html","a7b8be8b0f95c24e6ad0d89c8314f70c"],["/20220327/some-good-themes-for-hexo/index.html","b77e2461161bf8062c18766f491a16f5"],["/20220409/butterfly-popup-welcome-window/index.html","a7715ee2b34963ab6186b0180643f995"],["/20220503/butterfly-go-jumper/index.html","44803e7460702f38c930137ed55566db"],["/20220503/how-to-get-a-microsoft-365-e5-account/index.html","b1aac5ffd8dc21800ca9adde4115c6a0"],["/20220707/noip2008tg-t1/index.html","2fa2b1f14c06783fe11eafaf37096547"],["/20220805/noip2006pj-t3/index.html","829c2bf4a890160ad8f3c5e87204f288"],["/404.html","0d246b6ba9fb9d66b9b757233738c17d"],["/about/index.html","452ffceb9f7a7fabe237b38e9e3b19f5"],["/archives/2021/07/index.html","5f1b32ea51b28730e5393e4baa858c7d"],["/archives/2021/08/index.html","d859d02b392f6b4540aa46723480effa"],["/archives/2021/09/index.html","690ab7b5a5cfc5ac5de8c5dc0488e65d"],["/archives/2021/10/index.html","bcec9116932669f965d75a7972bcd9df"],["/archives/2021/11/index.html","71b6a02f9d173d02b5dd5e1b7e154244"],["/archives/2021/12/index.html","639c34531295a34314a7dd8d6098884f"],["/archives/2021/index.html","eb6b82e4394f965fe4fc4cf7194b277a"],["/archives/2021/page/2/index.html","e937c0b5b9f92b407f8fe109c3256a87"],["/archives/2022/01/index.html","6a0eb70677595729ffc649bca0e761c5"],["/archives/2022/02/index.html","c7ed584ca96a89f9bdee119fba6d2c59"],["/archives/2022/03/index.html","8bf13015474fea7a1d9a5d3c075bdcb8"],["/archives/2022/04/index.html","6c2b7c442989c5701a12b49a63594403"],["/archives/2022/05/index.html","d16ab07e5b2ca42a7bec73d34c3ab7fa"],["/archives/2022/07/index.html","df7f5fd5b1b3f284ea00f6b6f826ab5b"],["/archives/2022/08/index.html","df37dbe8d82230a329cf5d49a0a7566e"],["/archives/2022/index.html","0886842a094493aaf5a7f70a1f0ec1ac"],["/archives/2022/page/2/index.html","f9be298b25da64d4f763fb236642419d"],["/archives/index.html","e9980c6376bbd81baba07e9a5501a263"],["/archives/page/2/index.html","e1c37032ff600f54b0c0380b4526b43c"],["/archives/page/3/index.html","1b4a24a7c0462b135d3ef95f51a2c40d"],["/categories/index.html","e3afaa356adbb14fec0e0f9a0cb8b564"],["/categories/博客美化/CDN/index.html","43ca13dc4df0574593032f21ca73ff78"],["/categories/博客美化/index.html","914a4b547eb7d2371096d288201481fa"],["/categories/博客美化/功能/index.html","44d2066c109edf56e348f33660f2aa1e"],["/categories/博客美化/部署/index.html","ce3f5e52a0744a457d825340c633aef7"],["/categories/博客美化/页面/index.html","9a0b3732d2659f22b66eb55b563674fc"],["/categories/咕咕小站/index.html","edc764a288ee7b86665416d8ae248011"],["/categories/咕咕小站/博客动态/index.html","ae8f2ef5fdc6ffde680c9d2f4834158d"],["/categories/推荐/Web服务/index.html","8583f3d7e253675cad4ef472b09f50c9"],["/categories/推荐/index.html","db1523317be4a52cefa6dc445b2fe1c9"],["/categories/推荐/微软/index.html","b4d40e0b8965e2b1f9620c1ac2e4e521"],["/categories/游记/CSP/index.html","10a5b9b74f0923fc1ec5bd4766142a6a"],["/categories/游记/index.html","b2b5a0d9e638fea04f443f2f99398cea"],["/categories/算法学习/index.html","6903d4365522cd61d408c9e377f150c6"],["/categories/算法学习/搜索/index.html","95ad8960de5a47dc2a51a9394dc2390e"],["/categories/算法学习/数据结构/index.html","61b1a26b23cb60534b4fecd1437578ab"],["/categories/算法学习/数论/index.html","fad7031ad0f9b6ccf18428da5d7b1dfa"],["/categories/算法学习/模拟/index.html","233ab7ef184afc6592a28c572732d217"],["/categories/算法学习/高精度/index.html","e7af3af6659770a53d4827e5c86a3941"],["/categories/随笔/GFW/index.html","6443b75f02288dcb61a84bbe4fd82da1"],["/categories/随笔/Git/index.html","356caf60962e66bf5044770b0c450998"],["/categories/随笔/Hexo搭建/index.html","d745d37c2e9f769115619772bd7f9d93"],["/categories/随笔/VS-Code扩展/index.html","59d6b2dffae016e1bb284e528b900124"],["/categories/随笔/VS-Code扩展/编辑框/index.html","4570617086203cb48e8754c62750a371"],["/categories/随笔/index.html","f6e6fa6b999dfa304dd122068492583b"],["/categories/随笔/反向代理/index.html","73034b81e953370255912271d02058c1"],["/categories/随笔/咕咕小报/index.html","356de171783b907480485b32c00e9b83"],["/categories/随笔/奇淫技巧/index.html","f89ff427a413545ace220516b2b9de05"],["/categories/随笔/洛谷API/index.html","780025f36083d317f32e7f951b47b5f2"],["/css/font.css","3886260fd56fa489b3c6f8c50e721707"],["/css/index.css","5016d25f25d8d6f365d876ef61c554b1"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friend-links/index.html","9a171a005b3be2ab9dba2ee6d5625691"],["/friend-links/rules/index.html","0077cfe4cc88015df9f860ecc1c6874b"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","326bcbae2e21007fa73b906975a1c3d0"],["/img/avatar.jpg","423657a8e34d2c034ba19a1ae2238f3a"],["/img/banner.png","54c016144996414b0250c39ec496a3f3"],["/img/blocked.png","d2a8991190c8fb3570d0763522b6cb3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","bdad5f33f46c332ef482a967d9039a31"],["/img/link-lost.jpg","7cf7bb1235bb747361a289b26668e38c"],["/img/loading.gif","8fc901ea9e3826ed6d1ecc1acbb929d4"],["/img/qiniu-actfree-wide.jpg","20f78080707100910a852c88983ab44b"],["/img/qiniu-cdn-wide.jpg","c2da2893971a233dffc72cbda3a24cae"],["/img/qiniu-server-wide.jpg","259b0df49e3328f7a8dffeb71f965acf"],["/img/qiniu-storage-aside.jpg","acb47f7421adee911655680a243f2908"],["/img/qqwallet.png","2b89bfcd01401aae0c60a581131995c3"],["/img/undefined.jpg","fb2ee0a0d15fbae961867ae300a34fb5"],["/img/wechatpay.png","5696cae32dc19c7aea08d23098572a44"],["/index.html","9f3166b77ab9b80c5cd91474bc417c44"],["/js/link-checker.js","2c6474fce00835b35f30c4798689466a"],["/js/main.js","396291332560459bcc82dcba71b971d8"],["/js/search/algolia.js","df1ac71726c61743d55c86bdd1e74a03"],["/js/search/local-search.js","06b6cdc4efe57a53987d1effde8431a4"],["/js/serverlist-loader.js","7ffed140c22e167d4d3fe666666af27c"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/tw_cn.js","4c05755c2f8e23cb674c983981a9e104"],["/js/utils.js","64062a7dac10b70165ab319a5a09069c"],["/js/welcome.js","d96971cc869b0cd7ea3bfd88d63a2e67"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","23a331b4d7d01b3801458936758c0544"],["/live2dw/lib/L2Dwidget.min.js","9c404caa7f39c5de48956564a1f99128"],["/message-board/index.html","aa555cca0af0455f3c5117847aa2b1ed"],["/page/2/index.html","4d6ea61e4c5967f4fd833187fef477ca"],["/page/3/index.html","c19a786124ac6b7d2748f4b142c13494"],["/server-list/index.html","d825475437d6f37dfd63d8ee5a48177c"],["/service-worker.js","44990b8e3352b1eb1b65a03491b12772"],["/sw-register.js","c3be942f1421774952971f7ea0718828"],["/tags/API/index.html","a841dcacb41a2b108893c08db8d896e6"],["/tags/Blog/index.html","5397064cc0938c0c950df4659031b338"],["/tags/Butterfly/index.html","2228c6e7cc23608fd76c451dca7319ac"],["/tags/C/index.html","57b1039392358605a1f8ff026739a705"],["/tags/CCF/index.html","d0748ab75ff8845e6a519084a1fa7579"],["/tags/CSP/index.html","e7100dd8ed36d995d5f4a6c72109374e"],["/tags/Cloudflare/index.html","b3b8f19dd4d5058c7669542e8dbb1ce2"],["/tags/Firebase/index.html","bf67ab379f13e1a61e4e2f2f6280c189"],["/tags/GFW/index.html","c33f6e372a252a4f45c70793d365c40f"],["/tags/Git/index.html","3ba1efe32019dcdc5e2944148c2c1e45"],["/tags/HDU/index.html","25f38aca03bcafc84832b7a807de45d0"],["/tags/Hexo/index.html","918e4f620f2bd428e3f5642bbd5c244f"],["/tags/JQuery/index.html","a9d8ccdca9a0949fbfbda32d64313173"],["/tags/JavaScript/index.html","bdec7181aa180f1f682232429d88ec5c"],["/tags/LaTeX/index.html","5354f601ef0df593e259583bc05bc3b1"],["/tags/Microsoft/index.html","0817081a6ebab8f995442970ed477aa3"],["/tags/NOIP/index.html","e77eece509090fa695617ca33abe062d"],["/tags/Node-js/index.html","7b09dfe7a90e34faaa5a848e00d4ffb0"],["/tags/OI/index.html","e6ab0a6a0936eeeb4145221422cf8abb"],["/tags/Office/index.html","d464a340985e2daba167bf910f8fcd25"],["/tags/Proxy/index.html","2be15aecfccdec24e8cc03715573ff21"],["/tags/Python/index.html","3215c8dd9f6873e3817c82e316802575"],["/tags/Sweetalert/index.html","79b024a4d64c73c1091ee4bbc4253f78"],["/tags/USACO/index.html","a625e74c3751a6038b9a06be661d8761"],["/tags/VS-Code/index.html","c16cc3a94230c09e9edb752163af1653"],["/tags/index.html","1ffdef7ee4ab6d8a44d14522e82f3c90"],["/tags/jsDelivr/index.html","1da0df7c859e51033e0b661be4920e51"],["/tags/主板/index.html","f2334c56705b8a0c6d352facf0387436"],["/tags/主题/index.html","6e3f32fadaed8fe71eca2ff13931ffcf"],["/tags/免费/index.html","67189ad13b0d6040ef4abe653c97a8c5"],["/tags/反向代理/index.html","fe11be19690818a289dd0cb0091227a0"],["/tags/奇淫技巧/index.html","9fe240c7fd055c5a3757331288010cd0"],["/tags/小报/index.html","e80d4ab4badef92805633708b35616ba"],["/tags/扩展/index.html","f8addc20aba43844f95f5d5b261559d0"],["/tags/技嘉/index.html","ee5ecbd1dbdfaad4100d28c3f8bedb05"],["/tags/来源未知/index.html","9e89b0c34879035916b11de33431c60b"],["/tags/洛谷/index.html","f0671f875722a37d8d84d95fceee19a5"],["/tags/游记/index.html","bec22f7515cbde167b37d4fe999c1fc6"],["/tags/白嫖/index.html","3cd8727e0bb5b143a8f03b90d5a3724e"],["/tags/维修/index.html","8f9a75eccd550e04601b0a15b23811ec"],["/tags/美化/index.html","0695bb690f9a2aabfb6dbf88bf3af019"],["/tags/部署/index.html","e818bcd27c47c21aaa8361d0b889037e"],["/tags/题解/index.html","d1629e7c3f99fd738e52edf44293f7cf"],["/talking/index.html","a49d17d00003d197c0e7b8ffbe67b9a5"],["/workbox-b5e2a5cf.js","4e6334c68a78cb63709213f64d3a15e8"]];
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









/* eslint-enable */
