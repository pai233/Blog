if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const s=e=>d(e,c),l={module:{uri:c},exports:n,require:s};i[c]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20210728/pai233の小窝正式建站/index.html",revision:"cc7a8c64011b2b26ca7d7e9038839f18"},{url:"20210802/luogu-p1601/index.html",revision:"efcbbfbea538730bbbe7b1e51ab50285"},{url:"20210803/luogu-p2393/index.html",revision:"f276a84c7703f9478812a953bfb50eb7"},{url:"20210815/hexo-clicker/index.html",revision:"931ac622781fad956a758e0a2737f908"},{url:"20210820/get-text-from-the-editor-for-vs-code-extension/index.html",revision:"aed0a8f4bbbbafd6ef4c94f570ea655b"},{url:"20210824/git-ignorecase/index.html",revision:"ce820b2128884e3a10be567be87ed3c5"},{url:"20210826/get-csrf-token-of-luogu/index.html",revision:"78072d54ad2526e83f4688c52ab69466"},{url:"20210829/server-changing-to-cloudflare-pages/index.html",revision:"e4e3b7d294f250ddb0ab2a1d0dcb5413"},{url:"20210831/itdog-gfw-api/index.html",revision:"915c61e3616f8d48d520419f6abb4248"},{url:"20210912/hexo-pop-welcome-window/index.html",revision:"4cf16c4f6058be629855d82c399cd839"},{url:"20210919/csp2021-travelogue/index.html",revision:"836fdfbdc53441920d9c3d97d1d1b82c"},{url:"20210930/hexo-katex/index.html",revision:"2e7aab46c8718e35210456aeeed3601f"},{url:"20211010/hdu-1702/index.html",revision:"61971db453c05703040059aa1c7e4dfe"},{url:"20211010/usaco2019feb-bronze-measuring-traffic/index.html",revision:"c95bf198613c1fa3e617605edb0fb7de"},{url:"20211011/download-vscode-faster-in-china/index.html",revision:"8c8c14e36a7bb1affea81e7c28b193ae"},{url:"20211012/cspsj-noi-cn-has-some-bugs/index.html",revision:"7fa7682bd000f6f1fef105b44c4afd26"},{url:"20211013/luogu-p1141/index.html",revision:"983fdf7a6d55140cd25be973da455c13"},{url:"20211014/noip1999pj-t1/index.html",revision:"b1f2bcf1baafa7bb030a7857bcab1a5e"},{url:"20211114/noip2004pj-t2/index.html",revision:"5e59e383d08042707268964f1c443bc3"},{url:"20211219/amp-solution-oi/index.html",revision:"d51e0a5d77cfd98bcf1ea6ebd4083d71"},{url:"20220102/noip2009tg-t4/index.html",revision:"7166cbdbe51c488207347f363d1ecbcd"},{url:"20220109/how-to-use-go-jumper/index.html",revision:"7ef1ba72804b2d79332c707e49ee355b"},{url:"20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html",revision:"6a2f71d92013e3ea4404e2ec590977ee"},{url:"404.html",revision:"54155612c5c1b6718306065ab11b56e2"},{url:"about/index.html",revision:"281b5f28f86088bbe20b357028e239e1"},{url:"archives/2021/07/index.html",revision:"7e36c2723af69d0df0b5d50835d532c0"},{url:"archives/2021/08/index.html",revision:"07b81d81d9a6d78de6d15af37ebaec04"},{url:"archives/2021/09/index.html",revision:"a6309d3093f8b6a7ae098b3977c380d3"},{url:"archives/2021/10/index.html",revision:"6c9a30407bc98c3931309f9478c661ff"},{url:"archives/2021/11/index.html",revision:"1a6702d93a00372ed360437731b2d4dc"},{url:"archives/2021/12/index.html",revision:"0998dd4c860145f8d6942a21f0e9f18a"},{url:"archives/2021/index.html",revision:"2d77a70d8a71f344083405c5ae63d4ae"},{url:"archives/2021/page/2/index.html",revision:"51350e2d6ce6da7ae6113076c04ec6ad"},{url:"archives/2022/01/index.html",revision:"098a2368377164b2e634a62eb9096fa5"},{url:"archives/2022/index.html",revision:"4d36582de4bfa8678e6de36b514a3639"},{url:"archives/index.html",revision:"6704d27fc85cef17b255df0463725838"},{url:"archives/page/2/index.html",revision:"4c39650a67deb94bf15ddab3713d06fb"},{url:"categories/index.html",revision:"b9a1beaa0de6158766525cab3af61923"},{url:"categories/博客美化/index.html",revision:"2e8691a0150da7b75a29a1fac26445a9"},{url:"categories/博客美化/功能/index.html",revision:"fd231b14c019af1d075ba9ce9d0c9688"},{url:"categories/博客美化/页面/index.html",revision:"70c4d34895d6a8462e0746c2fd4465e1"},{url:"categories/咕咕小站/index.html",revision:"2bb39a37fc76c15d0d31543cbb6f2811"},{url:"categories/咕咕小站/博客动态/index.html",revision:"9f29f3ec56e930f41b5b3f1f04af7e37"},{url:"categories/游记/CSP/index.html",revision:"f3bc47ca650344b862881ad2c59c3441"},{url:"categories/游记/index.html",revision:"42bbb38eaeb470a0f82e3211d3085861"},{url:"categories/算法学习/index.html",revision:"6403cac5bb6becfa267131dda5296fe0"},{url:"categories/算法学习/搜索/index.html",revision:"29845522718677ad1e6f7cd8ae49b936"},{url:"categories/算法学习/数据结构/index.html",revision:"7c6e8f70779a3c670ff165a3aa9ae4e7"},{url:"categories/算法学习/数论/index.html",revision:"5ccba662ff3045b74001835c0eac388d"},{url:"categories/算法学习/模拟/index.html",revision:"d49a56c4bf86213037d329d398bbc819"},{url:"categories/算法学习/高精度/index.html",revision:"caad97cb1d25f500bc6b21ab0744741f"},{url:"categories/随笔/GFW/index.html",revision:"9c6ebbb5a736e7fac97f859a4c974243"},{url:"categories/随笔/Git/index.html",revision:"431c686ef1cb560a3d43ed34e442b6a7"},{url:"categories/随笔/index.html",revision:"1550f4321008ec8d98474aa09af0dfb4"},{url:"categories/随笔/VS-Code扩展/index.html",revision:"27932badeace7baf6c9cfde01d29430c"},{url:"categories/随笔/VS-Code扩展/编辑框/index.html",revision:"d742cdd17129487630c626d57c207eb2"},{url:"categories/随笔/咕咕小报/index.html",revision:"e1324cb26cc2dc369c7bad1515c5c97f"},{url:"categories/随笔/奇淫技巧/index.html",revision:"91f89c6335a518a34a0d42e9fb630397"},{url:"categories/随笔/洛谷API/index.html",revision:"712c6fb1fa222e88b5e909487703c691"},{url:"css/index.css",revision:"3a5487edb67fa0f80c51dcacc0d23c82"},{url:"css/sweetalert.css",revision:"196c08c89f0c8a9b688a16d3435ac327"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friend-links/index.html",revision:"bdc8f47bbf263fb8911636d9da0530d4"},{url:"icon-192x192.png",revision:"68f4ff9bcbfd75719b63fefafe18ec68"},{url:"icon-256x256.png",revision:"d90464a3be0f8c15c78f39824ec4ee6b"},{url:"icon-384x384.png",revision:"e678a7a06abac5fdf4145fc64838d8d8"},{url:"icon-512x512.png",revision:"dfccfbdc8816f819582bca036c6f7fc7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/banner.png",revision:"c35d400ce371f8befb35dd55712569ae"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"22b1adc497ba662040d227519416f32d"},{url:"img/qqwallet.png",revision:"808ecf886e4e71c02b4728c6bed71090"},{url:"img/wechatpay.png",revision:"d25ade1e4be4aa943932c56e37d708ff"},{url:"index.html",revision:"60de030ef3865945001978fd54f6b129"},{url:"js/link-checker.js",revision:"02991a3e40b6c75a6bcb0df2457d3f13"},{url:"js/main.js",revision:"67ef93b7026979d99da673cfd9fd85de"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/serverlist-loader.js",revision:"fe1c7c40db15bd11366c97db4eff5d66"},{url:"js/sweetalert.js",revision:"800cbdcad6a26e06fc9471102d8c50c4"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/welcome.js",revision:"030f89f850aa940182ef72003d72a95e"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"message-board/index.html",revision:"88e31fb080c82774971f071fa90b096c"},{url:"page/2/index.html",revision:"9a9cec5072eef494e70701464d052e88"},{url:"server-list/index.html",revision:"abc4a3e36cfc9eb92322c4bce498eec3"},{url:"sw-register.js",revision:"0df9a386aa1597de8f875fef660afb7e"},{url:"sw.js",revision:"6c7a8006b7b0340844d3d01f9b173e98"},{url:"tags/API/index.html",revision:"f8f366dc6dba0de2886d3de295362b35"},{url:"tags/Blog/index.html",revision:"5387e1580c0b159951b29bf2bd6850d3"},{url:"tags/C/index.html",revision:"14c6281a820d95db2fea752f1c4cc519"},{url:"tags/CCF/index.html",revision:"e66259e2f5ad7513d4ee06be7c7b1b60"},{url:"tags/CSP/index.html",revision:"85b2cebede9013bc96d2622d0ede906c"},{url:"tags/GFW/index.html",revision:"345ab1a3eb186e61b0f8591e126e4dcd"},{url:"tags/Git/index.html",revision:"20782b99e3377f6b6bfad0d7d398fd10"},{url:"tags/HDU/index.html",revision:"e09de6c8783be4a00ed736f75c49f61b"},{url:"tags/Hexo/index.html",revision:"a73ae178c7be1506295557186be63e0b"},{url:"tags/index.html",revision:"de4347616f1945b6086f40f51bbe2788"},{url:"tags/JavaScript/index.html",revision:"db96eb0daae3a68faf515517e2980c00"},{url:"tags/JQuery/index.html",revision:"00c977682bbbc33dfc44f8e9c716f48d"},{url:"tags/LaTeX/index.html",revision:"d56365ea151ca001ee8e50016c2c47fd"},{url:"tags/Node-js/index.html",revision:"b2165100de4346a9d865e48fcb2db202"},{url:"tags/NOIP/index.html",revision:"9ca062fdc8b3ded0f821e4633d0ef29f"},{url:"tags/OI/index.html",revision:"0e8f02f5cba526dc5098742ea17b291a"},{url:"tags/Python/index.html",revision:"e01471a6ff124f54b26283b6d29e9138"},{url:"tags/Sweetalert/index.html",revision:"a8f7610a24e7c1b4a6e0a8cd3c23816b"},{url:"tags/USACO/index.html",revision:"2ef3adcdc594255005e8d5deff5802da"},{url:"tags/VS-Code/index.html",revision:"57f50650226b2ce64d8a526c4720616a"},{url:"tags/主板/index.html",revision:"176df6b0a72494330d00ae76134ad05b"},{url:"tags/奇淫技巧/index.html",revision:"b62156d595e2782e0847f8e1a7ff231e"},{url:"tags/小报/index.html",revision:"296c1e95e352933d8338b7e68d021ec3"},{url:"tags/扩展/index.html",revision:"765af9bba7b2a4ad2523c7d6b05afdc2"},{url:"tags/技嘉/index.html",revision:"8db7f51efbdea3b49f86278a9883989b"},{url:"tags/来源未知/index.html",revision:"0ffb6ea02ee8e7cfc62f603d1236ccc0"},{url:"tags/洛谷/index.html",revision:"54b8b08e11184e8def5d918326c8bd7d"},{url:"tags/游记/index.html",revision:"2de0a1ee8f98d66623470a8006ed1442"},{url:"tags/维修/index.html",revision:"cd1e73912a13503edc9337af405f07df"},{url:"tags/美化/index.html",revision:"5ecd85611cead1852011fe2ea7905530"},{url:"tags/题解/index.html",revision:"82871311a29beb53a6e392a0fe260403"},{url:"talking/index.html",revision:"59294af8dabbae0a5b26fcea36317c10"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
