/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/20210728/pai233の小窝正式建站/index.html","05d772626c7f0777d07348a864e07b16"],["/20210802/luogu-p1601/index.html","ed1adc1984612eea47100c29a0ab00cc"],["/20210803/luogu-p2393/index.html","784d674d6d295aadcf1baeffb537cfa7"],["/20210815/hexo-clicker/index.html","7eea11dcfe3dfc3b69d453c745aef356"],["/20210820/get-text-from-the-editor-for-vs-code-extension/index.html","4e2f492f00149e7c882f0b74c1a06960"],["/20210824/git-ignorecase/index.html","5e22add3dd0993001da6d6f7a87f47b7"],["/20210826/get-csrf-token-of-luogu/index.html","1651de1b6fc855c42b759286b0cb8cc6"],["/20210829/server-changing-to-cloudflare-pages/index.html","1dd0f5a5dc7e2931b964b19412f77e84"],["/20210831/itdog-gfw-api/index.html","193974ce6437f431ff8556cd7a147d06"],["/20210912/hexo-pop-welcome-window/index.html","090bc39aeba3c009aadc322723b64a91"],["/20210919/csp2021-travelogue/index.html","ff3026bedd55ef5a20426af4007ace61"],["/20210930/hexo-katex/index.html","18a13ff0376c9263007b5b50bb4020c7"],["/20211010/hdu-1702/index.html","b83a0b4b0c38e8713e90260f6aba3cb1"],["/20211010/usaco2019feb-bronze-measuring-traffic/index.html","410d667f0d5425c4b295a18981cc6960"],["/20211011/download-vscode-faster-in-china/index.html","998a685e10d8f2b15bf3be92608fdf51"],["/20211012/cspsj-noi-cn-has-some-bugs/index.html","5bf7fb92d6423144fc004c94a6c40c4e"],["/20211013/luogu-p1141/index.html","630054124dad697a6418345dfc9bb256"],["/20211014/noip1999pj-t1/index.html","c3581e7d59b37deb060ea0c60e90e021"],["/20211114/noip2004pj-t2/index.html","1155790aa972a6a6d59c164d9256ec68"],["/20211219/amp-solution-oi/index.html","a2e36f704d37733531b767adfd68aca3"],["/20220102/noip2009tg-t4/index.html","e95c579fed86cf92f64cbe3b6543895f"],["/20220109/how-to-use-go-jumper/index.html","f9d32ddcec7ecd5c92c52f4b2b0e071c"],["/20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html","e46230e633897a3d5b73ffa184f4a532"],["/20220207/change-the-theme-to-butterfly/index.html","94e6a37d59e342ca6b65f40c7facdf85"],["/20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html","f8d69037ed6e7e09879714021693f398"],["/20220209/5-free-static-page-hosting/index.html","4e7d386cbe552d3264dbb673854b25a0"],["/20220213/friend-links-exchange-rules/index.html","fe1008404048289d7e6ab22a59269738"],["/20220213/usaco2019dec-silver-moobuzz/index.html","0d0452c26403ed6f79a193523c3d0464"],["/20220219/use-jsdelivr-by-cloudflare-worker/index.html","fb2d8c7fbbfc9c84264008b31be28fec"],["/404.html","447215407b254990d01d5044f459c570"],["/about/index.html","3f0ecce8cbca9839edb30eca44d7c802"],["/archives/2021/07/index.html","324c23a039095b74438c00765eb0010b"],["/archives/2021/08/index.html","f92a5649e6d2017bd8487afb9710da0c"],["/archives/2021/09/index.html","cd396ac32ad87914e51df22d617c0557"],["/archives/2021/10/index.html","5dbf0213242af312312c78b5c59bc23a"],["/archives/2021/11/index.html","50979b23a0e35e792de9f1fadceb7c4e"],["/archives/2021/12/index.html","e922e59fc67cfc632bc70955808ebd47"],["/archives/2021/index.html","71ee35353801ac18a7f25407fa3ce20d"],["/archives/2021/page/2/index.html","ab79f4ae2569f5d435754b97c6ce7067"],["/archives/2022/01/index.html","7ee9465335019883b539d2ed8281ad83"],["/archives/2022/02/index.html","5a9c6e95cb4a18c9222f1b95ef9fd82a"],["/archives/2022/index.html","f7936cb4058b8105faa4413c79ad0bc8"],["/archives/index.html","549fc525631c7a52db00342f2a6cdbf6"],["/archives/page/2/index.html","112e50513df09252678e411e7bf61f13"],["/atom.xml","9e18e2d396ffc4d6fa1c4d32cdef7b8c"],["/baidusitemap.xml","95a1d51454bfa6ea23089ce5a893002b"],["/categories/index.html","546dab4bd020532e38680ccf0db32f8c"],["/categories/博客美化/index.html","3720efd436c1f731765bd5e5c0294a94"],["/categories/博客美化/功能/index.html","e6c329d84bc7752d0f7718dfc26475cd"],["/categories/博客美化/部署/index.html","c8331bfa025ffaae64d002c31ac1d086"],["/categories/博客美化/页面/index.html","e698744f6d69819894108ec44c182a4d"],["/categories/咕咕小站/index.html","a2d6fbff993c41e81d887d0bbbba3434"],["/categories/咕咕小站/博客动态/index.html","2c4c76ba2a3812c5e32afb46f5cffb5e"],["/categories/推荐/Web服务/index.html","693642b39562cb67765c9865df2119ea"],["/categories/推荐/index.html","e2b5ed332b387124e591c6fab34fe604"],["/categories/游记/CSP/index.html","398b4089e49b9a49b8f3d55b1aa1135b"],["/categories/游记/index.html","6851d6925c631b4011022d202dea5f13"],["/categories/算法学习/index.html","ce25a2e96d3d338908416e40fd6a022f"],["/categories/算法学习/搜索/index.html","98168dfdf309066b07d394e908734382"],["/categories/算法学习/数据结构/index.html","1c9dcb4a2553f13c78f80165994589bc"],["/categories/算法学习/数论/index.html","7f71ee1c2cd8e2bf31a60323fc58eb33"],["/categories/算法学习/模拟/index.html","43e42cd6d9b288fe42d7ca595383fcc4"],["/categories/算法学习/高精度/index.html","d150780ed8086bf8b705d975b00accf4"],["/categories/随笔/GFW/index.html","3c634e46a9935fdedaaa219f1683714e"],["/categories/随笔/Git/index.html","2d4d45f5787ca14222ac50c26bdc6d29"],["/categories/随笔/VS-Code扩展/index.html","dec6ff300185d4bdc18acfe6be3abe28"],["/categories/随笔/VS-Code扩展/编辑框/index.html","b6c7b0d46f71463e994b4f90fa8ff217"],["/categories/随笔/index.html","8500eec4e2f7636976d556e6dfb3bfd4"],["/categories/随笔/反向代理/index.html","1dc7caf3b40d7d130eba917863715d6f"],["/categories/随笔/咕咕小报/index.html","9a7277c0df137fefbf771dd7b995cde9"],["/categories/随笔/奇淫技巧/index.html","860c09e4d5b108b6537b2726065ec5e5"],["/categories/随笔/洛谷API/index.html","ea5c7587537e6be868e1dd84cdfdb7ae"],["/css/index.css","3a5487edb67fa0f80c51dcacc0d23c82"],["/css/sweetalert.css","196c08c89f0c8a9b688a16d3435ac327"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friend-links/index.html","925fffc91b92229fa7231efad8481eff"],["/friend-links/rules/index.html","125f8cfc115923b88c878893f6b7f2ac"],["/icon-192x192.png","68f4ff9bcbfd75719b63fefafe18ec68"],["/icon-256x256.png","d90464a3be0f8c15c78f39824ec4ee6b"],["/icon-384x384.png","e678a7a06abac5fdf4145fc64838d8d8"],["/icon-512x512.png","dfccfbdc8816f819582bca036c6f7fc7"],["/images/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","3d4a1088cda5159f45f6d770d85e5e1f"],["/img/banner.png","c35d400ce371f8befb35dd55712569ae"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","22b1adc497ba662040d227519416f32d"],["/img/qqwallet.png","808ecf886e4e71c02b4728c6bed71090"],["/img/wechatpay.png","d25ade1e4be4aa943932c56e37d708ff"],["/index.html","b7d405f94e9ae49ddaf75daffb7ad840"],["/js/link-checker.js","02991a3e40b6c75a6bcb0df2457d3f13"],["/js/main.js","67ef93b7026979d99da673cfd9fd85de"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","1685cd43da0de7abd4a649dd5b2d81db"],["/js/serverlist-loader.js","fe1c7c40db15bd11366c97db4eff5d66"],["/js/sweetalert.js","800cbdcad6a26e06fc9471102d8c50c4"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","9f465e7dd29ec62dbc6af321882c2b59"],["/js/welcome.js","030f89f850aa940182ef72003d72a95e"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/message-board/index.html","94f292dc4404287dd44b525e8f0e901d"],["/page/2/index.html","ce2114541cd8c81f56e31085eb38d240"],["/search.xml","5c2676ac7be158d046db064efcbd5763"],["/server-list/index.html","91457776b5d095ef396de14e0eeb81b2"],["/service-worker.js","8160d6e0ea2711b7d1c4b41b39cf6304"],["/sitemap.xml","967571700c7abf117ce9c5bb79a6fda8"],["/sw-register.js","24d9383d0028019ff3513e94cdcd738a"],["/tags/API/index.html","ae8caf3f01de5922995ee5b18f690f58"],["/tags/Blog/index.html","b2e27a75de9c8c43c0e675f4f5be9c1b"],["/tags/C/index.html","d090f8ba74f36a6e5455b1801ce2764f"],["/tags/CCF/index.html","94c21e75956e78e30757bf1da00d368f"],["/tags/CSP/index.html","64bafa4fddcd4ba39b716b07bf620e5b"],["/tags/Cloudflare/index.html","685cc6d57285591ee4aec4c3571b76ac"],["/tags/Firebase/index.html","33466155510d95c314532cab8046a32f"],["/tags/GFW/index.html","4721c8d9266026daeedd1452dc04bd65"],["/tags/Git/index.html","db5d9a4b65025d458efe31bf6ee930b7"],["/tags/HDU/index.html","a8eafc7570c4d476ddd920668fbf2d83"],["/tags/Hexo/index.html","ba2e1e4bacfb6f6bff03500dd6094f19"],["/tags/JQuery/index.html","f9e64ebfdfcb062e1e7fbab96c4b2af0"],["/tags/JavaScript/index.html","4fdb3d6ad905182301343b66b6a9c5f4"],["/tags/LaTeX/index.html","8cd83390b669689fbe3081b9d86f54a4"],["/tags/NOIP/index.html","5fd0ea49ba79bca44e8557f09729553c"],["/tags/Node-js/index.html","5a2f82fa73329ce5a7aa0367f87b0ed0"],["/tags/OI/index.html","f22eb6b41796b8666690813e8c47050d"],["/tags/Proxy/index.html","da30b89d0a7dc925cb2a3a82ac42c94a"],["/tags/Python/index.html","67dfa980d9eebf450f5a8fca2d3c1f81"],["/tags/Sweetalert/index.html","df5fe966a5a54fdf999251e667f7f87c"],["/tags/USACO/index.html","7c90f7d8943720a3387529ab3839857e"],["/tags/VS-Code/index.html","cedbe7bd413ef235b48a0fed7b454c50"],["/tags/index.html","74915d35bb7ddd004ac0241c7a901169"],["/tags/jsDelivr/index.html","86729803e16180615b0392a8e194de0c"],["/tags/主板/index.html","407735204f8e0f579a8f354a458c570e"],["/tags/免费/index.html","bd71bd1c26e081f929f201ca9e25ef9c"],["/tags/反向代理/index.html","453a2f7168060d276e4159d329c4a302"],["/tags/奇淫技巧/index.html","b64fd47dc8d64f0d6f8e02148dcb6dd6"],["/tags/小报/index.html","df7f109a1384f7ba84d054f74e4d8e33"],["/tags/扩展/index.html","681d2ab06f13f30ee0d0c18c17ede18f"],["/tags/技嘉/index.html","3c790027c6df78d299d7dd2f26b6d19d"],["/tags/来源未知/index.html","3cf5768b3e689bb68e74845db7c631da"],["/tags/洛谷/index.html","9dacaa63be1d9aaf9c4e6c2c17df4784"],["/tags/游记/index.html","47d524bb184b8d3d52303a56bca09e44"],["/tags/白嫖/index.html","d0d730f5153619897f17a94d47d1eebb"],["/tags/维修/index.html","4521b8c56e1cbc628b973c2b0cb54c0a"],["/tags/美化/index.html","56d07d8a2e728e8454e4768d936894fb"],["/tags/部署/index.html","a3a5280d1554f192ea9afbe055597e2f"],["/tags/题解/index.html","df766c4924f77c82d2a93f3f94aefd16"],["/talking/index.html","a930275b75b4071e702bb8937192cc9c"],["/workbox-d4c5e7e1.js","4daf96f897dba141de7d750a676f74c1"]];
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
