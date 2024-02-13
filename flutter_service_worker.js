'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "e351e2b39b26b85cdaf18d18957e9562",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bc32b089149c6f282aa2ac50ed67b550",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16971be9ffe1ddf47c18adb58cdefdad",
".git/logs/refs/heads/main": "16971be9ffe1ddf47c18adb58cdefdad",
".git/logs/refs/remotes/origin/main": "479b422b28d4d6be69e1e78d224bf560",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/d3d410e55d638da9c9262168836b669b95f133": "c0848c701161e8716d02b8fce8c52153",
".git/objects/0c/5642b755429911503f90c1fc5543503bf5f8ba": "d322ec1a5f467106f603f083322c5339",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/14/9b714b775fbca7fab16605af19509c8cc4287e": "500759254bb3b0d334d4f5b8b58d1bac",
".git/objects/19/f791c72412eca5450c748116a54e10f614a140": "af51003421cb67ee2328bb6cfeb588e7",
".git/objects/1a/ed2a99f08a50a9fa3e00a93ee753d5ff4dc47d": "7a1bfac5668876f1bb7dae9c5f6f6834",
".git/objects/1d/bd701bb49b5849b44fbd80d9b0c5803b5bb1f6": "496f3f199970e3cf0d82c3504120feac",
".git/objects/1f/9e355bbeb1c2dd4db64cec3adf722fc40818fd": "4e8090d2a807cce50b5d91d33bf58adf",
".git/objects/1f/b6c13088aab39f060c10e1a5fb45b45a8c3fc3": "98d56dd2d233d88310f902f96d422b93",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/bcd633ebbbf4335a34eceaf1b6e54d298b2928": "2a6fdc414c8329bcfb4fef96636f81d8",
".git/objects/23/0637e2b89b93439fd89ed910cb9e7c6c08afb1": "c14efb904db6ed26be9d857ec5f10732",
".git/objects/23/e3032132969187c9a534cc1cde169a40d8df6e": "10349376a5854f4fbc7cfdb6e300edc9",
".git/objects/25/1462efc59b0b12f33f85c807f4f5acfc3f5511": "a24a5e6aabf6893faf805a583f2fd70d",
".git/objects/27/33d8102e67fbac47ccaa34661add50da82cfbf": "e9238cb437ebd9eaa3eeb308a556af24",
".git/objects/29/ea28da3f3e61849c28fb26bccbd968240ebe37": "533fa480ea058dcbbbf7eb2775eba194",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/d0d9eb801b30f0f9564074ada4062cefd5c753": "8b91cb2f8be52d32bc80c010247e10ad",
".git/objects/32/7a46814da0f74c458bbbf8e5ec590ab6a40808": "348e2cf8f562142a29cfee00c6b9757d",
".git/objects/32/d1481449bdb4e6dfda79fefa3eaeb5658c0db3": "06d9270d8499d5628de92717614560ea",
".git/objects/34/9f1279ea6cc4e9d747356667789387dc2581cb": "63141bf568391b6838eb24a7a6942db2",
".git/objects/35/6ef4f3a1e1ffc33496695c42103e8c2f242b13": "0446cab5591dbc55def63224d6f1659c",
".git/objects/37/f1d0959512911ba179052cd2c334615fc0d278": "89a206bd38750bcb8e44412fdb3c935e",
".git/objects/38/4d41af05593d3b4537b9c2c533f5fd246ded99": "c22b199c86f75f43cf360e411d8b27ec",
".git/objects/38/aa0728fb0a71ded55574d5aa11779397160f2c": "4fee9fa1159e752ba035e71230a43a08",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/5fa9ad4ea97d7087a0f0c1ee8716fe59fcfe83": "9f8d9b5e2d07a92c157defaf2c425a9c",
".git/objects/3d/b5349e0ed3f03f878f2472d5ec610229461d0d": "001d8ebf73a96a77c7b2936089d76e4d",
".git/objects/3e/c56287ca38384907290f201c261ee16667aa75": "fde5b6929189022c874189b1da5f173d",
".git/objects/3f/22707ba3042d94f03ec1676a5e38d4d5a057c9": "632753677770e84a9504eb5aac6ecd5b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/f83a76b42e059b8c64add46e529d02719e84eb": "97b8b30f445a94dbf4f6c8bc767c3411",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/73d5fb9e5f1d29596e97ab03e53260fb3ff3d0": "6081c25ca58965fc039dabab98fec784",
".git/objects/4c/cf96ce30ab857a8f72c6250977f54d3ebcf0ed": "2ac4173b4d714f0a9c9c6acc1903508e",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/4e/50230a9bf2dff0e79f4002a5ab2ac0141a0359": "c151671db5107bd71f4c152137c6c975",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/727aed1612869134a7e53e13af514867f306fc": "38766e8ccd43ed3d9bcdf0447328b20f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/b20111f8d1c746232f99bd3e54fbb2f1300aad": "ae5d7eaaa9a817877d4b9250b8d95c7b",
".git/objects/5d/59a65b2cfb0ef238884f4fce1653fb33e38887": "9aa3b8742799d358d659edc4f469128e",
".git/objects/5d/c8a59cadde04d5e69a2e9e93717c0b76149feb": "8459f303c82c3332d64683685a6a4fb2",
".git/objects/5e/05a4cbfc177ccf959c22c8e10ebddd857f3543": "dfbe2e91438307958446a79148cd7853",
".git/objects/5e/3bfe3e5b5ce3ac8c9d114456b3434d3cb24e6a": "7a72b036fb980a93df8edf6b8c783634",
".git/objects/62/3a71dad8cedfb468ccb8000186f20d6aaa2a31": "66bebb477d6e932391b768b1471b04a1",
".git/objects/78/e135117d9842d155faf09d909647731f63cfc0": "7d845c859d0a203c8fa48c99d23d88b1",
".git/objects/7b/d42390e023d876352fd7371955d2d4239ae9e7": "6f65da601836ee0fcbd1b46b1ad2fbf4",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/8b/0ef9a65e4dc4e97cbc525cf28dfd125891c1ea": "0155dad22d933345fbdab74aea3d3f1c",
".git/objects/90/de2f18509550175f564f8c9662a46b9cce25a7": "f19081f4c4d6c100f23517992d1afeeb",
".git/objects/92/40b9977513f5088cc2f7dd483dd7d93b25bb96": "532b8c7d7c72121a0e56a8b7619b5fca",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a3/27790d9a8635020e8e4e8d2034a09831123104": "23d231ef674e20c910b4c96e704ed2fb",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/b2/85b2aa1a2dc523f8d7105e5d846fea2f7f57f1": "572549b08445bd7113544e6b45cb0a23",
".git/objects/b8/07e7023c360f749b588c6c4ca8b4d934a08b4f": "468a683945c2443be787b9f232ac1544",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c1/2c7cc9a9be314c02cee661f26afb8e3850c5d5": "424b028e326674fca89c3e8e1d3b2159",
".git/objects/c2/5580fc7c31377f7dc46f21f3980bc2fd57587b": "20c15803499ee86dce0de423b5f8e741",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/cb/f44db93188aa3f540453461f19b1f355e8f7f8": "f066f0813d8c013a38687ef90bc43207",
".git/objects/cd/2e2f47e79ee83bd279193f69d55b8499ec67fa": "6790ad50f2a382f970d481d8f5d1aedf",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/4e69eb74064e85133a44dcf950e13e9643e90a": "9a3de0ef18c0cea0e1a181abab6fd301",
".git/objects/db/385020e204b0f08254e00823cb06ae867b963d": "7e5bff4e3b475a45902ee75903926315",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/9e107216f5e2acdfed2e3a494c9682189aa998": "781022ed69d424f66f51f7d2b4bbbc54",
".git/objects/e8/c4b6871da3a6321d8b953626d786c90b604021": "52fd58ce5ac5203ec84e0ada7b76a4ab",
".git/objects/ea/869e2dcbe01db0b1017a2d3ea6872524f71ae7": "0c4c059fbc4944beb72752b27fb3ffa4",
".git/objects/ed/864c6cb39d05f6d467b95e6c015dfb5c63d244": "df5962d19905b92e7a994a96f23c6da2",
".git/objects/ed/a128ce8284a536f7a359af493c278c3633c69c": "7e3873fecb595f854115907364c55233",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/f2/68d78821d947c4f100d1aa8834c463ce89486b": "2377303c29b7b99e57937506b965fe43",
".git/objects/f2/f60660950bc7c9eed3fc71b624d1cb393ac807": "791a1a6b01b7112162ff182b6a91bfb0",
".git/objects/f7/48727428ba0ccfb0368a58ebdb3a5134c31343": "a4a9b66ec8f805ada6704f6c54d3c904",
".git/objects/f7/a752677139411d822e15379cfd811ab16e27ce": "53a657c70b57441014ef8695ccfce78e",
".git/objects/f9/b6af166dfa6d48c665ba671d5334ab129ac56c": "523b0f23ecdfdb99cb6829fadb5aac71",
".git/refs/heads/main": "295d72e6ae7c8cd6695716fe734e86c7",
".git/refs/remotes/origin/main": "295d72e6ae7c8cd6695716fe734e86c7",
"assets/AssetManifest.bin": "2721dcc0599cb8539c9ac55ca7f656dd",
"assets/AssetManifest.bin.json": "bb611ea5fc9033c101cf6d0eab92820b",
"assets/AssetManifest.json": "436c3379c13cc166b857f22e7248080e",
"assets/assets/components/contact/horizontal-texture.png": "234c3d5858caf2f58ce231ce03e87c3f",
"assets/assets/components/contact/vertical-texture.png": "98575e3746c76f4cae0327b57a0c72dd",
"assets/assets/components/experience/abstract-right.png": "e53a76485b04ba726c7252dc8a8c8631",
"assets/assets/components/experience/champ.png": "2fbe8b41cd2b6d0fd0112e2515a02e85",
"assets/assets/components/mouse-down.json": "6b5a41c5dbbcf6607810e56fa6269fb2",
"assets/assets/components/presentation/presentation-mobile.jpeg": "fafd116115d6bba65832240f7f318c56",
"assets/assets/components/presentation/presentation-web.jpeg": "fafd116115d6bba65832240f7f318c56",
"assets/assets/components/presentation/texture-background.png": "0ffeabc6308fff5d3c8efcbeecc6904d",
"assets/assets/components/presentation/texture-large.png": "1bab8b08e59a241f27daa4d29426070f",
"assets/assets/components/projects/large-abstract.png": "46e96326822e664028752807b6dd33f3",
"assets/assets/components/projects/mobile-abstract.png": "cf04644c849bd10c116013f560da5e05",
"assets/assets/components/projects/mockup.png": "0322115778714521e45578b814527f5e",
"assets/assets/components/social/abstract-large.png": "dfbe6bc03a8f77df5051bf23653d907f",
"assets/assets/components/social/abstract.png": "2525865b904aa20c6ab9fd2e03ce9bf7",
"assets/assets/components/social/discord.svg": "cd4730e2cf392ceee9a22ea5a78ecd16",
"assets/assets/components/social/github.svg": "651ff0f4d9545f268088b2dc9edd62b5",
"assets/assets/components/social/instagram.svg": "beb71dcb570100d531b28023eb3487ad",
"assets/assets/components/social/linkedin.svg": "8564ddd78e336ea070658ab1a25e54c1",
"assets/assets/components/social/stack-overflow.svg": "55d39fbe4094716393f580ceef019f39",
"assets/assets/components/social/udemy.svg": "7412d659622430615f74c4c07eafcfe3",
"assets/assets/developer.png": "61055a2b0d1444b9012bf8b5933a4ca7",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/profile.jpeg": "fafd116115d6bba65832240f7f318c56",
"assets/FontManifest.json": "899e72c7d0e8f46f802cef34fd7c6dac",
"assets/fonts/MaterialIcons-Regular.otf": "4e38f298ad35cae483ed4f3c06da2e86",
"assets/NOTICES": "d80b905fb8532f9db6bf76a1c3d9ec6c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"firebase-debug.log": "c7b415688713bcf7f66fec9b5ae44d15",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"index.html": "e13a7c76bf0b2d15ef5d61bea95b680e",
"/": "42c38dd322dd7068a55f15ecc1828cec",
"main.dart.js": "80284e6405368ca19502a5dbc01e5e11",
"manifest.json": "b4b7d6c3ffbd88268167343a92ad8467",
"profile.jpeg": "fafd116115d6bba65832240f7f318c56",
"profile.png": "d07c7ea9b49b5a4d25beabbb0c5c3d9c",
"public/index.html": "42c38dd322dd7068a55f15ecc1828cec",
"style.css": "d7136e4f28e93384fc225d5bf58b1e43",
"version.json": "59cfa61735fabb2f46d2e4886bbcfe4d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
