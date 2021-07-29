'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bd7f42c9873259002cc1a275ccaa4c8f",
"index.html": "230d695b422b2554db0cd112845d8060",
"/": "230d695b422b2554db0cd112845d8060",
"main.dart.js": "f6e9b917c2a74744ecad299e9d7f2909",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "235c90e99cda32843c31d9eac14c11c1",
".git/config": "cdfeb3dfa88f5681d9686e34102e91ac",
".git/objects/95/e049fc359d75c07d18a26f38647d1435c42b51": "0d5dcc82479e865fbf578959cd55665d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/8607832df3a53767292834a17cb78974645fe9": "643bf8552de0a0c0ad47a1c56984dc56",
".git/objects/d6/47000f1347885986befc2e6c9e79c4ec9f1c8c": "19453445e20316fe6e5a92ec7a6d7f72",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/e4be6ebe253989b75ad5e9a7b0733822d4c0dc": "6373be4192768a55c25b3e00822f7502",
".git/objects/f2/b6344f598b6e07199a80b91cfd539d5f4cb91c": "adf298301eb2ca1182a2d80765f6b8a3",
".git/objects/c6/26058e6217c5572159d16bbf126c477309a97b": "9f21b4f12d43d6d8d9c499a9d607141c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d436e96d529e03271a4c156deab4bd85bc4291": "9c71b7d0ba081568cb10d3d9bf70e309",
".git/objects/87/2fac820eac33b8a7c2c44b99dde5ed0c203ad1": "7ece4e7bdd986cc618f14d55d8674e7d",
".git/objects/17/91ad438a9a25d9633ebebdbd88e33bc4c91adb": "3bf215b176f5979e174e76af4f5bec90",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/dc07c97503793be3f93b56315ccc144e8a8696": "eb2397f9dc07dd685ea45c3fba93bba9",
".git/objects/21/ffd15134d0ea9ef6fca376ed4b3179d279abdc": "3b84f24cc35a3ab2deb6db03c13bb886",
".git/objects/86/b38bb4d274cbbbea64f9dde094753c4ef1b350": "a6e98225e71a9b0b1de5341e47b79730",
".git/objects/44/8ef01b19f70efc7d63f8d5b609ee9a23699888": "497bf6a9f44f142189095597422b629d",
".git/objects/44/8cb17a011131aadfbc4a49fe2048d174d9e3d8": "d316da9536523e0ae8bb192f4de37820",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/e0c568f0f83ee2346748d2366ccea55bcf69a6": "294a85d9683ab9031ab91d6b9a948283",
".git/objects/36/facf59a686dd160ec661df00d698698ff0cb75": "78beba9fdd6e65bb1cea65e27e229497",
".git/objects/37/6f9f50c12e3cac3b92d07451da3030e583d81a": "0e0d316cbd4307c92fd7431b0a1d263a",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/d3/f1f921a7e9de9ea8473739db9c854584ac23a5": "2581563c52ec87cdcddb8285206e3695",
".git/objects/a7/3d13fa708aca3c2ebbe4e63ee9019a8a68b21f": "dedd795c42a8734cf9928d81cdcb9288",
".git/objects/d5/3701dab95f9f44ecfd9b13cca5f5717c676c9d": "8145ec1c96cdd979b13a0bc569658b20",
".git/objects/d2/e663adc4e745fc942718738e3040609d648c37": "248af8830ed880d27c89db3ce65d404e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/a12903002fff8c7da5b6bb9c4c9b6e6d2e5fd9": "66bf7d5766ea8b25f21da8db72887389",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/e6541fb23f732f5909b31afca34b5b0a70ca14": "8c5ba3d53ce700b0ab85263a1b211749",
".git/objects/76/de8e249af1b6d72aa7224e58acae4b670a6e47": "a8b4230cc8702295e0581dc14aa6ea55",
".git/objects/2e/e142f1f24fdaa4f1db493a34df9c026ff301f2": "54592a234ee9184d7832646d0d265579",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "828091ac453a02f96ff8de97b7093a24",
".git/logs/refs/heads/main": "da2c9e1364fb01665c9ff34f2626d367",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "99ecf2cc91301a3175aad094ef4c9c15",
".git/index": "05bac6ca088b96191f27e5708824fe42",
".git/COMMIT_EDITMSG": "334131c4451cd7b87e710fcbeac540a8",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "4d59e1422b088f85a8c1895af1b33a74",
"assets/NOTICES": "37856e0c3ae7884826ab565b95936fdd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/spotify.png": "daf137762beca656a3c6d7791b0d1c85",
"assets/assets/instagram.png": "a11315201911a2d50acb12f211af971d",
"assets/assets/profilePic.jpeg": "1e57cfbad5729c45888bee705f586bd6",
"assets/assets/tiktok.png": "9c5ccc7701b7f9bf3d55a83ecec28861",
"assets/assets/whatsapp.png": "9c03a4e576897de25c52431b7dbf50d2",
"assets/assets/facebook.png": "95c4c698dfe8ab6f6751af6a7a6ce4df",
"assets/assets/bg.jpeg": "d4e53a0923df4a67f783fa356dd2c1e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
