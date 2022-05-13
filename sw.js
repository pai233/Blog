/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","e747b72eb3e3d3cd0e2e521d4e0549d2"],["/20210802/luogu-p1601/index.html","58a42b602f926d6fb7c24b2eed08195c"],["/20210803/luogu-p2393/index.html","c1f1c9911b432423427d7d1b6eea20ee"],["/20210815/hexo-clicker/index.html","b434e43220cf62f36dcfc4452701a1ee"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","5cdcbbf7d22f434fc7888b1c64f0d6f3"],["/20210824/git-ignorecase/index.html","dbe02b8bdc43a4fa41e094549fc6c333"],["/20210826/get-csrf-token-of-luogu/index.html","f405978bba6be73ab4fa760c4ce2787d"],["/20210829/server-changing-to-cloudflare-pages/index.html","4cf9b8fadd77a0f1c760499ea52b55bd"],["/20210831/itdog-gfw-api/index.html","ff6c9b73ac4acd254a4af98adc2588d5"],["/20210912/hexo-pop-welcome-window/index.html","ef45a95f7222496efd4965519b840816"],["/20210919/csp2021-travelogue/index.html","198dc338e5ace5c20e75ef61d3d8a99f"],["/20210930/hexo-katex/index.html","42cf35a3838020d60f11f20e2ef7516d"],["/20211010/hdu-1702/index.html","50252ce5c75db3b4a36447d8b5e800a6"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","7a6bc24f01a875aeb31e89abcd36255f"],["/20211011/download-vscode-faster-in-china/index.html","17568354d10bca6d5017b380636696d8"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","7f9826ce779e871bab07f8b01100b8d9"],["/20211013/luogu-p1141/index.html","3f55ef86cc03691413a0214760fa6956"],["/20211014/noip1999pj-t1/index.html","30a0744162c7c4794d298968c0bc6d81"],["/20211114/noip2004pj-t2/index.html","d015d249e677884bcb4f631ecc127efd"],["/20211219/amp-solution-oi/index.html","b9bf3a0de7f133bce28b171287f1cace"],["/20220102/noip2009tg-t4/index.html","0ed1cda575377b24adb574fdbe643a8c"],["/20220109/how-to-use-go-jumper/index.html","98fbb2e870798ff92bb8622040363c7f"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","1dd1a301e2a859ec2c9879b5d6196c99"],["/20220207/change-the-theme-to-butterfly/index.html","41b4d6888c6fe2b783453f188db38695"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","1651cea5cefce82c29b0509dc39899d2"],["/20220209/5-free-static-page-hosting/index.html","d9bcbc71645a0e204776eb9101a50536"],["/20220213/friend-links-exchange-rules/index.html","3f0a21ba5bac8ce8d86f90b764ca4040"],["/20220213/usaco2019dec-silver-moobuzz/index.html","1720a700f086975e3427b04a3216f264"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","5ccb19beab592ecff208582e406ab5d3"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","75c2019c60200c71d5abb5fed9e032ec"],["/20220312/init-your-hexo-blog/index.html","891f680f976e22d97eef8b29f4eadeb5"],["/20220327/some-good-themes-for-hexo/index.html","524337ad6f2d08761a6ab4138e7c6eae"],["/20220409/butterfly-popup-welcome-window/index.html","379147c7fe6d31a06b593f3269e95aee"],["/20220503/butterfly-go-jumper/index.html","018f1fb052c9db6205b739e3319ac2da"],["/20220503/how-to-get-a-microsoft-365-e5-account/index.html","d170c823bf6fac23a59c4ba646b6c12f"],["/404.html","c12ad3af5506ed039618c6e4cb8291c7"],["/about/index.html","1f7d86251f75ce0971f3ec8df4e19cee"],["/archives/2021/07/index.html","9a825ac7f6b155769d11a8f34f012b84"],["/archives/2021/08/index.html","9612b535e5310dd362889f092bfed51b"],["/archives/2021/09/index.html","c1af7bf0dd72f0e6a2f68318f4f55277"],["/archives/2021/10/index.html","148434e6c5dd09793f19ff81751006ab"],["/archives/2021/11/index.html","0d4094ec1e7258d0c88f54638618c779"],["/archives/2021/12/index.html","2f62b611545379cd93a96ef59c513bdc"],["/archives/2021/index.html","d6da7e4b8964df4d7a7ba182008d93a5"],["/archives/2021/page/2/index.html","d7d26626ae228a6caa68bec460220c77"],["/archives/2022/01/index.html","661ea74fb9070b9870271b21d7a0c6bb"],["/archives/2022/02/index.html","06e99494405b9563e0245797a6058f3b"],["/archives/2022/03/index.html","1e6f17ee4ea446ee8bc52addb75d5783"],["/archives/2022/04/index.html","b5eff8d041eb8419bd4f83e2af79afef"],["/archives/2022/05/index.html","80881fef35ac24bf3a7c60187addce0c"],["/archives/2022/index.html","0e7de62acb9b15a85fcb351e9a23be3d"],["/archives/index.html","1d773cdc4c36d74270a5b2c6bc3bcb65"],["/archives/page/2/index.html","09da17d0745c728429d75d7639ec13c0"],["/archives/page/3/index.html","5a93dae546e526863e7ae95bf9af24c0"],["/atom.xml","9578f84a96633f6e19678e491d297100"],["/baidusitemap.xml","d503f302a09e1de1963db8d55daa8371"],["/categories/index.html","30076cc02a6bd95c274d802da5090676"],["/categories/博客美化/CDN/index.html","ee66c7fc5d863fabf96b7b1536ccd754"],["/categories/博客美化/index.html","0172b3309aa9ce6df1c420371e3389b3"],["/categories/博客美化/功能/index.html","66adbd630fba26ac50d73c69aecabf81"],["/categories/博客美化/部署/index.html","552b54ba7e7c11bc2199637f79a6b72b"],["/categories/博客美化/页面/index.html","362bb97ad45de89f4339c8643cb357a4"],["/categories/咕咕小站/index.html","4d7cb304d61925383e1bfef2de7128e6"],["/categories/咕咕小站/博客动态/index.html","07fea5b206288b03c3416094fc622a68"],["/categories/推荐/Web服务/index.html","a4b8b6d4f5ccca08d4ec35fece6eb6c9"],["/categories/推荐/index.html","3ba82eff576639dcb6b9d9005d4d5dbd"],["/categories/推荐/微软/index.html","d7c99c1408ac01d70d57084a2e8a58f6"],["/categories/游记/CSP/index.html","248c31e14faf79786a60848e66355d92"],["/categories/游记/index.html","42c53e2d8e3cb758778b1a079a2a04bb"],["/categories/算法学习/index.html","fcc8b98313dbbc15881b4e0ac7206acc"],["/categories/算法学习/搜索/index.html","5ef467033971ce5692937ae12288e7e5"],["/categories/算法学习/数据结构/index.html","140316251ffb42fa05f548b258f1a413"],["/categories/算法学习/数论/index.html","f6015e60cae53e125cd3503b37c02c47"],["/categories/算法学习/模拟/index.html","84963c3eb4c0a6ddb7b30ced6df26833"],["/categories/算法学习/高精度/index.html","8b7070e023c05399babf656c148d5299"],["/categories/随笔/GFW/index.html","53ac6e9907361c7b7e09f6e333f0795a"],["/categories/随笔/Git/index.html","d700ad0ff85f6c471908bdb3e6670a8a"],["/categories/随笔/Hexo搭建/index.html","ceeb9aa255d0b2e1cdd2bcda90baea26"],["/categories/随笔/VS-Code扩展/index.html","a7f5c2a74aec18409646c946e3b1ec6f"],["/categories/随笔/VS-Code扩展/编辑框/index.html","d6b352a882fec1453545c8c09ff5fae0"],["/categories/随笔/index.html","366cea6653693bdf8a49deb910f1a7de"],["/categories/随笔/反向代理/index.html","4eaf890637b9c29ed5346317c60d8eee"],["/categories/随笔/咕咕小报/index.html","c805b58963e2bf0a85bfbd3f2453c8f5"],["/categories/随笔/奇淫技巧/index.html","3933ca5377f22bc04f0fc15b2c9d92e6"],["/categories/随笔/洛谷API/index.html","2b8ee2df72fc3bf739b0c987eaff5c58"],["/css/font.css","164ea28a53a805dd271f7ce896f7c1e6"],["/css/index.css","14f1779a4bd08e83b0fec1040098d064"],["/css/sweetalert.css","196c08c89f0c8a9b688a16d3435ac327"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Fredoka.woff2","c05ed7a4be6d56badb689cfb1453289a"],["/fonts/UbuntuMono.woff2","8b2a874ab5c9080453c2d558a3c4adb8"],["/friend-links/index.html","0cd5841384dd9a4bd3be4d1feab67036"],["/friend-links/rules/index.html","190e4b55ba76f522dcb2be1d80917a61"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/banner.png","c35d400ce371f8befb35dd55712569ae"],["/img/blocked.png","3cff34a282278f44244a8252ad2cd352"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/link-lost.jpg","12c7bff4c19b1fd457fe91017edad27a"],["/img/loading.gif","22b1adc497ba662040d227519416f32d"],["/img/qiniu-actfree-wide.jpg","30621505ec4a2cd6681a53d767a4a517"],["/img/qiniu-cdn-wide.jpg","c73e74d7d8813ca2ce218a8a04b5cdf4"],["/img/qiniu-server-wide.jpg","9a4b0de9f0573ff7374c70e5c927816c"],["/img/qiniu-storage-aside.jpg","52753956a8be18e9d8f4559f60989f7c"],["/img/qqwallet.png","808ecf886e4e71c02b4728c6bed71090"],["/img/undefined.jpg","9caec22fe36bad53191055b6f40f6908"],["/img/wechatpay.png","d25ade1e4be4aa943932c56e37d708ff"],["/index.html","b6a915713bc5d171c549b4c1ea8e83c8"],["/js/link-checker.js","02991a3e40b6c75a6bcb0df2457d3f13"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/serverlist-loader.js","fe1c7c40db15bd11366c97db4eff5d66"],["/js/sweetalert.js","800cbdcad6a26e06fc9471102d8c50c4"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message-board/index.html","457c4063bc2f96847398df84cbaa479b"],["/page/2/index.html","0b12bb4ec76b58144a715f70744b6bd6"],["/page/3/index.html","c87325ecea58804e669991c4bcf9e0a3"],["/search.xml","e546f5fc9231d3b9a064f086341c45ed"],["/server-list/index.html","b741469ac1f5d8fe4a36c7b9488658d5"],["/service-worker.js","3bd452a97e372413134071fc943343d2"],["/sitemap.xml","e8048c65a7fa0f2cd65d5cb028bc7a24"],["/sw-register.js","6ffc9a9973ecd2afe550793cc2ef77a5"],["/tags/API/index.html","c475fff8fb19fc9b8f7471e534890c15"],["/tags/Blog/index.html","6984e880abc9dd14ae6fc26837953cd9"],["/tags/Butterfly/index.html","9e2c521a2a0ac9ef7fb07a157ce5a18c"],["/tags/C/index.html","eb65f087b64a6beef23dd476c8df1e6d"],["/tags/CCF/index.html","f6254366ca1f14d40b5086606898bb9b"],["/tags/CSP/index.html","b936d6e2069fe44c429dfb187c66dbe2"],["/tags/Cloudflare/index.html","6b2666f756c0e0c45aa5c348cd098071"],["/tags/Firebase/index.html","6fbfc559e0bb8ace70ba2fd8dc572420"],["/tags/GFW/index.html","337bdc9883c5f2ab5fd2e9f2b0056133"],["/tags/Git/index.html","cd197db43dd779c254ff65db9179581c"],["/tags/HDU/index.html","9b35444987c649b889a8f27ceac44f04"],["/tags/Hexo/index.html","26ec0c38c5d4d458035b1df6e7b62b84"],["/tags/JQuery/index.html","fd5a1ba24ea119b271fcda8d2eb3544a"],["/tags/JavaScript/index.html","2e5296eaa7f41ab4bb4242ea235ea28a"],["/tags/LaTeX/index.html","5c91b988dd150be5098d0721e60cb7d0"],["/tags/Microsoft/index.html","deedd5aa9a3b983e46aa399b89e9c770"],["/tags/NOIP/index.html","12303aaa73fabc6a3c3a27c9f45351f4"],["/tags/Node-js/index.html","170c24d8dabc73e89ffd9f6a66bf76ee"],["/tags/OI/index.html","6b4792ae7df1e689c39d4d7fefe097db"],["/tags/Office/index.html","43f213dc5cdb8e28f9a9ff76c5eea87a"],["/tags/Proxy/index.html","340936eddb9b1b1e201a73b48a04f238"],["/tags/Python/index.html","62124c3719fad337f9c56d949175d263"],["/tags/Sweetalert/index.html","a47e4300a17f960878da1a16f49f6a8b"],["/tags/USACO/index.html","7c6f249e6482f033ade5fc78a56c2447"],["/tags/VS-Code/index.html","361db7229225a3c0b044b07414f2ba9e"],["/tags/index.html","658d50e1650194777b31e064f8ca4bfd"],["/tags/jsDelivr/index.html","aabbf78de1984df1b8d97622a1a81242"],["/tags/主板/index.html","0da91526b7cb64c80b3c5163f515d3c8"],["/tags/主题/index.html","d45ca3f374d4cbce795dcf65bef3f4ea"],["/tags/免费/index.html","dfa42e3e2dca5e8cb727e55f5275110a"],["/tags/反向代理/index.html","d80a875434d2303317f629c17d9897dc"],["/tags/奇淫技巧/index.html","8d6e5f0a51c16943edb804ed37d96146"],["/tags/小报/index.html","723a5d1a042c6c6808f03f6ade5c5900"],["/tags/扩展/index.html","16fc3f53a381d714f8d079f631e222c3"],["/tags/技嘉/index.html","446a19da8ff724886938de8faff28a8c"],["/tags/来源未知/index.html","3be5230f3c9f443dd456e3c667171c01"],["/tags/洛谷/index.html","4f0339297395a92026b186db0bc5a452"],["/tags/游记/index.html","d26f39f1dfc8f53854e87e239fb6702a"],["/tags/白嫖/index.html","2d3659e9955452391de15d219215b36d"],["/tags/维修/index.html","9c6cd73c05b43dce2c24af42563e0f66"],["/tags/美化/index.html","6a00acb484c2d2ec3b644bef156b52d3"],["/tags/部署/index.html","3565f96ab3378e713f57db76074b30d5"],["/tags/题解/index.html","c4ec4990dfcacfd59af353e1151ff5d6"],["/talking/index.html","1728896e82b546c2deccddde3e4b767b"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
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
