if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const s=e=>d(e,c),f={module:{uri:c},exports:n,require:s};i[c]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20210728/pai233の小窝正式建站/index.html",revision:"3d12c0c6590958405cb59c4878726c90"},{url:"20210802/luogu-p1601/index.html",revision:"b454615904958e999bcbabbb0fa532ff"},{url:"20210803/luogu-p2393/index.html",revision:"3e4a26c78bcce81e825c7234234a2fce"},{url:"20210815/hexo-clicker/index.html",revision:"96737f6c70de1cbb12273991692c11a9"},{url:"20210820/get-text-from-the-editor-for-vs-code-extension/index.html",revision:"7d8c9503eb11db310d512dd70882dc85"},{url:"20210824/git-ignorecase/index.html",revision:"ecedce991390e1f9050189095d80481c"},{url:"20210826/get-csrf-token-of-luogu/index.html",revision:"081c34fa88e40f9eec6920eb1f949707"},{url:"20210829/server-changing-to-cloudflare-pages/index.html",revision:"38930f2669ef7998946405a080ad2705"},{url:"20210831/itdog-gfw-api/index.html",revision:"a1658c7dc945c63ea3fce0f0781707d1"},{url:"20210912/hexo-pop-welcome-window/index.html",revision:"59e72b85e256cb524f97cfc73b0ce3d9"},{url:"20210919/csp2021-travelogue/index.html",revision:"ff92914d822b078e698a320b5ff97c0a"},{url:"20210930/hexo-katex/index.html",revision:"6a54db295be6c4fa6728f7b008ba37a8"},{url:"20211010/hdu-1702/index.html",revision:"fb27edd774e3b5ff3e474438d36a1ea3"},{url:"20211010/usaco2019feb-bronze-measuring-traffic/index.html",revision:"5f2eb76cb958ad5e2a130cfa1cccb068"},{url:"20211011/download-vscode-faster-in-china/index.html",revision:"a29bf840c6b79150b44bc078779058d4"},{url:"20211012/cspsj-noi-cn-has-some-bugs/index.html",revision:"14513dadf8a64e58549d753ad8fea7bc"},{url:"20211013/luogu-p1141/index.html",revision:"9319143876f15fba30db233fd4f871b4"},{url:"20211014/noip1999pj-t1/index.html",revision:"4c4a743912cf9f04cffa81097ae2405e"},{url:"20211114/noip2004pj-t2/index.html",revision:"4ad62038b7e11bb5e71371bb28e6f699"},{url:"20211219/amp-solution-oi/index.html",revision:"af06f5295519c8abb1be3f1a0d480eb0"},{url:"20220102/noip2009tg-t4/index.html",revision:"9124124c32a3aa7e0016a7795ac8f581"},{url:"20220109/how-to-use-go-jumper/index.html",revision:"da1b47bce8813952993899ddcc591d72"},{url:"20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html",revision:"8662cb1153ec71079d553d5b1895279f"},{url:"20220207/change-the-theme-to-butterfly/index.html",revision:"ab38e214a981b68ecda9a9d5570e1d41"},{url:"20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html",revision:"1af1cbab1d256f3ad6ea6adfe2aeda82"},{url:"20220209/5-free-static-page-hosting/index.html",revision:"ffc24f29e5e5227891d14761436edf05"},{url:"404.html",revision:"b3d74a71c63351d48614aa1f20c7b681"},{url:"about/index.html",revision:"9e7f7a43717ba62bdb210fecb3285665"},{url:"archives/2021/07/index.html",revision:"fefe552ae72f489be2ad546c53d85b0e"},{url:"archives/2021/08/index.html",revision:"daf2b306c65ba00ed1cde75644c4020d"},{url:"archives/2021/09/index.html",revision:"115e5fa8c589bb5d693c97989e3d8fae"},{url:"archives/2021/10/index.html",revision:"43e74655cec736daf81eb2e5f9d5ea4c"},{url:"archives/2021/11/index.html",revision:"17977a5513e877e6ea71a7027019d63a"},{url:"archives/2021/12/index.html",revision:"1e95f69aa1a099cee656ffaac10ef579"},{url:"archives/2021/index.html",revision:"f3bdd32b7888eb7c37a7ad6b34bc4b87"},{url:"archives/2021/page/2/index.html",revision:"d15491a48d43d271a4c88e859cadefb6"},{url:"archives/2022/01/index.html",revision:"775a11fc3b747fee8c987dff0645bb57"},{url:"archives/2022/02/index.html",revision:"578651255aeb9073a4a8a188af58817e"},{url:"archives/2022/index.html",revision:"8dc6b7efc49814fe128292397b352fd3"},{url:"archives/index.html",revision:"79ab2f37d17160bd69bd7606c9a37ac9"},{url:"archives/page/2/index.html",revision:"ff40b4a023da7dbbe84ec575bc4d5e6c"},{url:"categories/index.html",revision:"45e0c074dd1309cbe3515a5df8e6bcb1"},{url:"categories/博客美化/index.html",revision:"f774071e83144b41913b71ee4ee24df1"},{url:"categories/博客美化/功能/index.html",revision:"1fe590c402125214ee7852265a33d496"},{url:"categories/博客美化/部署/index.html",revision:"557b6603b7b85a765dd3a6fbc2840536"},{url:"categories/博客美化/页面/index.html",revision:"239d1a468965d87cbcf84226eef539a8"},{url:"categories/咕咕小站/index.html",revision:"dadb0482cea5895455e0efef226dca82"},{url:"categories/咕咕小站/博客动态/index.html",revision:"50013f20186023b2251ffa7116381fd9"},{url:"categories/推荐/index.html",revision:"c302cfb349fb78097e51d3383b1664f0"},{url:"categories/推荐/Web服务/index.html",revision:"5f5f4073c4b1baebd47269f24b3aab85"},{url:"categories/游记/CSP/index.html",revision:"6308e05653d03d748c4381865fc46bec"},{url:"categories/游记/index.html",revision:"9f977b4a43787a052027f182911d8b82"},{url:"categories/算法学习/index.html",revision:"9adcd6345205b6fa03d8a9936d284df2"},{url:"categories/算法学习/搜索/index.html",revision:"1e01ee330f446b6db6bc1b13502fe368"},{url:"categories/算法学习/数据结构/index.html",revision:"43fc048701b935b35220fc42b3e15142"},{url:"categories/算法学习/数论/index.html",revision:"9b9749a6d25930a1b11825d970b732a6"},{url:"categories/算法学习/模拟/index.html",revision:"d694aab85edc5c68b265ec482b186a22"},{url:"categories/算法学习/高精度/index.html",revision:"cd8875391241b131851868a82bb82b98"},{url:"categories/随笔/GFW/index.html",revision:"98b3c76de514f9d0b8d02077ea6c542c"},{url:"categories/随笔/Git/index.html",revision:"ad40cadad150fa1f8d39408f4c8d7ecd"},{url:"categories/随笔/index.html",revision:"389c401d6191a5fd286840c67344ca94"},{url:"categories/随笔/VS-Code扩展/index.html",revision:"04e7aa57b5566acf0593b7b17b4bf9fb"},{url:"categories/随笔/VS-Code扩展/编辑框/index.html",revision:"d9cc6d229152c240fedcf4e892876bc1"},{url:"categories/随笔/咕咕小报/index.html",revision:"43579b786dbe49ea9c90a93d351af24a"},{url:"categories/随笔/奇淫技巧/index.html",revision:"2aa6f53844576cf783c26c34ca2567bb"},{url:"categories/随笔/洛谷API/index.html",revision:"3c7809de1138a2adbda50618c821bb38"},{url:"css/index.css",revision:"3a5487edb67fa0f80c51dcacc0d23c82"},{url:"css/sweetalert.css",revision:"196c08c89f0c8a9b688a16d3435ac327"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friend-links/index.html",revision:"a994b2a8885ee2130e86afb352d7a0bc"},{url:"icon-192x192.png",revision:"68f4ff9bcbfd75719b63fefafe18ec68"},{url:"icon-256x256.png",revision:"d90464a3be0f8c15c78f39824ec4ee6b"},{url:"icon-384x384.png",revision:"e678a7a06abac5fdf4145fc64838d8d8"},{url:"icon-512x512.png",revision:"dfccfbdc8816f819582bca036c6f7fc7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/banner.png",revision:"c35d400ce371f8befb35dd55712569ae"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"22b1adc497ba662040d227519416f32d"},{url:"img/qqwallet.png",revision:"808ecf886e4e71c02b4728c6bed71090"},{url:"img/wechatpay.png",revision:"d25ade1e4be4aa943932c56e37d708ff"},{url:"index.html",revision:"5724ddc2ffa08aec95fe3f3b5765d2ca"},{url:"js/link-checker.js",revision:"02991a3e40b6c75a6bcb0df2457d3f13"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/serverlist-loader.js",revision:"fe1c7c40db15bd11366c97db4eff5d66"},{url:"js/sweetalert.js",revision:"800cbdcad6a26e06fc9471102d8c50c4"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/welcome.js",revision:"030f89f850aa940182ef72003d72a95e"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"message-board/index.html",revision:"f7514067d6f5a84d5fddb5668be18c73"},{url:"page/2/index.html",revision:"eb550943dc50037c55bad7fc9327bda2"},{url:"server-list/index.html",revision:"4773e46756ed3f859ee007439144cd07"},{url:"sw-register.js",revision:"4a5013cf98c242f5b8f2821ec448a400"},{url:"sw.js",revision:"022a13e7c6a3b62d0235d25ab9a00feb"},{url:"tags/API/index.html",revision:"b71954958349810ea49e74b366c86360"},{url:"tags/Blog/index.html",revision:"2493f0f7a9b45708a6b2f5f7565d74d8"},{url:"tags/C/index.html",revision:"2ad2c152f1bd249974d097951ed15cb5"},{url:"tags/CCF/index.html",revision:"981e890b6f5961064326045974733a13"},{url:"tags/CSP/index.html",revision:"b6b3ab3fb73a0c07f098828f13b47dd2"},{url:"tags/Firebase/index.html",revision:"0a7d0c856a878234c2ac8bfcaedd41ef"},{url:"tags/GFW/index.html",revision:"37b352f9cbcd7c5bceb9bd7e5f1944a7"},{url:"tags/Git/index.html",revision:"47d38c79ca836b3df3e662e4588e519d"},{url:"tags/HDU/index.html",revision:"64ca0bc59162db8ff7766c24dd2c2f1c"},{url:"tags/Hexo/index.html",revision:"87a53cbaef3e27728472fdd959345a72"},{url:"tags/index.html",revision:"101cae8f1b3b6bb85ae990eff7ca1971"},{url:"tags/JavaScript/index.html",revision:"43087c25b81ca46f35b8743c962aed95"},{url:"tags/JQuery/index.html",revision:"8d09e649d7f38011197e46d6ab9cb7e3"},{url:"tags/LaTeX/index.html",revision:"59f61589e5406e8f23bba72d67a416ab"},{url:"tags/Node-js/index.html",revision:"82fb91c6c0415ee27798da297b4531a1"},{url:"tags/NOIP/index.html",revision:"128324df685f1b002213ef14d4244514"},{url:"tags/OI/index.html",revision:"79ffecca6717eda4ee5a3dd90d7ebec7"},{url:"tags/Python/index.html",revision:"c584839c1c9f25f03970d5d8bf73f651"},{url:"tags/Sweetalert/index.html",revision:"573a46e9e75d6bebc45f3b36ffcac5ce"},{url:"tags/USACO/index.html",revision:"dd9b1429874e03610b1a8fd5d0b51fb7"},{url:"tags/VS-Code/index.html",revision:"37d37adf01ac5c033abfde2d03608c4e"},{url:"tags/主板/index.html",revision:"2e2b493d74bf782f3cb4a54e90c2ceb6"},{url:"tags/免费/index.html",revision:"838fde45a3814b6c66e1869e142508f2"},{url:"tags/奇淫技巧/index.html",revision:"b964c528dd141c254c8b64383b66f941"},{url:"tags/小报/index.html",revision:"50002a0ff3fd34e44658f07d752824c9"},{url:"tags/扩展/index.html",revision:"fb1f2ad2640420ddc8bc7f38ab44c0aa"},{url:"tags/技嘉/index.html",revision:"14fa39a89ed023171ee6e56e7466d734"},{url:"tags/来源未知/index.html",revision:"44ef04785935d4a17592bc2200dca664"},{url:"tags/洛谷/index.html",revision:"bd0b9df6577bb52f32de6868e656778f"},{url:"tags/游记/index.html",revision:"b1ac07bf26f6a97b5c9da2cff72bef8f"},{url:"tags/白嫖/index.html",revision:"a7a4c94f8c6709e43434ac49454292da"},{url:"tags/维修/index.html",revision:"31d1aeed2ddec32e8019db7d5986e524"},{url:"tags/美化/index.html",revision:"7139b0b44e0ee9aeff51a08578f5c6af"},{url:"tags/部署/index.html",revision:"78dd66c3f0bef2f5396d688a265803f2"},{url:"tags/题解/index.html",revision:"1b397a23521d3288ffc27caa7c56043b"},{url:"talking/index.html",revision:"69aaa178963fb4a289fe34c0454351c2"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
