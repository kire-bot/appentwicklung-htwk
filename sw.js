const worker = self
const staticCacheName = 'site-static-v2'
const dynamicCacheName = 'site-dynamic-v1'
const assets = [
  '/',
  '/index.html',
  '/pages/fallback.html',
  '/assets/scripts/index.js',
  '/assets/styles/index.css',
  '/assets/styles/modules/button.css',
  '/assets/styles/modules/general.css',
  '/assets/styles/modules/header.css',
  '/assets/styles/modules/post.css',
  '/assets/styles/modules/about-me.css',
  '/assets/styles/modules/variables.css',
  '/assets/images/icon.png',
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.82/dist/themes/light.css',
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.82/dist/shoelace.js',
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap'
]

// Cache size limit
function limitCacheSize(name, size) {
  chaches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delte(keys[0]).then(limitCacheSize(name, size))
      }
    })
  })
}

worker.addEventListener('install', (event) => {
  console.log('Service Worker installed')
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('Caching assets')
      // On error: Are all paths in assets[] correct?
      cache.addAll(assets)
    })
  )
})

worker.addEventListener('activate', (event) => {
  console.log('Service Worker activated')
  event.waitUntil(
    /**
     * If new cache key is used, delete old one.
     */
    caches.keys().then((keys) => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      )
    })
  )
})

worker.addEventListener('fetch', (event) => {
  event.respondWith(
    /**
     * If fetched resource is in cache, return path to cache. If not,
     * try normal fetch and place path in dynamic cache.
     * If nothing is found (offline), go to fallback.html.
     */
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request).then((fetchRes) => {
        return caches.open(dynamicCacheName).then((cache) => {
          cache.put(event.request.url, fetchRes.clone())
          limitCacheSize(dynamicCacheName, 3)
          return fetchRes
        })
      })
    }).catch((e) => {
      if (event.request.url.indexOf('.html') > -1) {
        // Only return fallback if the request is for an html page.
        // Todo: Is also not working for /pages/settings, because of the missing .html!
        return caches.match('/pages/fallback.html')
      }
    })
  )
})