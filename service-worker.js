if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>d(e,c),b={module:{uri:c},exports:f,require:n};i[c]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20210728/pai233の小窝正式建站/index.html",revision:"619cfd274f9717919ebad324d374d210"},{url:"20210802/luogu-p1601/index.html",revision:"d54ba61b0ff8d89e2348bf88a97f064f"},{url:"20210803/luogu-p2393/index.html",revision:"b4d3e11aa726854528ab40489e3afdbb"},{url:"20210815/hexo-clicker/index.html",revision:"86b806c93d9dd177724bac03b5ced970"},{url:"20210820/get-text-from-the-editor-for-vs-code-extension/index.html",revision:"03eb2ddf8c31d7fc672f7de61c0d99a0"},{url:"20210824/git-ignorecase/index.html",revision:"77d340fdcb850ed74dad80fab441c280"},{url:"20210826/get-csrf-token-of-luogu/index.html",revision:"d8d2bcb99f42a271e61596298b92da00"},{url:"20210829/server-changing-to-cloudflare-pages/index.html",revision:"8c61c3f340be4123ae63ae56c7d821b1"},{url:"20210831/itdog-gfw-api/index.html",revision:"f5809cb955b7de0fcfbec47bc54677f6"},{url:"20210912/hexo-pop-welcome-window/index.html",revision:"1aa5f6efc66ffe354ef28ea3f82a8ba2"},{url:"20210919/csp2021-travelogue/index.html",revision:"8d6771802162c6eee6f9bfe8cd6bf5f2"},{url:"20210930/hexo-katex/index.html",revision:"37627d10b146ccfced9c069aceeb431c"},{url:"20211010/hdu-1702/index.html",revision:"b38718b1ee1564ec5698186c6152f448"},{url:"20211010/usaco2019feb-bronze-measuring-traffic/index.html",revision:"74ff57d83269b84ef05712677510b874"},{url:"20211011/download-vscode-faster-in-china/index.html",revision:"f078aa32c2bf0ea9cff4a48ac8940538"},{url:"20211012/cspsj-noi-cn-has-some-bugs/index.html",revision:"9ff42553ad04066d4cf60ae872f5e057"},{url:"20211013/luogu-p1141/index.html",revision:"dfafd2ea2d1f6d48dc48e767e269b66e"},{url:"20211014/noip1999pj-t1/index.html",revision:"b97bcbfb79ab921ddc9a2a001a9e6b8c"},{url:"20211114/noip2004pj-t2/index.html",revision:"4cca67385fc7191b6dc7ddba162578b1"},{url:"20211219/amp-solution-oi/index.html",revision:"0d2b791b5cd4d9402d03eb18a23fb5eb"},{url:"20220102/noip2009tg-t4/index.html",revision:"496ff5204ab5bbc702fafe0938b2c648"},{url:"20220109/how-to-use-go-jumper/index.html",revision:"3d34dad232a2a822ff7466fdb00166a6"},{url:"20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html",revision:"4a9b2bbd3303756aadf3cb1a442f0dfb"},{url:"20220207/change-the-theme-to-butterfly/index.html",revision:"fdc603ba6fdac7555b402ef8aeed7d19"},{url:"20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html",revision:"77421346145f7c55d0eb40ea21d96304"},{url:"20220209/5-free-static-page-hosting/index.html",revision:"6001fd9a3bc40993ae28fc9b8826d9fa"},{url:"20220213/friend-links-exchange-rules/index.html",revision:"92a858507dc58025576797860d4b9676"},{url:"20220213/usaco2019dec-silver-moobuzz/index.html",revision:"6706349b64a1df32f329edc9e176603f"},{url:"20220219/use-jsdelivr-by-cloudflare-worker/index.html",revision:"3789d1d595b548a0b016e8f4d6706a1a"},{url:"20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html",revision:"febab27d3821697f86bd3f6d05369f5f"},{url:"20220312/init-your-hexo-blog/index.html",revision:"a32e2cc9fee6f67c90a6ad07abca5374"},{url:"20220327/some-good-themes-for-hexo/index.html",revision:"901f205ffef925e0b349f6dae017b02d"},{url:"20220409/butterfly-popup-welcome-window/index.html",revision:"84edc1f498f5ea5cae0359cb6f1c7f16"},{url:"20220503/butterfly-go-jumper/index.html",revision:"2ffdc82f1b7e1cdbb2253fb949c7626c"},{url:"20220503/how-to-get-a-microsoft-365-e5-account/index.html",revision:"7dd805e8263b2ca8959b0a15cfce2f2b"},{url:"20220707/noip2008tg-t1/index.html",revision:"2d6361d4cd7f46b1c788f2f9da713f26"},{url:"404.html",revision:"8f857c96145b20474dd9871b7ca8f42d"},{url:"about/index.html",revision:"32b432c2d43946a7bce97066319c8748"},{url:"archives/2021/07/index.html",revision:"3645861fbee5ffeee5c3f473af4723d6"},{url:"archives/2021/08/index.html",revision:"2aa30ec78b759fa5818fec72cf37ac57"},{url:"archives/2021/09/index.html",revision:"8dec44aa3145d0e3fcc18760cbacf0b0"},{url:"archives/2021/10/index.html",revision:"a8db7022c24f25733e3037f85570ae77"},{url:"archives/2021/11/index.html",revision:"6f1823870ee872702e409a722b960e3c"},{url:"archives/2021/12/index.html",revision:"73b29ec8c9fa68d6a8ada0edfef971cb"},{url:"archives/2021/index.html",revision:"15c5919ee5dd659bb4960966efbc10db"},{url:"archives/2021/page/2/index.html",revision:"595f4f5767fc66bdcfcd9b01259266b9"},{url:"archives/2022/01/index.html",revision:"c730705add2ed4aab7f4afd57501f056"},{url:"archives/2022/02/index.html",revision:"07542a541c16cb10b3c52a191c3996e8"},{url:"archives/2022/03/index.html",revision:"ea5a7e002f5edfe6973bfb6aea77cc6f"},{url:"archives/2022/04/index.html",revision:"8efdf498fa9dfe153af26b0f12281187"},{url:"archives/2022/05/index.html",revision:"6eb35db1b71a191dc80d0882e5ad22f2"},{url:"archives/2022/07/index.html",revision:"837e73d2fbd023a47131dd14ce8c0036"},{url:"archives/2022/index.html",revision:"c176617868f77844fbeec818fad69813"},{url:"archives/2022/page/2/index.html",revision:"5f814ed6875dafc23a9e0af1839cca3e"},{url:"archives/index.html",revision:"f59e34052088c56a78802c4e7d369b11"},{url:"archives/page/2/index.html",revision:"5e91eeebb05791f2a835cbd017b9c74f"},{url:"archives/page/3/index.html",revision:"6733f71f883aa6efe981f4d1f4cda1a8"},{url:"categories/index.html",revision:"60b14662ed06374268c982b3ba6c7a5d"},{url:"categories/博客美化/CDN/index.html",revision:"a978a6f86e573ffebe7a673e3e69508d"},{url:"categories/博客美化/index.html",revision:"4f0a0dc9c97e4177bce2d6c3e89bc713"},{url:"categories/博客美化/功能/index.html",revision:"7ad298a447b0b76382d2c3803b9306a0"},{url:"categories/博客美化/部署/index.html",revision:"588740c87974b44af176f889c01341e3"},{url:"categories/博客美化/页面/index.html",revision:"00af94984f3ed7ba5b279fc34e61f749"},{url:"categories/咕咕小站/index.html",revision:"217d0b25f68c3e6d8862830bd9533033"},{url:"categories/咕咕小站/博客动态/index.html",revision:"f2a2e0e2aee03dde2a8e0a0e714834d6"},{url:"categories/推荐/index.html",revision:"580c206b544e6d2f93162c0a15d01b2b"},{url:"categories/推荐/Web服务/index.html",revision:"244c077cf8076a29f5abd089f36e9a3c"},{url:"categories/推荐/微软/index.html",revision:"6fe5f6426aa1dd43f6331c0b186c64c6"},{url:"categories/游记/CSP/index.html",revision:"a39dd3fdb1ffeaeb5cb1aab7b0764402"},{url:"categories/游记/index.html",revision:"8ebc01172b1ffab14a8e369fac4be18c"},{url:"categories/算法学习/index.html",revision:"56d04c8af7806eff3836a14d293b6983"},{url:"categories/算法学习/搜索/index.html",revision:"b1382eb3e3104935935241b968c19578"},{url:"categories/算法学习/数据结构/index.html",revision:"4298728af46aef35fe66fc6f418df355"},{url:"categories/算法学习/数论/index.html",revision:"4bdac63d75549adcbaff2adf3d8aabd2"},{url:"categories/算法学习/模拟/index.html",revision:"1b8584a62c4cf13b34f1046656ca6a1d"},{url:"categories/算法学习/高精度/index.html",revision:"24ee632067166cf1e495b8d061e590d7"},{url:"categories/随笔/GFW/index.html",revision:"01c2266d6b1d781f547451d2a49bad8d"},{url:"categories/随笔/Git/index.html",revision:"739fb19be4f42ba99d3b5301c6d7c5a2"},{url:"categories/随笔/Hexo搭建/index.html",revision:"6916e338363221e1c13a0003a9a14a77"},{url:"categories/随笔/index.html",revision:"0a1afdfef13044e3a9a6824707ea4564"},{url:"categories/随笔/VS-Code扩展/index.html",revision:"2e6a965967b575f081803230c90d4bd9"},{url:"categories/随笔/VS-Code扩展/编辑框/index.html",revision:"c6045a6c377b47fd77d6104b2a3839c8"},{url:"categories/随笔/反向代理/index.html",revision:"8e67ba1e6fa5d783bdbdddd128ba3503"},{url:"categories/随笔/咕咕小报/index.html",revision:"ade700489f89a86d5067c7da4cfe5b4f"},{url:"categories/随笔/奇淫技巧/index.html",revision:"a8bdb98276f1754702b99c918ab09aee"},{url:"categories/随笔/洛谷API/index.html",revision:"afaad0d93a4095b360853388af182007"},{url:"css/font.css",revision:"3886260fd56fa489b3c6f8c50e721707"},{url:"css/index.css",revision:"751dabdbf4d6073220c3fb8e13bcc120"},{url:"css/sweetalert.css",revision:"4668c1e648b8f58d442ed5b6b2031ee1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/Fredoka.woff2",revision:"c05ed7a4be6d56badb689cfb1453289a"},{url:"fonts/Pailou.woff2",revision:"adb7416cfc1aeb4bfdc7b6d6bb78b8fa"},{url:"fonts/UbuntuMono.woff2",revision:"8b2a874ab5c9080453c2d558a3c4adb8"},{url:"friend-links/index.html",revision:"ab63f22136bc34878ca460b1ba4c6254"},{url:"friend-links/rules/index.html",revision:"76230aef94d850ec7f31766b02b1f793"},{url:"icon-192x192.png",revision:"68f4ff9bcbfd75719b63fefafe18ec68"},{url:"icon-256x256.png",revision:"d90464a3be0f8c15c78f39824ec4ee6b"},{url:"icon-384x384.png",revision:"e678a7a06abac5fdf4145fc64838d8d8"},{url:"icon-512x512.png",revision:"dfccfbdc8816f819582bca036c6f7fc7"},{url:"images/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/404.jpg",revision:"326bcbae2e21007fa73b906975a1c3d0"},{url:"img/avatar.jpg",revision:"423657a8e34d2c034ba19a1ae2238f3a"},{url:"img/banner.png",revision:"54c016144996414b0250c39ec496a3f3"},{url:"img/blocked.png",revision:"d2a8991190c8fb3570d0763522b6cb3a"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"bdad5f33f46c332ef482a967d9039a31"},{url:"img/link-lost.jpg",revision:"7cf7bb1235bb747361a289b26668e38c"},{url:"img/loading.gif",revision:"8fc901ea9e3826ed6d1ecc1acbb929d4"},{url:"img/qiniu-actfree-wide.jpg",revision:"20f78080707100910a852c88983ab44b"},{url:"img/qiniu-cdn-wide.jpg",revision:"c2da2893971a233dffc72cbda3a24cae"},{url:"img/qiniu-server-wide.jpg",revision:"259b0df49e3328f7a8dffeb71f965acf"},{url:"img/qiniu-storage-aside.jpg",revision:"acb47f7421adee911655680a243f2908"},{url:"img/qqwallet.png",revision:"2b89bfcd01401aae0c60a581131995c3"},{url:"img/undefined.jpg",revision:"fb2ee0a0d15fbae961867ae300a34fb5"},{url:"img/wechatpay.png",revision:"5696cae32dc19c7aea08d23098572a44"},{url:"index.html",revision:"497fec75b1300915b3b08e819790c13a"},{url:"js/link-checker.js",revision:"2c6474fce00835b35f30c4798689466a"},{url:"js/main.js",revision:"396291332560459bcc82dcba71b971d8"},{url:"js/search/algolia.js",revision:"df1ac71726c61743d55c86bdd1e74a03"},{url:"js/search/local-search.js",revision:"06b6cdc4efe57a53987d1effde8431a4"},{url:"js/serverlist-loader.js",revision:"7ffed140c22e167d4d3fe666666af27c"},{url:"js/sweetalert.js",revision:"25e927bce400d2204ff6391e1ee44b7a"},{url:"js/tw_cn.js",revision:"4c05755c2f8e23cb674c983981a9e104"},{url:"js/utils.js",revision:"64062a7dac10b70165ab319a5a09069c"},{url:"js/welcome.js",revision:"d96971cc869b0cd7ea3bfd88d63a2e67"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"7a66afd2cd6825550f6faac92b3cc1dc"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"d4ccc01e11fab003bc722ca5bc41ef9c"},{url:"message-board/index.html",revision:"a3c61ae892bb86269491fc0885ec7b21"},{url:"page/2/index.html",revision:"4f87593404020d8d3b11347ebd807db1"},{url:"page/3/index.html",revision:"b51f38e7168b0cd9179b7dd065c5f3db"},{url:"server-list/index.html",revision:"32620126a22208157a6322c7983f5204"},{url:"sw-register.js",revision:"2c0bc796ee132bb57de8aa34e9be2ec4"},{url:"sw.js",revision:"8a90f1c4883b9e44f3b86b74e23f30ba"},{url:"tags/API/index.html",revision:"477a213c2bc48e885ae675fe6e4d4961"},{url:"tags/Blog/index.html",revision:"202d0e48bc9b0769ee421d51def36627"},{url:"tags/Butterfly/index.html",revision:"5ccf061f158b75a91239acd55ec5f60b"},{url:"tags/C/index.html",revision:"8f1a2ba67dce0ca089dfcf0dff29c23f"},{url:"tags/CCF/index.html",revision:"2b845802c8608b4d06b1185a5b1cfc09"},{url:"tags/Cloudflare/index.html",revision:"340276ec95933702c8bdc3e205cd716a"},{url:"tags/CSP/index.html",revision:"81340459be9aab239c7d339487b0a846"},{url:"tags/Firebase/index.html",revision:"8c23b74ebf7b3c750aa1b99d32fd3bd5"},{url:"tags/GFW/index.html",revision:"c00a7b7ffc3e99bb6a906bc5aa1b33f7"},{url:"tags/Git/index.html",revision:"b1dc2ce058c46f9e2f19087a42cc2b22"},{url:"tags/HDU/index.html",revision:"0570d4da2e058c870374efb547ce7380"},{url:"tags/Hexo/index.html",revision:"5012e50333aca175b6ca7e306e1e772b"},{url:"tags/index.html",revision:"8b90d78d277f9f0d65661713ffa84da9"},{url:"tags/JavaScript/index.html",revision:"6bf84a1ab56790d536ab9aa4958fba82"},{url:"tags/JQuery/index.html",revision:"bcbccd9640dd11be254c0b2fdd1482a4"},{url:"tags/jsDelivr/index.html",revision:"994b3dda66c78fdb2204d399382ffd2a"},{url:"tags/LaTeX/index.html",revision:"3d849618a67e2e08b3c4c36455f5d5ab"},{url:"tags/Microsoft/index.html",revision:"9442764d203a40d250cc8aa3d8d6de6d"},{url:"tags/Node-js/index.html",revision:"9833aee30aba8360ebca94b1d4ead1d5"},{url:"tags/NOIP/index.html",revision:"f30d521514ad3c7fcf4b845d4fede0ef"},{url:"tags/Office/index.html",revision:"e5590ecbf70322509b4477e56ca8932a"},{url:"tags/OI/index.html",revision:"dfa715b8a0ded314adddcca5b75f3bc2"},{url:"tags/Proxy/index.html",revision:"18aa8539f73a317af19705410d64635b"},{url:"tags/Python/index.html",revision:"023fad29d20c294da16e07df041429e7"},{url:"tags/Sweetalert/index.html",revision:"cc5c24cb4580be13450b61977556419e"},{url:"tags/USACO/index.html",revision:"91e72b0d12273df2008f05fefc86e8f0"},{url:"tags/VS-Code/index.html",revision:"024d258fed223573d62f770b70df5753"},{url:"tags/主板/index.html",revision:"5e8c798fdf1b25800732c082debf3208"},{url:"tags/主题/index.html",revision:"481eb3a9e5b008cd6d5673cfa6b8286a"},{url:"tags/免费/index.html",revision:"abdd9ac47544886c8c28e497ae2ac657"},{url:"tags/反向代理/index.html",revision:"8a8d326607b38d26326aa7787d13a662"},{url:"tags/奇淫技巧/index.html",revision:"a96ed6b973dc54465477e2573e162492"},{url:"tags/小报/index.html",revision:"253283a645689b6bb7c7682b9baaf9ca"},{url:"tags/扩展/index.html",revision:"26d62f83f08067e571c798eebf9abe90"},{url:"tags/技嘉/index.html",revision:"3c20fb317c1398909b0d19d88053e815"},{url:"tags/来源未知/index.html",revision:"beb9a956d345b82fe7de781214e2c3dd"},{url:"tags/洛谷/index.html",revision:"45ee43e7b7335ec102df1291caf2eba9"},{url:"tags/游记/index.html",revision:"30275ac75216ee31a46a534a5e279c55"},{url:"tags/白嫖/index.html",revision:"dd4b0eccc0107ee620afc188086c6e6c"},{url:"tags/维修/index.html",revision:"b2a8ec03bf6a78b9e5adefd8b4e7572f"},{url:"tags/美化/index.html",revision:"9eb553a755deea78008ac36aaebd8b0b"},{url:"tags/部署/index.html",revision:"b8d7af0b2b4403264617eae19dab8778"},{url:"tags/题解/index.html",revision:"05d0fb656a76e466604b9cd424d69e76"},{url:"talking/index.html",revision:"de684aaad8607c6cd9e7419ee9c8ee88"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
