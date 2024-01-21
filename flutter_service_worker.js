'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2721dcc0599cb8539c9ac55ca7f656dd",
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
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"index.html": "2bfd2ac56225ca435a0ce36c04cf08e7",
"/": "2bfd2ac56225ca435a0ce36c04cf08e7",
"main.dart.js": "9342798ac49d706ca5cb16b59b86b30e",
"manifest.json": "b8881f4274b4dd254734717882902883",
"profile.jpeg": "fafd116115d6bba65832240f7f318c56",
"profile.png": "d07c7ea9b49b5a4d25beabbb0c5c3d9c",
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
