if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>d(e,c),s={module:{uri:c},exports:f,require:n};i[c]=Promise.all(r.map((e=>s[e]||n(e)))).then((e=>(a(...e),f)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20210728/pai233の小窝正式建站/index.html",revision:"2db36f2bd8d8a5247b7b9e6684d5cd5e"},{url:"20210802/luogu-p1601/index.html",revision:"026332115a299515104191e53118b212"},{url:"20210803/luogu-p2393/index.html",revision:"1de6e95d2b6b60327f3fe320417302c9"},{url:"20210815/hexo-clicker/index.html",revision:"4f3f443d6793366c1f13e0f424dd406e"},{url:"20210820/get-text-from-the-editor-for-vs-code-extension/index.html",revision:"657ab107c3e13991eaacc2736653b73e"},{url:"20210824/git-ignorecase/index.html",revision:"e5033de89afdb875decf43f952331d47"},{url:"20210826/get-csrf-token-of-luogu/index.html",revision:"d16e429e923e4df9852e2875e88c46d7"},{url:"20210829/server-changing-to-cloudflare-pages/index.html",revision:"54a0b229d602a5144b3fdd49de8f1a44"},{url:"20210831/itdog-gfw-api/index.html",revision:"dbe469e8544c25abbf3f2809142aa98c"},{url:"20210912/hexo-pop-welcome-window/index.html",revision:"f9ac865566ca44fde4908128989683d3"},{url:"20210919/csp2021-travelogue/index.html",revision:"b5219971f6f1e63f446df1a416a95d38"},{url:"20210930/hexo-katex/index.html",revision:"dc6b4968dbf736422135407b9e6de2c9"},{url:"20211010/hdu-1702/index.html",revision:"b8f6c3d6852e44b01393e6b6fad4f9f3"},{url:"20211010/usaco2019feb-bronze-measuring-traffic/index.html",revision:"98fa2d43f2325cb422580fa23e1eb524"},{url:"20211011/download-vscode-faster-in-china/index.html",revision:"e4a5b425127fbcffce4e65b0c6fce72b"},{url:"20211012/cspsj-noi-cn-has-some-bugs/index.html",revision:"0580b1221a8e2036ab11d4ef545a2c85"},{url:"20211013/luogu-p1141/index.html",revision:"b387d9ea3d9521a20bd3383365631c50"},{url:"20211014/noip1999pj-t1/index.html",revision:"cba1e8313820f151c17bbdab255fcc7a"},{url:"20211114/noip2004pj-t2/index.html",revision:"bfd8b6788261ce9a0f93fca7c9035356"},{url:"20211219/amp-solution-oi/index.html",revision:"baf84c95fb061a20cdf4c0754e3ab588"},{url:"20220102/noip2009tg-t4/index.html",revision:"4cf2ee5c9ea6f3b48240984e41e0d01b"},{url:"20220109/how-to-use-go-jumper/index.html",revision:"dd052f1d79533c06e09d54185895b8d0"},{url:"20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html",revision:"c8a07dcb6fef52804fbc60d1da55cc8a"},{url:"20220207/change-the-theme-to-butterfly/index.html",revision:"7d6a6b69a1157272bf859224d0b37d15"},{url:"20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html",revision:"df59181c895582fa01e005ea8e59d5a3"},{url:"20220209/5-free-static-page-hosting/index.html",revision:"3a15ffdaa08e34782d748d96388c9833"},{url:"20220213/friend-links-exchange-rules/index.html",revision:"f65cea6d5bd19b34d463be264e20c0f8"},{url:"20220213/usaco2019dec-silver-moobuzz/index.html",revision:"e4efe712f904177d253fe5e5f2028c18"},{url:"20220219/use-jsdelivr-by-cloudflare-worker/index.html",revision:"14b69d5d2d165e2a73c32c93c1de636a"},{url:"20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html",revision:"e82c8b429e78248e14c40f59a28e5c68"},{url:"20220312/init-your-hexo-blog/index.html",revision:"f45e48aff31459c01bd5300c42839ddf"},{url:"20220327/some-good-themes-for-hexo/index.html",revision:"844cc7cc061868e5aaeade16a7c03502"},{url:"20220409/butterfly-popup-welcome-window/index.html",revision:"6b4fe08369095784dd337cfb9261f933"},{url:"20220503/butterfly-go-jumper/index.html",revision:"d81ee34631b3933935502e3c23b6395d"},{url:"20220503/how-to-get-a-microsoft-365-e5-account/index.html",revision:"a3bf534a971b1903359d90a645b40e5e"},{url:"404.html",revision:"6c01bc4f90043a8e7be371e93bcf9148"},{url:"about/index.html",revision:"2da7c1c591885be436b90db2cb3055f7"},{url:"archives/2021/07/index.html",revision:"f8609e1782ba1920a7dd733cb46732fe"},{url:"archives/2021/08/index.html",revision:"4d02a3acff27fe93c9f503a26994b670"},{url:"archives/2021/09/index.html",revision:"69be7e81ccd8aec0be6ebeb0c566e5cd"},{url:"archives/2021/10/index.html",revision:"7008fba2736ec1e51b427a9fc5dd70f1"},{url:"archives/2021/11/index.html",revision:"f76f0b8cebae8d3536aafa7f326cb9c4"},{url:"archives/2021/12/index.html",revision:"42294fa4bca0fbe48ccb18cc04b1a12e"},{url:"archives/2021/index.html",revision:"8aded59230918310e2aa340a0f385936"},{url:"archives/2021/page/2/index.html",revision:"4a1e3c5255092f336679b4d3518a90e0"},{url:"archives/2022/01/index.html",revision:"f28319eee35cf29326488dc7bc4622fd"},{url:"archives/2022/02/index.html",revision:"689e243beed3cfc220804b97e88df891"},{url:"archives/2022/03/index.html",revision:"21038d2d0dbee07a9c65454c00b1c823"},{url:"archives/2022/04/index.html",revision:"b2abf069efa8af5cd835eead999fb509"},{url:"archives/2022/05/index.html",revision:"958301e805e169e057968e2c84b53429"},{url:"archives/2022/index.html",revision:"c37bfdfd7bdef7a5091126fff2bd435e"},{url:"archives/index.html",revision:"c6e48e8325076f9e66282fab8b4508f9"},{url:"archives/page/2/index.html",revision:"f8540d4fc76e709fe97120e103bfc7ed"},{url:"archives/page/3/index.html",revision:"abe2eef4ace5d5b8a05d7e38e65dcc7d"},{url:"categories/index.html",revision:"aa3749f478888ff0ce0f587d1235e27d"},{url:"categories/博客美化/CDN/index.html",revision:"2a54f193aaca9b1950e215760778d781"},{url:"categories/博客美化/index.html",revision:"2389e37db32e9802a51f72868864ae2c"},{url:"categories/博客美化/功能/index.html",revision:"fde01bb5f3280af4301ad9b3e3d02f8f"},{url:"categories/博客美化/部署/index.html",revision:"118c44ff2ebde6d6dd83f0f9c1ac70a5"},{url:"categories/博客美化/页面/index.html",revision:"d92e99588f6f755c883828c4979322a0"},{url:"categories/咕咕小站/index.html",revision:"25b9d8aef17022a6f3ba257b6e17bdd9"},{url:"categories/咕咕小站/博客动态/index.html",revision:"acdea28ecf6382daf6ad15d807c8ba7b"},{url:"categories/推荐/index.html",revision:"11da1bb6d08afcd5ef3197caa782d80a"},{url:"categories/推荐/Web服务/index.html",revision:"a895b5b67b75fc1926837322160050b3"},{url:"categories/推荐/微软/index.html",revision:"f8e584317866c1d70e15754027b174fd"},{url:"categories/游记/CSP/index.html",revision:"4e0cade91006a85a9a0eb951a8552da9"},{url:"categories/游记/index.html",revision:"f1f81aa4922875f2a435ee9a33069af8"},{url:"categories/算法学习/index.html",revision:"82dac38c0ad5585fcf0495cee2c3b2b8"},{url:"categories/算法学习/搜索/index.html",revision:"01386f3c259a59e63826f28cdff7dc28"},{url:"categories/算法学习/数据结构/index.html",revision:"5f46989e3efc40c418307f6874958d01"},{url:"categories/算法学习/数论/index.html",revision:"888ad3718e63b14a04914b30453e9ed5"},{url:"categories/算法学习/模拟/index.html",revision:"faa3538fa90682fd7a44528265475f84"},{url:"categories/算法学习/高精度/index.html",revision:"18c786c58c51a2fd7d0274bdbb3e718c"},{url:"categories/随笔/GFW/index.html",revision:"4a51306df771a8f70469adb9677755bc"},{url:"categories/随笔/Git/index.html",revision:"c25ecafb0293a7afbf5fafc068606fdb"},{url:"categories/随笔/Hexo搭建/index.html",revision:"aa2b6ef2ce6e79917870c0df7453e421"},{url:"categories/随笔/index.html",revision:"9c6064393c0906e94956f78b019a88bc"},{url:"categories/随笔/VS-Code扩展/index.html",revision:"5d4e79fa15639bd9695997e92d47fb65"},{url:"categories/随笔/VS-Code扩展/编辑框/index.html",revision:"483256ac2363cdc4937d95d8dce0dca1"},{url:"categories/随笔/反向代理/index.html",revision:"39bdd83558d6a19c6ab4d66c6f081853"},{url:"categories/随笔/咕咕小报/index.html",revision:"d703bfc0775252a7a86efb607dffa02a"},{url:"categories/随笔/奇淫技巧/index.html",revision:"07f96c55c1e905031b948d87524e0d38"},{url:"categories/随笔/洛谷API/index.html",revision:"7f4c0d285864e122c75f6a418a2afb1a"},{url:"css/font.css",revision:"eb49ae059d2b7553f9ade00483b7d9a9"},{url:"css/index.css",revision:"e9f890452a2f9b625dc8c7024563d451"},{url:"css/sweetalert.css",revision:"196c08c89f0c8a9b688a16d3435ac327"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/font.woff2",revision:"7dba266595ef1f9505dfd23eef011341"},{url:"friend-links/index.html",revision:"0a127d41ad65db753a1022501d273c50"},{url:"friend-links/rules/index.html",revision:"2ee79de13055c651e8e18cb51da2120c"},{url:"icon-192x192.png",revision:"68f4ff9bcbfd75719b63fefafe18ec68"},{url:"icon-256x256.png",revision:"d90464a3be0f8c15c78f39824ec4ee6b"},{url:"icon-384x384.png",revision:"e678a7a06abac5fdf4145fc64838d8d8"},{url:"icon-512x512.png",revision:"dfccfbdc8816f819582bca036c6f7fc7"},{url:"images/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/banner.png",revision:"c35d400ce371f8befb35dd55712569ae"},{url:"img/blocked.png",revision:"3cff34a282278f44244a8252ad2cd352"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/link-lost.jpg",revision:"12c7bff4c19b1fd457fe91017edad27a"},{url:"img/loading.gif",revision:"22b1adc497ba662040d227519416f32d"},{url:"img/qiniu-actfree-wide.jpg",revision:"30621505ec4a2cd6681a53d767a4a517"},{url:"img/qiniu-cdn-wide.jpg",revision:"c73e74d7d8813ca2ce218a8a04b5cdf4"},{url:"img/qiniu-server-wide.jpg",revision:"9a4b0de9f0573ff7374c70e5c927816c"},{url:"img/qiniu-storage-aside.jpg",revision:"52753956a8be18e9d8f4559f60989f7c"},{url:"img/qqwallet.png",revision:"808ecf886e4e71c02b4728c6bed71090"},{url:"img/undefined.jpg",revision:"9caec22fe36bad53191055b6f40f6908"},{url:"img/wechatpay.png",revision:"d25ade1e4be4aa943932c56e37d708ff"},{url:"index.html",revision:"178fe24e57a706bccca3131546b9a222"},{url:"js/link-checker.js",revision:"02991a3e40b6c75a6bcb0df2457d3f13"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/serverlist-loader.js",revision:"fe1c7c40db15bd11366c97db4eff5d66"},{url:"js/sweetalert.js",revision:"800cbdcad6a26e06fc9471102d8c50c4"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"f3ace3f6e6af1896108651c4eb93aceb"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"message-board/index.html",revision:"6ccf4ff554a04cd72ab89a88f757e886"},{url:"page/2/index.html",revision:"963beb3e99da09f597d3e3900e4ec1f3"},{url:"page/3/index.html",revision:"248d0c81fdc6dc38d76ec5efa06bf3cf"},{url:"server-list/index.html",revision:"0b94499a0b7b81aeca92adf429ad3075"},{url:"sw-register.js",revision:"7bff3ea1b4f49d163f8f36818fcdcd41"},{url:"sw.js",revision:"fb9dc2a512f6e6d50d790ee16e4187d9"},{url:"tags/API/index.html",revision:"29b136e40f1c7071aab0a7983b6ec5ce"},{url:"tags/Blog/index.html",revision:"46110614a1b7a7d43fce73cdfaf712d1"},{url:"tags/Butterfly/index.html",revision:"74256068ebe35fa165e42352cde39706"},{url:"tags/C/index.html",revision:"f810ce22685e0081c66ccd16840c4378"},{url:"tags/CCF/index.html",revision:"d77cd754236ad2224407eb46422ee500"},{url:"tags/Cloudflare/index.html",revision:"ae838582c0a5909be2376b0084850bd3"},{url:"tags/CSP/index.html",revision:"3dc1ac5556f2f69efb1a83562cc3b0f2"},{url:"tags/Firebase/index.html",revision:"b7bf64396982dc4bc54c97d729abe94a"},{url:"tags/GFW/index.html",revision:"96fb4dc440f5457c5f3c3bab94bae4d3"},{url:"tags/Git/index.html",revision:"eb4d8e737f8942c86f0f8ad81adeef82"},{url:"tags/HDU/index.html",revision:"2f9451694db6f2cd56f4d3b33c499734"},{url:"tags/Hexo/index.html",revision:"b59e444aff365d736db53b05f338ec37"},{url:"tags/index.html",revision:"7cf3d899c9a0f14056252efa2ff6eb9a"},{url:"tags/JavaScript/index.html",revision:"adbb908174ccfa5bef548da4e07f1591"},{url:"tags/JQuery/index.html",revision:"7654c406437cc6bc0453c59c12196970"},{url:"tags/jsDelivr/index.html",revision:"dc267cfb68d68ec718b0d88371a27134"},{url:"tags/LaTeX/index.html",revision:"c78b49cc0ab2f6c0d6db93876442b4da"},{url:"tags/Microsoft/index.html",revision:"1e3fcf86479e3ee4477df99e58d227d8"},{url:"tags/Node-js/index.html",revision:"e2a2d5c98ca60ab6beb099d0b3b4a815"},{url:"tags/NOIP/index.html",revision:"d0ca27163e51f637baa8cb9860972921"},{url:"tags/Office/index.html",revision:"2ee19187ff359c7fd73767d3c512cd18"},{url:"tags/OI/index.html",revision:"aa6ae9a2408b6cdd0e6223488dcc30d6"},{url:"tags/Proxy/index.html",revision:"7e5459c2429f1be418d56b45378aa755"},{url:"tags/Python/index.html",revision:"37bc012a34b89f655a42071c4103fe26"},{url:"tags/Sweetalert/index.html",revision:"92474ef243e71de150e5a80f568c3fb8"},{url:"tags/USACO/index.html",revision:"c36be19f0b67cf3c932e90d9f3d21891"},{url:"tags/VS-Code/index.html",revision:"06f74f51704d6fe3d43441e81ff7196d"},{url:"tags/主板/index.html",revision:"3bdffc1c548ae475a6420f06d4736494"},{url:"tags/主题/index.html",revision:"212bcd741f6acc486ca9c8b01b4f6e35"},{url:"tags/免费/index.html",revision:"57042f1d7fc74453eb46a6247f9ca8a1"},{url:"tags/反向代理/index.html",revision:"fd7e439f20f0b7e0a6e25d1327ee66de"},{url:"tags/奇淫技巧/index.html",revision:"03dd09355fcee5f5480727d58c573b07"},{url:"tags/小报/index.html",revision:"4b7019bd7b94c6442998345a107a1949"},{url:"tags/扩展/index.html",revision:"d6f3179a5746b1bbbf8793e9272ee762"},{url:"tags/技嘉/index.html",revision:"d511912687ce3677c0f519860cca8f78"},{url:"tags/来源未知/index.html",revision:"db32b8f2896aa7d3ff3c4364362c87fe"},{url:"tags/洛谷/index.html",revision:"2aab5475edc2504a9ca8345c2c86960e"},{url:"tags/游记/index.html",revision:"65702728cd166e61c67024e07db78195"},{url:"tags/白嫖/index.html",revision:"e6b37493438eeec8d9e035c362640a4b"},{url:"tags/维修/index.html",revision:"0aecd2a48f87a3e64aaec06d46d7bdbe"},{url:"tags/美化/index.html",revision:"05637fb3eb19df45464091a281c3319b"},{url:"tags/部署/index.html",revision:"b828e4000e255b3f8300a7aea287231f"},{url:"tags/题解/index.html",revision:"08de374477b0f18473e449fe54286a10"},{url:"talking/index.html",revision:"6b48efa1f76db81fbbe67fa2952fc501"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
