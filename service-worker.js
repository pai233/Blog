if(!self.define){let f,s={};const c=(i,e)=>(i=new URL(i+".js",e).href,s[i]||new Promise(e=>{if("document"in self){const f=document.createElement("script");f.src=i,f.onload=e,document.head.appendChild(f)}else f=i,importScripts(i),e()}).then(()=>{var e=s[i];if(e)return e;throw new Error(`Module ${i} didn’t register its module`)}));self.define=(e,d)=>{const a=f||("document"in self?document.currentScript.src:"")||location.href;if(!s[a]){let i={};const r=e=>c(e,a),n={module:{uri:a},exports:i,require:r};s[a]=Promise.all(e.map(e=>n[e]||r(e))).then(e=>(d(...e),i))}}}define(["./workbox-b5e2a5cf"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"20210728/pai233の小窝正式建站/index.html",revision:"67f6fa5c4dc7eba64ef3c278ebc505c5"},{url:"20210802/luogu-p1601/index.html",revision:"3373e456dbec98c35953471641d0440a"},{url:"20210803/luogu-p2393/index.html",revision:"51c6021be0cf8026c8c95a4aac9850e9"},{url:"20210815/hexo-clicker/index.html",revision:"2218f97c1925a9c9f55612a31b04851e"},{url:"20210820/get-text-from-the-editor-for-vs-code-extension/index.html",revision:"f9ca3147b7361cf0e33201efc2e6734f"},{url:"20210824/git-ignorecase/index.html",revision:"7849cf7e8b3de7388f4853363a29a2ed"},{url:"20210826/get-csrf-token-of-luogu/index.html",revision:"27590d14db46d6a23cc9451bf3ab0ec8"},{url:"20210829/server-changing-to-cloudflare-pages/index.html",revision:"9725dc349a14c2436c5648105c60f88f"},{url:"20210831/itdog-gfw-api/index.html",revision:"7d820439cd285f4583b673a87c182051"},{url:"20210912/hexo-pop-welcome-window/index.html",revision:"302e8692bcd2cf4259ae7754bf29cad3"},{url:"20210919/csp2021-travelogue/index.html",revision:"b7a2c88eb06f60316ac88a0d13ae26c4"},{url:"20210930/hexo-katex/index.html",revision:"9a721cf47ff48bd483a79b084072ed53"},{url:"20211010/hdu-1702/index.html",revision:"95e24d454e5e90132369a0d6da29b896"},{url:"20211010/usaco2019feb-bronze-measuring-traffic/index.html",revision:"f02e63ee1651015ab262cdf78e6aa06c"},{url:"20211011/download-vscode-faster-in-china/index.html",revision:"e014e64ba9905b1f4a23aa38e4274f7e"},{url:"20211012/cspsj-noi-cn-has-some-bugs/index.html",revision:"af25a0377c46059aed90b4805bff990a"},{url:"20211013/luogu-p1141/index.html",revision:"c0723cb4b945ed551a93bd1bab006065"},{url:"20211014/noip1999pj-t1/index.html",revision:"2439c7698babd5e35700a1f008d0dfa0"},{url:"20211114/noip2004pj-t2/index.html",revision:"5e16e5e3e38f028256a0e351ba2512a9"},{url:"20211219/amp-solution-oi/index.html",revision:"109324547f6305194bf210e3668c481e"},{url:"20220102/noip2009tg-t4/index.html",revision:"5411537357828722f4d423a0ac395b5b"},{url:"20220109/how-to-use-go-jumper/index.html",revision:"fa3bdd9c49e9cd191f05d51d805ff5b1"},{url:"20220123/how-to-fix-the-bios-of-gigabyte-motherboards-which-has-dual-bios/index.html",revision:"d1fc5e1d9d8da8f264870701096a4a7a"},{url:"20220207/change-the-theme-to-butterfly/index.html",revision:"d538d3f4224a34494c7e21ec1370e4db"},{url:"20220208/how-to-deploy-your-hexo-blog-on-firebase/index.html",revision:"d15f99818f780dd3eac3c7f88f301ba4"},{url:"20220209/5-free-static-page-hosting/index.html",revision:"e083c59f22bb34cfd5e4e0652832566c"},{url:"20220213/friend-links-exchange-rules/index.html",revision:"4312222c95fb9fc0b7f827e601d52615"},{url:"20220213/usaco2019dec-silver-moobuzz/index.html",revision:"08a27557917a2b5c6e715e6c1e168236"},{url:"20220219/use-jsdelivr-by-cloudflare-worker/index.html",revision:"d8abaa2859de1cea8ff7fba58b367233"},{url:"20220227/change-the-cdn-of-butterfly-from-jsdelivr-to-your-proxy-server/index.html",revision:"dff218b8ae76fd1bef9326abeba66605"},{url:"20220312/init-your-hexo-blog/index.html",revision:"a060c41c39f954b9923b6c9f099825a5"},{url:"20220327/some-good-themes-for-hexo/index.html",revision:"b34bbcd9b298c873f682824b90af2b4f"},{url:"20220409/butterfly-popup-welcome-window/index.html",revision:"5166d8714c0d67dc61742323a784d012"},{url:"20220503/butterfly-go-jumper/index.html",revision:"55f9bfa3dd4ecaff565754a241bcee34"},{url:"20220503/how-to-get-a-microsoft-365-e5-account/index.html",revision:"89680bc5b068fd333d6cc3b2f2d5fab2"},{url:"20220707/noip2008tg-t1/index.html",revision:"bf24ee679318fc6cd68822d7c62a80a4"},{url:"20220805/noip2006pj-t3/index.html",revision:"113e399d0f8d7660816f7650a67ff71f"},{url:"404.html",revision:"56b3b0d653dc555cab3b51ee1e0df0cb"},{url:"about/index.html",revision:"93308524ee2891290c42467ec894a024"},{url:"archives/2021/07/index.html",revision:"5d4af36a6ad11cfb1f6355dfe6ca9a2e"},{url:"archives/2021/08/index.html",revision:"a27d916f43ec9eae2d5610f34b57da2b"},{url:"archives/2021/09/index.html",revision:"f7792ffcbd6bd6a8a73d1cf850facfc8"},{url:"archives/2021/10/index.html",revision:"d1bee2c7e4b7226b0f76402b99e23016"},{url:"archives/2021/11/index.html",revision:"b8cc1f502aafaa631548bb0a08303a86"},{url:"archives/2021/12/index.html",revision:"59ad1e0de875873ffecbb28693e075b4"},{url:"archives/2021/index.html",revision:"c99c57074670f4c26bf253fd38b444a4"},{url:"archives/2021/page/2/index.html",revision:"50f50668858a612fc2a74fa5d9f9278e"},{url:"archives/2022/01/index.html",revision:"74e8baf70d9ba987d3c38dd26e398350"},{url:"archives/2022/02/index.html",revision:"04feb40a6a8a25ab7027cd5c918e109b"},{url:"archives/2022/03/index.html",revision:"529ab64aa9d649e46153533e0a985fce"},{url:"archives/2022/04/index.html",revision:"7bd9796cccb803f92227cf9efb26d9e9"},{url:"archives/2022/05/index.html",revision:"8d43a0424f2ff6d5e046042c1aa1d4fa"},{url:"archives/2022/07/index.html",revision:"5a7dc2eb575d42409644ab8283112d8e"},{url:"archives/2022/08/index.html",revision:"7c226a3f6c486adba179425d42ef441a"},{url:"archives/2022/index.html",revision:"ffd8e5805889fad98cb914da41fc5286"},{url:"archives/2022/page/2/index.html",revision:"db942a7aaee0221c43580337876b2003"},{url:"archives/index.html",revision:"11ebe6d784de25e65ca8786762d958c7"},{url:"archives/page/2/index.html",revision:"8420bb3a0184af623df8fddc707bfb3e"},{url:"archives/page/3/index.html",revision:"7b70c1d9496629b5cb2f47b612313cb6"},{url:"categories/index.html",revision:"4edc764b848a734ad23f4c1999afd415"},{url:"categories/博客美化/CDN/index.html",revision:"be18f8f90b339ee2927a3cb027e4e674"},{url:"categories/博客美化/index.html",revision:"38ee671348425e150e0d02b5a0a06cd8"},{url:"categories/博客美化/功能/index.html",revision:"354c9b495b86cc131d25b9f25201a411"},{url:"categories/博客美化/部署/index.html",revision:"f098eea9ea4902535d3fc4852755aafa"},{url:"categories/博客美化/页面/index.html",revision:"517e4a4fa885a33fd39c88565810a82f"},{url:"categories/咕咕小站/index.html",revision:"309f6a6a2c30ef740dd78afe2ed863a8"},{url:"categories/咕咕小站/博客动态/index.html",revision:"bc2c65746cc859c34d357c644056925d"},{url:"categories/推荐/index.html",revision:"ab303dbc630516f6503891d3e45292fd"},{url:"categories/推荐/Web服务/index.html",revision:"c8e8ab28f8670f712e94f6c5e0672ee5"},{url:"categories/推荐/微软/index.html",revision:"af2d460962be9951706bd1094930adc8"},{url:"categories/游记/CSP/index.html",revision:"380cea7d049f4c4d03056e62b1193617"},{url:"categories/游记/index.html",revision:"5c6f11bc4c8557af72e9ba1c496e22a6"},{url:"categories/算法学习/index.html",revision:"4d1aba03ee097f87cf51aa530d84e0f4"},{url:"categories/算法学习/搜索/index.html",revision:"5148e6590629f7e3c5feddc8ed463526"},{url:"categories/算法学习/数据结构/index.html",revision:"b24a13cc952927b233cdb893730d93e2"},{url:"categories/算法学习/数论/index.html",revision:"20dd5dd8b5fc327c0a08a6625f6f9c15"},{url:"categories/算法学习/模拟/index.html",revision:"affcabc12c94f61ad9273bc5bb249c10"},{url:"categories/算法学习/高精度/index.html",revision:"8584cf315928aad21840c3ee27771ecc"},{url:"categories/随笔/GFW/index.html",revision:"fe026cf500be450d9ef523283b1fd47c"},{url:"categories/随笔/Git/index.html",revision:"053fc3cf0a4fdbbb7608c3a1c39165b8"},{url:"categories/随笔/Hexo搭建/index.html",revision:"81487f3c4bd3232b22a53aebc18a0200"},{url:"categories/随笔/index.html",revision:"9f963f1c1550049a515f0948424e8abb"},{url:"categories/随笔/VS-Code扩展/index.html",revision:"25b2c2ce816f9f10d697b6338cf343db"},{url:"categories/随笔/VS-Code扩展/编辑框/index.html",revision:"1c4fa437e6b0891e70936955de5826b4"},{url:"categories/随笔/反向代理/index.html",revision:"a3e324d7523cd5738238148384bbf006"},{url:"categories/随笔/咕咕小报/index.html",revision:"f39cc735247197e7e1ac5e93debf182d"},{url:"categories/随笔/奇淫技巧/index.html",revision:"3fbbb45470279b1d5e7dd4727b033530"},{url:"categories/随笔/洛谷API/index.html",revision:"85e60b3c4d336bdde90008aec251cdb4"},{url:"css/font.css",revision:"164ea28a53a805dd271f7ce896f7c1e6"},{url:"css/index.css",revision:"3e972422ab8b30e7b5aacb844fb2d0a7"},{url:"css/sweetalert.css",revision:"196c08c89f0c8a9b688a16d3435ac327"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/Fredoka.woff2",revision:"c05ed7a4be6d56badb689cfb1453289a"},{url:"fonts/Pailou.woff2",revision:"adb7416cfc1aeb4bfdc7b6d6bb78b8fa"},{url:"fonts/UbuntuMono.woff2",revision:"8b2a874ab5c9080453c2d558a3c4adb8"},{url:"friend-links/index.html",revision:"2fb079c9a4b6140f547f81169d2fcc4b"},{url:"friend-links/rules/index.html",revision:"4d16add3f82e1a403db42c442bf5b7e7"},{url:"icon-192x192.png",revision:"68f4ff9bcbfd75719b63fefafe18ec68"},{url:"icon-256x256.png",revision:"d90464a3be0f8c15c78f39824ec4ee6b"},{url:"icon-384x384.png",revision:"e678a7a06abac5fdf4145fc64838d8d8"},{url:"icon-512x512.png",revision:"dfccfbdc8816f819582bca036c6f7fc7"},{url:"images/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"3d4a1088cda5159f45f6d770d85e5e1f"},{url:"img/banner.png",revision:"c35d400ce371f8befb35dd55712569ae"},{url:"img/blocked.png",revision:"3cff34a282278f44244a8252ad2cd352"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/link-lost.jpg",revision:"12c7bff4c19b1fd457fe91017edad27a"},{url:"img/loading.gif",revision:"22b1adc497ba662040d227519416f32d"},{url:"img/qiniu-actfree-wide.jpg",revision:"30621505ec4a2cd6681a53d767a4a517"},{url:"img/qiniu-cdn-wide.jpg",revision:"c73e74d7d8813ca2ce218a8a04b5cdf4"},{url:"img/qiniu-server-wide.jpg",revision:"9a4b0de9f0573ff7374c70e5c927816c"},{url:"img/qiniu-storage-aside.jpg",revision:"52753956a8be18e9d8f4559f60989f7c"},{url:"img/qqwallet.png",revision:"808ecf886e4e71c02b4728c6bed71090"},{url:"img/undefined.jpg",revision:"9caec22fe36bad53191055b6f40f6908"},{url:"img/wechatpay.png",revision:"d25ade1e4be4aa943932c56e37d708ff"},{url:"index.html",revision:"0902276c48590c669c2c5a5558325215"},{url:"js/link-checker.js",revision:"02991a3e40b6c75a6bcb0df2457d3f13"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/serverlist-loader.js",revision:"fe1c7c40db15bd11366c97db4eff5d66"},{url:"js/sweetalert.js",revision:"800cbdcad6a26e06fc9471102d8c50c4"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/welcome.js",revision:"f3ace3f6e6af1896108651c4eb93aceb"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"message-board/index.html",revision:"9b4ec9de2c0a15f8f1ef964d0e3586e9"},{url:"page/2/index.html",revision:"c0dee07b6557eb92079705bbd23f82e9"},{url:"page/3/index.html",revision:"ee12ddee5d93187b0b83d90781afcf0c"},{url:"server-list/index.html",revision:"c76fae1e6062c0b40c4a3d8e854796a8"},{url:"sw-register.js",revision:"32e098f1854399399572ae995f84ee41"},{url:"sw.js",revision:"24ccc13d4460a439fa61ad272894ca7b"},{url:"tags/API/index.html",revision:"38ceec96bedb1b1b25b8560fd58edf36"},{url:"tags/Blog/index.html",revision:"4843b1dfaba0d72e38342ec4d075ca55"},{url:"tags/Butterfly/index.html",revision:"62d3073325748a8e708b0c81c43f3483"},{url:"tags/C/index.html",revision:"ce0c69ff227408b33e761f341de12c87"},{url:"tags/CCF/index.html",revision:"21c0d557bdfe8c72bc439e3db90d19a5"},{url:"tags/Cloudflare/index.html",revision:"4bf63ac94a7c4117edd04b9b7ac96d13"},{url:"tags/CSP/index.html",revision:"e134e46bdf1398cabf602ae334406c86"},{url:"tags/Firebase/index.html",revision:"0c9c9bdba665aea2367555d9723301f0"},{url:"tags/GFW/index.html",revision:"5a1efd109964e86fae31c6ef45e9023b"},{url:"tags/Git/index.html",revision:"d9d54e179a310e4f69a17c40adf51fa6"},{url:"tags/HDU/index.html",revision:"ff479993f62c0c6ac1fc854245a8595f"},{url:"tags/Hexo/index.html",revision:"4297570ad8369ccb5224a5a134441d40"},{url:"tags/index.html",revision:"df4508e83239d31cfe2f2c845ca59063"},{url:"tags/JavaScript/index.html",revision:"e58cd5a050a5f6826562adbc716db4e0"},{url:"tags/JQuery/index.html",revision:"ae03f2c302ecb017938b314c58765d7d"},{url:"tags/jsDelivr/index.html",revision:"545d34cc057dfb5bedc48868a8f3b725"},{url:"tags/LaTeX/index.html",revision:"58eb7390a2c74b90e247edf3f6d48ed0"},{url:"tags/Microsoft/index.html",revision:"b6db00ff08c7c30df0e4dc7716e5722a"},{url:"tags/Node-js/index.html",revision:"5d47c375c96af38fa621009a30e6705f"},{url:"tags/NOIP/index.html",revision:"79e75b6ae409c33c373bd96d18c1f53d"},{url:"tags/Office/index.html",revision:"25eae2c3ac749480453acd1d891b3355"},{url:"tags/OI/index.html",revision:"3c83bfb9ab1f3fdfb3abe7c0e7a9f012"},{url:"tags/Proxy/index.html",revision:"851a5014e3ec858905f7aa1365c6bacd"},{url:"tags/Python/index.html",revision:"a2235eeab130cee900a3de7578fb4e5c"},{url:"tags/Sweetalert/index.html",revision:"0f30c1f3dd8224399245c6b9972a6751"},{url:"tags/USACO/index.html",revision:"25431c4863124bf0e3eb8b2a705d6639"},{url:"tags/VS-Code/index.html",revision:"dbd385e1291521a1126ef6d0fd064d3b"},{url:"tags/主板/index.html",revision:"b062e45c1d3b45c5654aaf09b39a3e3d"},{url:"tags/主题/index.html",revision:"77ebdd87f2e7bcfa0fc9485710a2f640"},{url:"tags/免费/index.html",revision:"a5f34a95f24fa5a3aac99a4a09d0a5a0"},{url:"tags/反向代理/index.html",revision:"bb244fc7ec10a98e86461d9e09c06876"},{url:"tags/奇淫技巧/index.html",revision:"05828a5d2630234750da2e85c1900b8b"},{url:"tags/小报/index.html",revision:"5511fb030702b975307845a591791d8e"},{url:"tags/扩展/index.html",revision:"bb40c9a5f520e177bc19750fd5526b4d"},{url:"tags/技嘉/index.html",revision:"5c3ba48425cb864ab83f95d6cfe4aa65"},{url:"tags/来源未知/index.html",revision:"33ce1da01a63e95a86dbf1aa671ad5d5"},{url:"tags/洛谷/index.html",revision:"473cf0cc2caa4cdcb2ae45e9efe66967"},{url:"tags/游记/index.html",revision:"34f217938c3d283d7f891c725995d01e"},{url:"tags/白嫖/index.html",revision:"7a19391fb83e691f164ce5d2090c5dd8"},{url:"tags/维修/index.html",revision:"2975dfa0e79ae8dd08e477404d99d216"},{url:"tags/美化/index.html",revision:"d4058094decc491d2ec7d825aef21430"},{url:"tags/部署/index.html",revision:"2433cd57bcc4757dd82ed6bc786c082b"},{url:"tags/题解/index.html",revision:"e65bbde7e0a12680df297e82af1bf447"},{url:"talking/index.html",revision:"0653ccf2e019aa901de40291733b661e"}],{}),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/,new e.CacheFirst,"GET")});