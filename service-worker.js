if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const s=e=>d(e,c),f={module:{uri:c},exports:n,require:s};i[c]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20210728/pai233の小窝正式建站/index.html",revision:"c49b1dd8d8627f0b7f824b8656e9aa5e"},{url:"20210802/luogu-p1601/index.html",revision:"017aca8871c3aae190e6a41e4ef9463e"},{url:"20210803/luogu-p2393/index.html",revision:"75c1693c404441f8616146ca88ec6bf4"},{url:"20210815/hexo-clicker/index.html",revision:"8a09fde2b2ca10fe7e353047bfa816b7"},{url:"20210820/get-text-from-the-editor-for-vs-code-extension/index.html",revision:"5c71bbaf050bc3d63761032b2cc84e31"},{url:"20210824/git-ignorecase/index.html",revision:"97b5126270dce6fa2b3e212b23547375"},{url:"20210826/get-csrf-token-of-luogu/index.html",revision:"ac0449d36059cdd08e98a8444c02fc01"},{url:"20210829/server-changing-to-cloudflare-pages/index.html",revision:"6518694f9ca0da44214f946d9bf44599"},{url:"20210831/itdog-gfw-api/index.html",revision:"8d49f90df9fd9f4f2dd1f33c960e3a1b"},{url:"20210912/hexo-pop-welcome-window/index.html",revision:"fcce767a6af25d7ad27f39e5d7fe5a5d"},{url:"20210919/csp2021-travelogue/index.html",revision:"3d0ed3f8ad3b604e43e79fb4c094c1dc"},{url:"20210930/hexo-katex/index.html",revision:"8d810ea9e0fe5a834748ba2b8a19ce28"},{url:"20211010/hdu-1702/index.html",revision:"b85481c4ac7663769f963c8d80c3602e"},{url:"20211010/usaco2019feb-bronze-measuring-traffic/index.html",revision:"b58b69bdf6dea378b41736ba641b2963"},{url:"20211011/download-vscode-faster-in-china/index.html",revision:"94676544fbcd4e7931e7859d9c78b5ae"},{url:"20211012/cspsj-noi-cn-has-some-bugs/index.html",revision:"54a599d96d95924ea49558c527cc2c8b"},{url:"20211013/luogu-p1141/index.html",revision:"219f48b383e99f6db13f4a6bab214225"},{url:"20211014/noip1999pj-t1/index.html",revision:"a06981359df19f50505c5d9e3f4647ce"},{url:"20211114/noip2004pj-t2/index.html",revision:"345ef268957d908e08d22e31bdbe0d42"},{url:"20211219/amp-solution-oi/index.html",revision:"b00df56c684d429099e4384519c7c3a7"},{url:"20220102/noip2009tg-t4/index.html",revision:"06a53bf503e3321de9a8b1e1f9ffd29e"},{url:"20220109/how-to-use-go-jumper/index.html",revision:"1231c29f4de56ad706a32c4285ea7bac"},{url:"20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html",revision:"d52efb61e8307990803e5361ddc72ce2"},{url:"20220207/change-the-theme-to-butterfly/index.html",revision:"c9196436a8bc963d3ce5b3606e6565d1"},{url:"20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html",revision:"c7ad8fb7938914491f549733877350ca"},{url:"20220209/5-free-static-page-hosting/index.html",revision:"b204d10f46342d10d43bd8dc45cf72bf"},{url:"20220213/friend-links-exchange-rules/index.html",revision:"00abeb8c37c605082d4a98b58e8d2466"},{url:"20220213/usaco2019dec-silver-moobuzz/index.html",revision:"65caf215dfe0f3a8576dc947809dd961"},{url:"20220219/use-jsdelivr-by-cloudflare-worker/index.html",revision:"d7c5da3cc20651f597121e061934ef4b"},{url:"404.html",revision:"e462c9149be87f809629ab0e1b856e58"},{url:"about/index.html",revision:"02f1d22a0847049805afd9186ef99a38"},{url:"archives/2021/07/index.html",revision:"c4f7b6a7316da076e685d12af657ef79"},{url:"archives/2021/08/index.html",revision:"c7c6e1c4f5a8f746b89dde448b9f6d68"},{url:"archives/2021/09/index.html",revision:"898c6e48e3c1080c2fb82cd39af13d09"},{url:"archives/2021/10/index.html",revision:"33a866d6b0afb5e81ed464c8a4f2f4c5"},{url:"archives/2021/11/index.html",revision:"e01160f891d608a3b4e87c5a6b0e349a"},{url:"archives/2021/12/index.html",revision:"d5df93bbeac7885b74f8efb578db9e3f"},{url:"archives/2021/index.html",revision:"794851a6072cbfcadff85a469e7d3065"},{url:"archives/2021/page/2/index.html",revision:"5dff33cad36db1fe513ce6da50027115"},{url:"archives/2022/01/index.html",revision:"80e945af168b24eb131449297fbd6238"},{url:"archives/2022/02/index.html",revision:"78705b52407ff36659b8d63221ad977e"},{url:"archives/2022/index.html",revision:"6d69078dffa729deeb0707187ce73b33"},{url:"archives/index.html",revision:"b17bb0ef5a677059e0e1af79a560a6f0"},{url:"archives/page/2/index.html",revision:"301661611435765289214220bd5d3be2"},{url:"categories/index.html",revision:"258c1ded54923a67bc28f1879c696daa"},{url:"categories/博客美化/index.html",revision:"dcd203f4f682965b99f5277f6bd899b6"},{url:"categories/博客美化/功能/index.html",revision:"aaa0efe6a32e1e0bbeef1aff96b90f2a"},{url:"categories/博客美化/部署/index.html",revision:"a748556990f2f460ab9daf8b32155ffe"},{url:"categories/博客美化/页面/index.html",revision:"3113200de5b8bac21f0b7ba38fa0cf09"},{url:"categories/咕咕小站/index.html",revision:"5289736d99af83cfdd764b0a741f7f2d"},{url:"categories/咕咕小站/博客动态/index.html",revision:"924216b7617477211b01b9c7affa986c"},{url:"categories/推荐/index.html",revision:"98c37cd41debb1225d5b03e7513d330e"},{url:"categories/推荐/Web服务/index.html",revision:"37c02016b33075b39ae07e6137632303"},{url:"categories/游记/CSP/index.html",revision:"131b57bfca3430480f64798fad89db7c"},{url:"categories/游记/index.html",revision:"48cb6e29a0f52a597b32c11141fd2b32"},{url:"categories/算法学习/index.html",revision:"2ab1abcd56bb6e8ea0a745aefabfc0f7"},{url:"categories/算法学习/搜索/index.html",revision:"3f7dafe0932ccd4e27fcaa696b2d6840"},{url:"categories/算法学习/数据结构/index.html",revision:"adeabb0bcafac89bdc1d92f70551b7d9"},{url:"categories/算法学习/数论/index.html",revision:"0fe1edfa475b2f463ee3de03a6980105"},{url:"categories/算法学习/模拟/index.html",revision:"b40a6f3bfcadc0ea21c7071b0065bfde"},{url:"categories/算法学习/高精度/index.html",revision:"eaba6a310094466ae192950b8edb14b8"},{url:"categories/随笔/GFW/index.html",revision:"967cf937034a389d5cb487e69df20ef7"},{url:"categories/随笔/Git/index.html",revision:"98d25b151a99e2f5b4b5710ca7fca4ed"},{url:"categories/随笔/index.html",revision:"e99eecf2256a7310c8a523ca1142232f"},{url:"categories/随笔/VS-Code扩展/index.html",revision:"ef5331cb2f83188c9f722aff3da42dbd"},{url:"categories/随笔/VS-Code扩展/编辑框/index.html",revision:"70b3de122904acdb44cb928d7c4f858c"},{url:"categories/随笔/反向代理/index.html",revision:"b464ae1091e03eb0b9cfd0f6d702ef64"},{url:"categories/随笔/咕咕小报/index.html",revision:"aa8b71502b9a9923495dc4bc7f2e6147"},{url:"categories/随笔/奇淫技巧/index.html",revision:"0f6e09688da64bb974a9e350dc319198"},{url:"categories/随笔/洛谷API/index.html",revision:"44697c4ba9fdc4be31e3a4d71b8826f2"},{url:"css/index.css",revision:"6f973604b064a4f07e8ce375f40dae3b"},{url:"css/sweetalert.css",revision:"196c08c89f0c8a9b688a16d3435ac327"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friend-links/index.html",revision:"ac98253d0011bf28b584f8702f71cad3"},{url:"friend-links/rules/index.html",revision:"ea56032872b3e49b2a005fd543a9c45b"},{url:"icon-192x192.png",revision:"68f4ff9bcbfd75719b63fefafe18ec68"},{url:"icon-256x256.png",revision:"d90464a3be0f8c15c78f39824ec4ee6b"},{url:"icon-384x384.png",revision:"e678a7a06abac5fdf4145fc64838d8d8"},{url:"icon-512x512.png",revision:"dfccfbdc8816f819582bca036c6f7fc7"},{url:"images/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/banner.png",revision:"c35d400ce371f8befb35dd55712569ae"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"22b1adc497ba662040d227519416f32d"},{url:"img/qqwallet.png",revision:"808ecf886e4e71c02b4728c6bed71090"},{url:"img/wechatpay.png",revision:"d25ade1e4be4aa943932c56e37d708ff"},{url:"index.html",revision:"84a5ee279517c4fc3cb6675c4157665c"},{url:"js/link-checker.js",revision:"02991a3e40b6c75a6bcb0df2457d3f13"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/serverlist-loader.js",revision:"fe1c7c40db15bd11366c97db4eff5d66"},{url:"js/sweetalert.js",revision:"800cbdcad6a26e06fc9471102d8c50c4"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"030f89f850aa940182ef72003d72a95e"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"message-board/index.html",revision:"d731be700a55a0b54b87545fe354dc0b"},{url:"page/2/index.html",revision:"da59a3e8f43a0d14208233473a2e3f31"},{url:"server-list/index.html",revision:"b9c11c336517bb4a68b4cb43b2c6b83a"},{url:"sw-register.js",revision:"1663784c07cb95574000e625d49200f5"},{url:"sw.js",revision:"022a13e7c6a3b62d0235d25ab9a00feb"},{url:"tags/API/index.html",revision:"dd22af588c09cba421540cfd5bfd9c05"},{url:"tags/Blog/index.html",revision:"4c12dae73d5dd0bdff7b6b7711aa5e6f"},{url:"tags/C/index.html",revision:"e2fdaf5ec10beff23936235834bcf153"},{url:"tags/CCF/index.html",revision:"4d60de8624e8363b051d44d0d825f997"},{url:"tags/Cloudflare/index.html",revision:"8c3f161c81aaaf9e58c036ec243d0521"},{url:"tags/CSP/index.html",revision:"5c55254a58140d0b7107092e2f84724a"},{url:"tags/Firebase/index.html",revision:"e42e4c810a808e10a0a6a18a533f8d70"},{url:"tags/GFW/index.html",revision:"804747511aaeecf1d2b0f84bc1ea12bb"},{url:"tags/Git/index.html",revision:"b43c012dd8cd7ad6cd57d8aad8736dd0"},{url:"tags/HDU/index.html",revision:"cfd897988ff37f75152dd92375c0ca3a"},{url:"tags/Hexo/index.html",revision:"c32d948a6c1803375bd05323c2bd4d83"},{url:"tags/index.html",revision:"063d29c4d458cafda3bcf25b73438e08"},{url:"tags/JavaScript/index.html",revision:"85e2be8e612b12763497bf963f57ab55"},{url:"tags/JQuery/index.html",revision:"c2878e4124ddcb25493a775b680291ed"},{url:"tags/jsDelivr/index.html",revision:"32c71dd10bf5af433abd450b59628721"},{url:"tags/LaTeX/index.html",revision:"c4374428d80bb7039d0242fa1b2ada9b"},{url:"tags/Node-js/index.html",revision:"378801ec0092a527fde1e8c692e5ccae"},{url:"tags/NOIP/index.html",revision:"f38de4136a5f3ab84f729a16580fdb36"},{url:"tags/OI/index.html",revision:"b266b3b0dd2e2eb1e3ac29a03b228197"},{url:"tags/Proxy/index.html",revision:"da1eabc1c40c7dfcc4431f6e7de8ac6f"},{url:"tags/Python/index.html",revision:"b246906f573a0ace7d4f7296456c5b71"},{url:"tags/Sweetalert/index.html",revision:"5b28b0e0d978a1052aec45075fe505a9"},{url:"tags/USACO/index.html",revision:"23d32105ed7ecc899843f6186bc90e1a"},{url:"tags/VS-Code/index.html",revision:"e57b1eb708d7d8eaaa5776e1097a4a93"},{url:"tags/主板/index.html",revision:"0f8cb89b490a767e34fef681a5c08c10"},{url:"tags/免费/index.html",revision:"ba55533ab5cb725be602eab02e6c2c5a"},{url:"tags/反向代理/index.html",revision:"ab28826b3af4796dd6ee165020cee7b2"},{url:"tags/奇淫技巧/index.html",revision:"b98c979a00743712995c2366511e566d"},{url:"tags/小报/index.html",revision:"7a076c8dda34c6ff110455f002dc9a3c"},{url:"tags/扩展/index.html",revision:"4abfcc6f09f67f358d5b0ab0f890e009"},{url:"tags/技嘉/index.html",revision:"acf5443e20c8d11345c9904108e39386"},{url:"tags/来源未知/index.html",revision:"de63a4ed46b141aedcee6c376b56deab"},{url:"tags/洛谷/index.html",revision:"cc8126a86985a99beffed5bf19da86d5"},{url:"tags/游记/index.html",revision:"3a80076ec86bab435e2154ae8ba8453b"},{url:"tags/白嫖/index.html",revision:"410de06055efb3683e0723f74d3fc764"},{url:"tags/维修/index.html",revision:"b9456cd685b08c812fc2b294958d8b0e"},{url:"tags/美化/index.html",revision:"ea88644dd13fac83faee4465ca82829a"},{url:"tags/部署/index.html",revision:"4f2db0f856d51febada47aff4c7607fa"},{url:"tags/题解/index.html",revision:"6c4c3cd65572ea16144e3d0b5b692008"},{url:"talking/index.html",revision:"78ac57d320758703d0c692343b75f95a"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
