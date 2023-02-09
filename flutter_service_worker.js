'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "40c4fd10d78a5628b4b21842b40d3a27",
"index.html": "83db828d99a208ac14c0db5e3f6de6e3",
"/": "83db828d99a208ac14c0db5e3f6de6e3",
"main.dart.js": "fafb03fda09f09a716e3084cf3c5d179",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "95a8113cb3d33079548d3a9985cc4278",
".git/config": "ce211d1985d61ffce9a0302d68b83952",
".git/objects/59/82b78edb4e5ebb352ea7e6cee6caa67e2e6ca9": "8577433717c0cbb9360080c9b6831774",
".git/objects/92/a16789b7e8ef5cb15528863459753842a61736": "10a417018a097f90f381e2a5faddd91a",
".git/objects/3e/d79c48360f8e79411ba8cd49387ae0060cf574": "bbf1b0dd89a6b15e4df16d07973d457a",
".git/objects/50/5ab0c31923dc4744bdc24f5c9715e21f905712": "8707d42a5464eb771f8bce43c7b90b57",
".git/objects/68/c02cc3734fdb24cd4414abfbf843f26f588ec1": "01be77ef48340bc2ee3fd52ec47cf6fc",
".git/objects/68/6ae450c52aa3412d3b8b2e6bc700cf4d902a69": "dd5a88dc7f5b2e84cb81bff7dc0e68f6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/47baffb3ff57560643254aed6f0b11898a94be": "b894f6704c905f4a691f29638c441052",
".git/objects/69/23975f9fba4f734d1b3065d3380df8547497eb": "933b761b140fbdb855c03f31c93fa35c",
".git/objects/58/48e2091bd4ca7cf8e7502fbb29a2ac6940ee37": "e97988924474a46bd2fc0cf24b655306",
".git/objects/5a/a15f82041cb6597dd8a036b574ddb035e18cf0": "33b4187a012720cb9c774b2570d2eaa9",
".git/objects/05/dcc0f76fd1a1f826164e441afe7f9ba372a28b": "fe7974a751edd14bae6dc85162c5a6dc",
".git/objects/9d/850c3b160c3b3063c8149f50795bd730195bca": "61557bd5d56590f868490eeacd06dc20",
".git/objects/9c/b9892275bcbbfa4bb9787eaba3a819d077c9df": "0e20bdb55eec92f7ebbf7cf05402031f",
".git/objects/b2/31e872fb545160f6fa2548347e725e4e8af888": "63d4c43d37bd9ca6da465985d459d752",
".git/objects/b3/834108e83e36886910bc57cc12032624dce238": "5a4cc985701f240d9d7ad4da81e9ad56",
".git/objects/b4/1b7cf97c95f7acd1c4bda17e0fa88341ff6995": "4a449f1f3c5bd8322fc9dccb5c9907e7",
".git/objects/a2/01b66cec7f3aaf2799077da2add5d63dba0d84": "b774e43a602beae8648ea733ce3f7990",
".git/objects/d1/5b020f4dc7c8677d11d812318876380f9caa8a": "e1840ca8729a8207b650f3c72e5c5b3d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a697e70ad306ac1f71c834114a152b3714cef8": "64b4ffaec9bafdbd3e339a91a5b06999",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/383847f10b98e17310f042a663c3bc4be8ebbf": "7a180693b8d08fd36516629588824045",
".git/objects/fe/9c7afc8c3b085dd984ade55c48f84fa3c4e411": "d74712b0510ec03170c0f1168812c676",
".git/objects/7d/783340f8dfb35160f5b90254e0b7d603a904bf": "aa106d91704b24081da0dfc65dd33a25",
".git/objects/29/789f5c3ae5f4f7d7cda26a30d041e3f8ea2afd": "4bedb15bd5ca720f6b0fb84a206856eb",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/398cab9fc8e8841aedc3b1175812e5d48d1e3b": "0e9119aa5dfc9213d2830b4c519bd6f0",
".git/objects/87/91642846949b049258a3cedc3c8648664b9c7c": "d698de0fb3c541f7fa8505c5d4b67bbc",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/7b/e6b40cc00214f691e7df5bb2912f26d8c24d49": "9194abd8c737bead3cb937b2c4d21e60",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d5adee025e0ec266504b6274e2b2b9a74150e4": "1678c426028237563bf469ef9c20ac4b",
".git/objects/81/98dc2f8d8458f0ff4a9d6ee0361527ac4ab2ca": "c847706c99c61f9eed52dbdb30ed12cb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/dc778677722b219ac1a1bdd9058e953dcd1f59": "24a355a2ce56654b9588bb09526aa8d3",
".git/objects/31/429c1c7d8de88cde8d6f2f734c1352cfdbc0a7": "c836969a7531422cc4925e2a9a9a1885",
".git/objects/91/0a14406982909c8e3b13c4cf69f66cbaf14821": "15e876a90c3c3cae73a0c32bb9f5327f",
".git/objects/54/fdfd949916cc90e28ba4d196482b6aca570ede": "f8206f38cb0ba92f5795bcb5e0053840",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/6d/5270eb02edae1199116e4494a93a0b83eb300e": "fc76c4a409d19fdbe20f6931acbc8d98",
".git/objects/01/916500a398d137fc759355109ad32f31daae62": "d4cfd2eef1a6c37a1d31d0e0648e1680",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/3f27014a19670e1d0ada81a298ab374f278b93": "9af6c2fa7ade492c6137efc06ad06938",
".git/objects/90/83dc2dfcd31ce436aa30cf64c6a9c878ca9220": "7d31dd2ecdea66731509d2ada59760b4",
".git/objects/a0/8405533c0938da8f3de8df80171edcca4b6718": "6ab2287d1dd93826c610819f1620a9af",
".git/objects/b8/2e008f0d1abe42f0b4f45b052e38b8eccc8eb6": "4512a40550f1b516e873ac12e50b261e",
".git/objects/d2/d5e7abb3bb4589cf66bb83bb1ac2e05e11e1d7": "9845a1c2135d982a2c8150d5785bf066",
".git/objects/af/8de6a010f1eb16e90678f307e933ddaf6481d5": "7499456bd15fabe900ddaec7b38e0fad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/eb6076bcf7bed2265464621d73dbfd2165c179": "f188820a547c4db9002cefbd5d626cf2",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/ab835133c64741bccc6ee901e945bfc73ec0b7": "5f897dae334024e71156b118b7020730",
".git/objects/de/e7ffb231cb8d2cfd324420c6b9e0325d350c70": "821c999a2390a2322c75cf229b2bdb02",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/964dcff9c21c50014b4b1e52799c02955c5e76": "941935bbe5de60a1a9728a21c4d81f9c",
".git/objects/f0/a9fcbc8bbed65a1f2ea73044cff81526eb5426": "7ef0f6803ed8596c1c32ed66767e3cfe",
".git/objects/e8/b96a5e56d36a20481ca1d2d2bbc68915ffc932": "5828967820a2c104458c98130775d45c",
".git/objects/ff/a37dd1a3acf2b2357c3fcdf5935a56c335dfe4": "36369f83830ce28521cc6295e5279c99",
".git/objects/c2/eafc27c90d2048428f5cf393f9a1934ab5aff3": "9d1ac4edb01687c2af14651c0e00f0c1",
".git/objects/ce/92dbe9960f6c47fe77c7c89f0ced1c42f9dddf": "bccb1a7fac9cc008502c70abe45f4b9d",
".git/objects/e0/0235bf8b0030580307c550b74dd0ae09bd8521": "c2970027d3af54345bce7e1a0030047a",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ddffddcf6ad7136523156d5aace3910457f2b2": "694571801fed71d9bc8e23758c220b5c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f4a6a86f665b7a5f021279519301124d65460b": "48bcc69dbbfbf8b2de213f17836aa0c9",
".git/objects/41/b42a75552e8c237618b7936e021b8058167bc7": "c61b7e2a26b18726308d271121a677f1",
".git/objects/48/646c4a4c4334b7b9466c55ac96b6ee408497bf": "78ae8eb6b2b4abdf250cf807690ceb9b",
".git/objects/1c/c217fca532b3a22d5fe0b4e503288f6df37229": "8a992e3290274b9671f463a526584bd9",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/bac880f53f654aa8cdbd639fad81dc253b4f8c": "f64774dbcce99bb0eb4e479acb6bdd25",
".git/objects/78/00224c67e7ea4532dc3a44d1eb0f05a814e771": "540fa1831e45c484b9c573be2913c5cd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "339ca474271120d2f656b855d5e15cb9",
".git/logs/refs/heads/master": "a49e8307d0e6c4b7dd6e27e9a79852f8",
".git/logs/refs/heads/main": "e71725d2dca3589a131b3214b21bc25a",
".git/logs/refs/remotes/origin/master": "71b2cb7f71ef7bb9fc8bdee6d3fbbc00",
".git/logs/refs/remotes/origin/main": "23b0c3214e1b20a303a6ae8b4c1d72af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "fd6c700445676f5f2628fac0d76d95fb",
".git/refs/heads/main": "3d4032c10b0287ff5d20cdac2fe0ebd1",
".git/refs/remotes/origin/master": "fd6c700445676f5f2628fac0d76d95fb",
".git/refs/remotes/origin/main": "3d4032c10b0287ff5d20cdac2fe0ebd1",
".git/index": "9bbc0e771fbe5c915c3d18e40a5423f7",
".git/COMMIT_EDITMSG": "50d2933cc838154abc870b87e4ea9212",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "8f3e5fed49b467caf489c79e45010567",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4c9fc11cc2189bc816397bda8a398b38",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
