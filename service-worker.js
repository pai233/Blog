if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const s=e=>d(e,c),l={module:{uri:c},exports:n,require:s};i[c]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20210728/pai233の小窝正式建站/index.html",revision:"d0717a2a45b50f097a6c9df604dbebe4"},{url:"20210802/luogu-p1601/index.html",revision:"9f0328e325fca1a6df472932e5c0154d"},{url:"20210803/luogu-p2393/index.html",revision:"67732b2bb3a839edabf2ff0bc9fb40c3"},{url:"20210815/hexo-clicker/index.html",revision:"f6e71d43e6889098fd5f25ced6d80a9a"},{url:"20210820/get-text-from-the-editor-for-vs-code-extension/index.html",revision:"e66746fbb5d68a0c507bc23af3da5c79"},{url:"20210824/git-ignorecase/index.html",revision:"71037acb35494cc6319cf71b310ed42e"},{url:"20210826/get-csrf-token-of-luogu/index.html",revision:"c08fd93f191f864a83b9821029685aa7"},{url:"20210829/server-changing-to-cloudflare-pages/index.html",revision:"17eb2f2092b30ebe6a64745e621afc73"},{url:"20210831/itdog-gfw-api/index.html",revision:"e9f7d9ad58426358e4818a97ec5b4bf0"},{url:"20210912/hexo-pop-welcome-window/index.html",revision:"3576eec8377229fc1ba0102e79185a01"},{url:"20210919/csp2021-travelogue/index.html",revision:"a2c784ae426d6ad055662d94d3cec582"},{url:"20210930/hexo-katex/index.html",revision:"96ddb90e0d206f9bea08d9907314e076"},{url:"20211010/hdu-1702/index.html",revision:"096488551b769b03787f5b531944d6eb"},{url:"20211010/usaco2019feb-bronze-measuring-traffic/index.html",revision:"94ace532133be7d15c9dd99190f78978"},{url:"20211011/download-vscode-faster-in-china/index.html",revision:"b1db1e1d90c7b49e2454b2434739f54d"},{url:"20211012/cspsj-noi-cn-has-some-bugs/index.html",revision:"b16febcd4991e3108f5266494b342ba0"},{url:"20211013/luogu-p1141/index.html",revision:"62e0c313afa9343c0e80bc78238eb213"},{url:"20211014/noip1999pj-t1/index.html",revision:"902704aa6a56b7b4954384ab0f85c87c"},{url:"20211114/noip2004pj-t2/index.html",revision:"b622fbb1cc835cfeebc337b52e0a6b4c"},{url:"20211219/amp-solution-oi/index.html",revision:"960a1e11ddd0e9e9945a022247beb626"},{url:"20220102/noip2009tg-t4/index.html",revision:"b28b8835948b3ec700d62a72606ab7e3"},{url:"20220109/how-to-use-go-jumper/index.html",revision:"127a7ac7eba54b8873872e06f68764ac"},{url:"20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html",revision:"27dc0520675706c22972d5ca9753e021"},{url:"20220207/change-the-theme-to-butterfly/index.html",revision:"91b2487e47bfdd2af1393d7726834ace"},{url:"20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html",revision:"ebd6b45bd09753829b91468fbd8c1c54"},{url:"20220209/5-free-static-page-hosting/index.html",revision:"7f5bc7e72e15e47f3e37576d46787617"},{url:"20220213/friend-links-exchange-rules/index.html",revision:"7489eb4dde0c0330fe1c8ce3f4d115d9"},{url:"20220213/usaco2019dec-silver-moobuzz/index.html",revision:"bf6592e569c9de36ead9303a27a58701"},{url:"20220219/use-jsdelivr-by-cloudflare-worker/index.html",revision:"41e34ef9e46871086a20f3bbc442fea7"},{url:"20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html",revision:"06a637fd9e6219dd487905188e5611ac"},{url:"20220312/init-your-hexo-blog/index.html",revision:"5df3f51c1f2c13ff5ec81ae8288129be"},{url:"20220327/some-good-themes-for-hexo/index.html",revision:"fa436c2f0a48ba7b9c40378ab55d5772"},{url:"20220409/butterfly-popup-welcome-window/index.html",revision:"4ef38b95ba635bfb9a15748a0fbbae10"},{url:"20220503/butterfly-go-jumper/index.html",revision:"efa1628fb28db5af63388523bdebe06e"},{url:"20220503/how-to-get-a-microsoft-365-e5-account/index.html",revision:"8a313e5d483ac00e99ac0621cca24893"},{url:"404.html",revision:"9ae605036eb894d7b2bbae42255a7770"},{url:"about/index.html",revision:"b34027b9b78b218d010e13d268838ca0"},{url:"archives/2021/07/index.html",revision:"ab058830eae0f2a329f3402b9650c837"},{url:"archives/2021/08/index.html",revision:"571af5f267df8a21fef4f0b9ae1e8c1a"},{url:"archives/2021/09/index.html",revision:"6ad33eef6a876ec8b908ec742a96e41a"},{url:"archives/2021/10/index.html",revision:"401bda7882ffd3e3ca458bc01d8b1b9c"},{url:"archives/2021/11/index.html",revision:"4a2faeeec5e1ba4f05b639b250158ba2"},{url:"archives/2021/12/index.html",revision:"977e0bce3b50880494acbf46d8ee7186"},{url:"archives/2021/index.html",revision:"eef1c1a10255fae371fc9c5090949c34"},{url:"archives/2021/page/2/index.html",revision:"ee146408309b0c4c203d6f6a46b20264"},{url:"archives/2022/01/index.html",revision:"9efa6b5040e985bdedd5327dfe9de6d7"},{url:"archives/2022/02/index.html",revision:"08452e3e860c29427f28e1a1013c733a"},{url:"archives/2022/03/index.html",revision:"ce951ef536e68a6da2b5131461105d6a"},{url:"archives/2022/04/index.html",revision:"57c35ddf1f06f6ff3d389fed788048e3"},{url:"archives/2022/05/index.html",revision:"4e7df6dc91e9db40034327400a626a10"},{url:"archives/2022/index.html",revision:"2646925fefd3a27291a0d818894a1058"},{url:"archives/index.html",revision:"33259e6587ef17c8482bd2aca8c00813"},{url:"archives/page/2/index.html",revision:"d8c79fbddabc0d41dd3069b50df3cce7"},{url:"archives/page/3/index.html",revision:"03752637ec1d5806891ff7d2b99d02e7"},{url:"categories/index.html",revision:"1e748b11a6d8c6149ff91dbd546500de"},{url:"categories/博客美化/CDN/index.html",revision:"627023d7bcfe0620541e2aeb969c6180"},{url:"categories/博客美化/index.html",revision:"dccd9b89480c5c9016485a342f9043a3"},{url:"categories/博客美化/功能/index.html",revision:"2a67dc5e739101f9b3bcb113ad2d9db4"},{url:"categories/博客美化/部署/index.html",revision:"aca547adfc46598d4d9ae2940dcba1b8"},{url:"categories/博客美化/页面/index.html",revision:"f5b9df231131bad9e5e3fa4bea5d2499"},{url:"categories/咕咕小站/index.html",revision:"3c5c71bb4389ad9372401be0477ae690"},{url:"categories/咕咕小站/博客动态/index.html",revision:"d7b37e5d83e0b5177447555ebd8fe81a"},{url:"categories/推荐/index.html",revision:"1c255ae1900d267e4e9b9ed3191a1cf1"},{url:"categories/推荐/Web服务/index.html",revision:"1c25243faa1cc363b6cdb589fef579b3"},{url:"categories/推荐/微软/index.html",revision:"2069d79cc7a0e9889a7ca839b339e8a6"},{url:"categories/游记/CSP/index.html",revision:"8b7fec3b5bf76aca87fb0f7e7a328274"},{url:"categories/游记/index.html",revision:"9e5fde9bd6d0f36e37d4a79b6ff87945"},{url:"categories/算法学习/index.html",revision:"7d1e3cabe6a3004988601c53fd61fda5"},{url:"categories/算法学习/搜索/index.html",revision:"c4086893408e16f2a74ea89e151e586d"},{url:"categories/算法学习/数据结构/index.html",revision:"a625030783f8ac554ac4a2dc269b451a"},{url:"categories/算法学习/数论/index.html",revision:"14ee2a87e12ebe6c90f9fb1e38e1f379"},{url:"categories/算法学习/模拟/index.html",revision:"e0256e12a1edd081e308be482ab30638"},{url:"categories/算法学习/高精度/index.html",revision:"ac27b43886a57e44dd6f2e19c4a9a562"},{url:"categories/随笔/GFW/index.html",revision:"b5c6be03362eb97351c1484c839f505b"},{url:"categories/随笔/Git/index.html",revision:"69e4798fe82c55246b002f874766b089"},{url:"categories/随笔/Hexo搭建/index.html",revision:"e58aa5495625280b56aa3926447f3a4d"},{url:"categories/随笔/index.html",revision:"d69cb1eb64e861acdeec218a408124b2"},{url:"categories/随笔/VS-Code扩展/index.html",revision:"527394482551f5a886b5c07c2366042e"},{url:"categories/随笔/VS-Code扩展/编辑框/index.html",revision:"3cac528994b8ac1d11429d0ee0d3a84c"},{url:"categories/随笔/反向代理/index.html",revision:"1b993119a81037184c249e6f28337a68"},{url:"categories/随笔/咕咕小报/index.html",revision:"5cc2c90430cf676629bdae06a34310e7"},{url:"categories/随笔/奇淫技巧/index.html",revision:"35d93c3348bb6d45457d58b9d26cf7d8"},{url:"categories/随笔/洛谷API/index.html",revision:"f050241adbe0367eeddb7f55623d245c"},{url:"css/font.css",revision:"eb49ae059d2b7553f9ade00483b7d9a9"},{url:"css/index.css",revision:"e9f890452a2f9b625dc8c7024563d451"},{url:"css/sweetalert.css",revision:"196c08c89f0c8a9b688a16d3435ac327"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/font.woff2",revision:"7dba266595ef1f9505dfd23eef011341"},{url:"friend-links/index.html",revision:"5f5c6f43ef45bb0d0025f2c37944febf"},{url:"friend-links/rules/index.html",revision:"397b0d45b6c753e4386c25b5fd0682bd"},{url:"icon-192x192.png",revision:"68f4ff9bcbfd75719b63fefafe18ec68"},{url:"icon-256x256.png",revision:"d90464a3be0f8c15c78f39824ec4ee6b"},{url:"icon-384x384.png",revision:"e678a7a06abac5fdf4145fc64838d8d8"},{url:"icon-512x512.png",revision:"dfccfbdc8816f819582bca036c6f7fc7"},{url:"images/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/banner.png",revision:"c35d400ce371f8befb35dd55712569ae"},{url:"img/blocked.png",revision:"3cff34a282278f44244a8252ad2cd352"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/link-lost.jpg",revision:"12c7bff4c19b1fd457fe91017edad27a"},{url:"img/loading.gif",revision:"22b1adc497ba662040d227519416f32d"},{url:"img/qiniu-actfree-wide.jpg",revision:"30621505ec4a2cd6681a53d767a4a517"},{url:"img/qiniu-cdn-wide.jpg",revision:"c73e74d7d8813ca2ce218a8a04b5cdf4"},{url:"img/qiniu-server-wide.jpg",revision:"9a4b0de9f0573ff7374c70e5c927816c"},{url:"img/qiniu-storage-aside.jpg",revision:"52753956a8be18e9d8f4559f60989f7c"},{url:"img/qqwallet.png",revision:"808ecf886e4e71c02b4728c6bed71090"},{url:"img/undefined.jpg",revision:"9caec22fe36bad53191055b6f40f6908"},{url:"img/wechatpay.png",revision:"d25ade1e4be4aa943932c56e37d708ff"},{url:"index.html",revision:"0be5edbef9e6812bdf8af4d9ac8c80e4"},{url:"js/link-checker.js",revision:"02991a3e40b6c75a6bcb0df2457d3f13"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/serverlist-loader.js",revision:"fe1c7c40db15bd11366c97db4eff5d66"},{url:"js/sweetalert.js",revision:"800cbdcad6a26e06fc9471102d8c50c4"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"f3ace3f6e6af1896108651c4eb93aceb"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"message-board/index.html",revision:"fb26ce57aa85fbd681cb2f6678e0c23e"},{url:"page/2/index.html",revision:"b70916d42fb73c38473c9217eb694250"},{url:"page/3/index.html",revision:"1c174ca15520ab9afd67938aaf30e147"},{url:"server-list/index.html",revision:"7fa5d61b7b0a4cdcb2537e0e19fefff6"},{url:"sw-register.js",revision:"a95ebb009a9234dfae0cc552b8209120"},{url:"sw.js",revision:"fb9dc2a512f6e6d50d790ee16e4187d9"},{url:"tags/API/index.html",revision:"1ac39e5f6647b6b2c1bca0eb2297c925"},{url:"tags/Blog/index.html",revision:"c6f3d2c23e4a04cfbace6de3d32b4dfa"},{url:"tags/Butterfly/index.html",revision:"29816f642cd0f9a6082c340448772fbd"},{url:"tags/C/index.html",revision:"b124b635e71dfd777a1f2609e9b2ced8"},{url:"tags/CCF/index.html",revision:"8a43dfb17472639a134de0d54d277111"},{url:"tags/Cloudflare/index.html",revision:"c6a944053b5402ff2569b0cbe4777618"},{url:"tags/CSP/index.html",revision:"e9790a348dd3eeb0f1a47f0751572f4e"},{url:"tags/Firebase/index.html",revision:"b01f2ef42a8f266d9466108813ed7dac"},{url:"tags/GFW/index.html",revision:"8c10a147714871437a87bbb5d151a7b5"},{url:"tags/Git/index.html",revision:"024cb7e91e679b06912470ac5571b59c"},{url:"tags/HDU/index.html",revision:"c2d1e2c1896c33c10f2e1544a7c63825"},{url:"tags/Hexo/index.html",revision:"a5132a24d3c6e722e0c3c78957ee7d02"},{url:"tags/index.html",revision:"6f0fa03c47acba4e3ebef38efabc7fd6"},{url:"tags/JavaScript/index.html",revision:"a60819e441d9895a458248e5495b0dda"},{url:"tags/JQuery/index.html",revision:"2cc793ba1d43d5448cbc5d86e252035a"},{url:"tags/jsDelivr/index.html",revision:"4fd3cb0c323a09c92c14d906c9c779cc"},{url:"tags/LaTeX/index.html",revision:"0cb10190dcc5c93c2a30b0fae27b9ec5"},{url:"tags/Microsoft/index.html",revision:"721c675df70c0746a9a5b0a7e1691339"},{url:"tags/Node-js/index.html",revision:"7eaf9661ee9c3924deaf774eec8221d7"},{url:"tags/NOIP/index.html",revision:"43624dd87028e86a5aa9fe2d1c09e7cf"},{url:"tags/Office/index.html",revision:"8b06f98c4757f61a3a1b57cefd9422c2"},{url:"tags/OI/index.html",revision:"9801a1ebc51c721defe5d3099df2d546"},{url:"tags/Proxy/index.html",revision:"edb144f4898c1ee8b744630c9ec15910"},{url:"tags/Python/index.html",revision:"325dcd3c56bf33e5cf9ad0d531bd9319"},{url:"tags/Sweetalert/index.html",revision:"ad2218d84dd56209456421b3a0476138"},{url:"tags/USACO/index.html",revision:"7701c6fd521e9d9b31c8a570d57a4ea9"},{url:"tags/VS-Code/index.html",revision:"52110cd97b802d25be42f020cd987528"},{url:"tags/主板/index.html",revision:"6f38f4d2dee6fe348bd8a349e2a2b2de"},{url:"tags/主题/index.html",revision:"596804e131ac87dc988e3d02b76cb550"},{url:"tags/免费/index.html",revision:"c654ccc851c57ea20c875a11b17fc228"},{url:"tags/反向代理/index.html",revision:"891141d4ea2b48702f4e7ea795bdde03"},{url:"tags/奇淫技巧/index.html",revision:"1de3742ac46d8d7cf9ea85a26ce6ee9c"},{url:"tags/小报/index.html",revision:"ad888558790911603f2b2a90ad29ee1f"},{url:"tags/扩展/index.html",revision:"081b21c7ce09f81caf590cd6256c3b17"},{url:"tags/技嘉/index.html",revision:"8568afe3248c154cab0173c756994b82"},{url:"tags/来源未知/index.html",revision:"466bf36b8d4b42e82745a995f829b720"},{url:"tags/洛谷/index.html",revision:"a43efa55070cbe1a5f5f06b5f1bb75d9"},{url:"tags/游记/index.html",revision:"83c53b9e8b4eabd7d5f575ab91c2d6cd"},{url:"tags/白嫖/index.html",revision:"aa8385c44b2dd2eb723347af30c0d1e8"},{url:"tags/维修/index.html",revision:"065a1446c746122129cf148aadf7c8e3"},{url:"tags/美化/index.html",revision:"6fdae81cf31ce6bff4997851abbd0196"},{url:"tags/部署/index.html",revision:"2dacd55fa69f0860235d0e2b63bdd6dd"},{url:"tags/题解/index.html",revision:"f4584ba6d0bd3068c0cf421b4f0a1d5b"},{url:"talking/index.html",revision:"8dcbb8d6f735548db778b1f83b8f0034"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
