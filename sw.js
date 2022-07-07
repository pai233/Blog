/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","619cfd274f9717919ebad324d374d210"],["/20210802/luogu-p1601/index.html","d54ba61b0ff8d89e2348bf88a97f064f"],["/20210803/luogu-p2393/index.html","b4d3e11aa726854528ab40489e3afdbb"],["/20210815/hexo-clicker/index.html","86b806c93d9dd177724bac03b5ced970"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","03eb2ddf8c31d7fc672f7de61c0d99a0"],["/20210824/git-ignorecase/index.html","77d340fdcb850ed74dad80fab441c280"],["/20210826/get-csrf-token-of-luogu/index.html","d8d2bcb99f42a271e61596298b92da00"],["/20210829/server-changing-to-cloudflare-pages/index.html","8c61c3f340be4123ae63ae56c7d821b1"],["/20210831/itdog-gfw-api/index.html","f5809cb955b7de0fcfbec47bc54677f6"],["/20210912/hexo-pop-welcome-window/index.html","1aa5f6efc66ffe354ef28ea3f82a8ba2"],["/20210919/csp2021-travelogue/index.html","8d6771802162c6eee6f9bfe8cd6bf5f2"],["/20210930/hexo-katex/index.html","37627d10b146ccfced9c069aceeb431c"],["/20211010/hdu-1702/index.html","b38718b1ee1564ec5698186c6152f448"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","74ff57d83269b84ef05712677510b874"],["/20211011/download-vscode-faster-in-china/index.html","f078aa32c2bf0ea9cff4a48ac8940538"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","9ff42553ad04066d4cf60ae872f5e057"],["/20211013/luogu-p1141/index.html","dfafd2ea2d1f6d48dc48e767e269b66e"],["/20211014/noip1999pj-t1/index.html","b97bcbfb79ab921ddc9a2a001a9e6b8c"],["/20211114/noip2004pj-t2/index.html","4cca67385fc7191b6dc7ddba162578b1"],["/20211219/amp-solution-oi/index.html","0d2b791b5cd4d9402d03eb18a23fb5eb"],["/20220102/noip2009tg-t4/index.html","496ff5204ab5bbc702fafe0938b2c648"],["/20220109/how-to-use-go-jumper/index.html","3d34dad232a2a822ff7466fdb00166a6"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","4a9b2bbd3303756aadf3cb1a442f0dfb"],["/20220207/change-the-theme-to-butterfly/index.html","fdc603ba6fdac7555b402ef8aeed7d19"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","77421346145f7c55d0eb40ea21d96304"],["/20220209/5-free-static-page-hosting/index.html","6001fd9a3bc40993ae28fc9b8826d9fa"],["/20220213/friend-links-exchange-rules/index.html","92a858507dc58025576797860d4b9676"],["/20220213/usaco2019dec-silver-moobuzz/index.html","6706349b64a1df32f329edc9e176603f"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","3789d1d595b548a0b016e8f4d6706a1a"],["/20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html","febab27d3821697f86bd3f6d05369f5f"],["/20220312/init-your-hexo-blog/index.html","a32e2cc9fee6f67c90a6ad07abca5374"],["/20220327/some-good-themes-for-hexo/index.html","901f205ffef925e0b349f6dae017b02d"],["/20220409/butterfly-popup-welcome-window/index.html","84edc1f498f5ea5cae0359cb6f1c7f16"],["/20220503/butterfly-go-jumper/index.html","2ffdc82f1b7e1cdbb2253fb949c7626c"],["/20220503/how-to-get-a-microsoft-365-e5-account/index.html","7dd805e8263b2ca8959b0a15cfce2f2b"],["/20220707/noip2008tg-t1/index.html","2d6361d4cd7f46b1c788f2f9da713f26"],["/404.html","8f857c96145b20474dd9871b7ca8f42d"],["/about/index.html","32b432c2d43946a7bce97066319c8748"],["/archives/2021/07/index.html","3645861fbee5ffeee5c3f473af4723d6"],["/archives/2021/08/index.html","2aa30ec78b759fa5818fec72cf37ac57"],["/archives/2021/09/index.html","8dec44aa3145d0e3fcc18760cbacf0b0"],["/archives/2021/10/index.html","a8db7022c24f25733e3037f85570ae77"],["/archives/2021/11/index.html","6f1823870ee872702e409a722b960e3c"],["/archives/2021/12/index.html","73b29ec8c9fa68d6a8ada0edfef971cb"],["/archives/2021/index.html","15c5919ee5dd659bb4960966efbc10db"],["/archives/2021/page/2/index.html","595f4f5767fc66bdcfcd9b01259266b9"],["/archives/2022/01/index.html","c730705add2ed4aab7f4afd57501f056"],["/archives/2022/02/index.html","07542a541c16cb10b3c52a191c3996e8"],["/archives/2022/03/index.html","ea5a7e002f5edfe6973bfb6aea77cc6f"],["/archives/2022/04/index.html","8efdf498fa9dfe153af26b0f12281187"],["/archives/2022/05/index.html","6eb35db1b71a191dc80d0882e5ad22f2"],["/archives/2022/07/index.html","837e73d2fbd023a47131dd14ce8c0036"],["/archives/2022/index.html","c176617868f77844fbeec818fad69813"],["/archives/2022/page/2/index.html","5f814ed6875dafc23a9e0af1839cca3e"],["/archives/index.html","f59e34052088c56a78802c4e7d369b11"],["/archives/page/2/index.html","5e91eeebb05791f2a835cbd017b9c74f"],["/archives/page/3/index.html","6733f71f883aa6efe981f4d1f4cda1a8"],["/atom.xml","45975df8c69f6869e0dcffdf6a8153d1"],["/baidusitemap.xml","78c2004317a5cdc7dfd0c7e9b5540fd2"],["/categories/index.html","60b14662ed06374268c982b3ba6c7a5d"],["/categories/博客美化/CDN/index.html","a978a6f86e573ffebe7a673e3e69508d"],["/categories/博客美化/index.html","4f0a0dc9c97e4177bce2d6c3e89bc713"],["/categories/博客美化/功能/index.html","7ad298a447b0b76382d2c3803b9306a0"],["/categories/博客美化/部署/index.html","588740c87974b44af176f889c01341e3"],["/categories/博客美化/页面/index.html","00af94984f3ed7ba5b279fc34e61f749"],["/categories/咕咕小站/index.html","217d0b25f68c3e6d8862830bd9533033"],["/categories/咕咕小站/博客动态/index.html","f2a2e0e2aee03dde2a8e0a0e714834d6"],["/categories/推荐/Web服务/index.html","244c077cf8076a29f5abd089f36e9a3c"],["/categories/推荐/index.html","580c206b544e6d2f93162c0a15d01b2b"],["/categories/推荐/微软/index.html","6fe5f6426aa1dd43f6331c0b186c64c6"],["/categories/游记/CSP/index.html","a39dd3fdb1ffeaeb5cb1aab7b0764402"],["/categories/游记/index.html","8ebc01172b1ffab14a8e369fac4be18c"],["/categories/算法学习/index.html","56d04c8af7806eff3836a14d293b6983"],["/categories/算法学习/搜索/index.html","b1382eb3e3104935935241b968c19578"],["/categories/算法学习/数据结构/index.html","4298728af46aef35fe66fc6f418df355"],["/categories/算法学习/数论/index.html","4bdac63d75549adcbaff2adf3d8aabd2"],["/categories/算法学习/模拟/index.html","1b8584a62c4cf13b34f1046656ca6a1d"],["/categories/算法学习/高精度/index.html","24ee632067166cf1e495b8d061e590d7"],["/categories/随笔/GFW/index.html","01c2266d6b1d781f547451d2a49bad8d"],["/categories/随笔/Git/index.html","739fb19be4f42ba99d3b5301c6d7c5a2"],["/categories/随笔/Hexo搭建/index.html","6916e338363221e1c13a0003a9a14a77"],["/categories/随笔/VS-Code扩展/index.html","2e6a965967b575f081803230c90d4bd9"],["/categories/随笔/VS-Code扩展/编辑框/index.html","c6045a6c377b47fd77d6104b2a3839c8"],["/categories/随笔/index.html","0a1afdfef13044e3a9a6824707ea4564"],["/categories/随笔/反向代理/index.html","8e67ba1e6fa5d783bdbdddd128ba3503"],["/categories/随笔/咕咕小报/index.html","ade700489f89a86d5067c7da4cfe5b4f"],["/categories/随笔/奇淫技巧/index.html","a8bdb98276f1754702b99c918ab09aee"],["/categories/随笔/洛谷API/index.html","afaad0d93a4095b360853388af182007"],["/css/font.css","3886260fd56fa489b3c6f8c50e721707"],["/css/index.css","751dabdbf4d6073220c3fb8e13bcc120"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Fredoka.woff2","c05ed7a4be6d56badb689cfb1453289a"],["/fonts/UbuntuMono.woff2","8b2a874ab5c9080453c2d558a3c4adb8"],["/friend-links/index.html","ab63f22136bc34878ca460b1ba4c6254"],["/friend-links/rules/index.html","76230aef94d850ec7f31766b02b1f793"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","326bcbae2e21007fa73b906975a1c3d0"],["/img/avatar.jpg","423657a8e34d2c034ba19a1ae2238f3a"],["/img/banner.png","54c016144996414b0250c39ec496a3f3"],["/img/blocked.png","d2a8991190c8fb3570d0763522b6cb3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","bdad5f33f46c332ef482a967d9039a31"],["/img/link-lost.jpg","7cf7bb1235bb747361a289b26668e38c"],["/img/loading.gif","8fc901ea9e3826ed6d1ecc1acbb929d4"],["/img/qiniu-actfree-wide.jpg","20f78080707100910a852c88983ab44b"],["/img/qiniu-cdn-wide.jpg","c2da2893971a233dffc72cbda3a24cae"],["/img/qiniu-server-wide.jpg","259b0df49e3328f7a8dffeb71f965acf"],["/img/qiniu-storage-aside.jpg","acb47f7421adee911655680a243f2908"],["/img/qqwallet.png","2b89bfcd01401aae0c60a581131995c3"],["/img/undefined.jpg","fb2ee0a0d15fbae961867ae300a34fb5"],["/img/wechatpay.png","5696cae32dc19c7aea08d23098572a44"],["/index.html","e0df6eb33cdc06e160b9fdd6486b4ff1"],["/js/link-checker.js","2c6474fce00835b35f30c4798689466a"],["/js/main.js","396291332560459bcc82dcba71b971d8"],["/js/search/algolia.js","df1ac71726c61743d55c86bdd1e74a03"],["/js/search/local-search.js","06b6cdc4efe57a53987d1effde8431a4"],["/js/serverlist-loader.js","7ffed140c22e167d4d3fe666666af27c"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/tw_cn.js","4c05755c2f8e23cb674c983981a9e104"],["/js/utils.js","64062a7dac10b70165ab319a5a09069c"],["/js/welcome.js","d96971cc869b0cd7ea3bfd88d63a2e67"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7a66afd2cd6825550f6faac92b3cc1dc"],["/live2dw/lib/L2Dwidget.min.js","d4ccc01e11fab003bc722ca5bc41ef9c"],["/message-board/index.html","a3c61ae892bb86269491fc0885ec7b21"],["/page/2/index.html","4f87593404020d8d3b11347ebd807db1"],["/page/3/index.html","b51f38e7168b0cd9179b7dd065c5f3db"],["/search.xml","25f74ffad94fafbeee3163ea220571aa"],["/server-list/index.html","32620126a22208157a6322c7983f5204"],["/service-worker.js","dc1920fe39cce1d32aa795bb1eb9f46b"],["/sitemap.xml","312338174a302348f6c005d452278dae"],["/sw-register.js","2c0bc796ee132bb57de8aa34e9be2ec4"],["/tags/API/index.html","477a213c2bc48e885ae675fe6e4d4961"],["/tags/Blog/index.html","202d0e48bc9b0769ee421d51def36627"],["/tags/Butterfly/index.html","5ccf061f158b75a91239acd55ec5f60b"],["/tags/C/index.html","8f1a2ba67dce0ca089dfcf0dff29c23f"],["/tags/CCF/index.html","2b845802c8608b4d06b1185a5b1cfc09"],["/tags/CSP/index.html","81340459be9aab239c7d339487b0a846"],["/tags/Cloudflare/index.html","340276ec95933702c8bdc3e205cd716a"],["/tags/Firebase/index.html","8c23b74ebf7b3c750aa1b99d32fd3bd5"],["/tags/GFW/index.html","c00a7b7ffc3e99bb6a906bc5aa1b33f7"],["/tags/Git/index.html","b1dc2ce058c46f9e2f19087a42cc2b22"],["/tags/HDU/index.html","0570d4da2e058c870374efb547ce7380"],["/tags/Hexo/index.html","5012e50333aca175b6ca7e306e1e772b"],["/tags/JQuery/index.html","bcbccd9640dd11be254c0b2fdd1482a4"],["/tags/JavaScript/index.html","6bf84a1ab56790d536ab9aa4958fba82"],["/tags/LaTeX/index.html","3d849618a67e2e08b3c4c36455f5d5ab"],["/tags/Microsoft/index.html","9442764d203a40d250cc8aa3d8d6de6d"],["/tags/NOIP/index.html","f30d521514ad3c7fcf4b845d4fede0ef"],["/tags/Node-js/index.html","9833aee30aba8360ebca94b1d4ead1d5"],["/tags/OI/index.html","dfa715b8a0ded314adddcca5b75f3bc2"],["/tags/Office/index.html","e5590ecbf70322509b4477e56ca8932a"],["/tags/Proxy/index.html","18aa8539f73a317af19705410d64635b"],["/tags/Python/index.html","023fad29d20c294da16e07df041429e7"],["/tags/Sweetalert/index.html","cc5c24cb4580be13450b61977556419e"],["/tags/USACO/index.html","91e72b0d12273df2008f05fefc86e8f0"],["/tags/VS-Code/index.html","024d258fed223573d62f770b70df5753"],["/tags/index.html","8b90d78d277f9f0d65661713ffa84da9"],["/tags/jsDelivr/index.html","994b3dda66c78fdb2204d399382ffd2a"],["/tags/主板/index.html","5e8c798fdf1b25800732c082debf3208"],["/tags/主题/index.html","481eb3a9e5b008cd6d5673cfa6b8286a"],["/tags/免费/index.html","abdd9ac47544886c8c28e497ae2ac657"],["/tags/反向代理/index.html","8a8d326607b38d26326aa7787d13a662"],["/tags/奇淫技巧/index.html","a96ed6b973dc54465477e2573e162492"],["/tags/小报/index.html","253283a645689b6bb7c7682b9baaf9ca"],["/tags/扩展/index.html","26d62f83f08067e571c798eebf9abe90"],["/tags/技嘉/index.html","3c20fb317c1398909b0d19d88053e815"],["/tags/来源未知/index.html","beb9a956d345b82fe7de781214e2c3dd"],["/tags/洛谷/index.html","45ee43e7b7335ec102df1291caf2eba9"],["/tags/游记/index.html","30275ac75216ee31a46a534a5e279c55"],["/tags/白嫖/index.html","dd4b0eccc0107ee620afc188086c6e6c"],["/tags/维修/index.html","b2a8ec03bf6a78b9e5adefd8b4e7572f"],["/tags/美化/index.html","9eb553a755deea78008ac36aaebd8b0b"],["/tags/部署/index.html","b8d7af0b2b4403264617eae19dab8778"],["/tags/题解/index.html","05d0fb656a76e466604b9cd424d69e76"],["/talking/index.html","de684aaad8607c6cd9e7419ee9c8ee88"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
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
