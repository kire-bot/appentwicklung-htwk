const worker = self
const staticCacheName = 'site-static'
const assets = [
  '/',
  '/index.html',
  '/assets/scripts/index.js',
  '/assets/styles/index.css',
  '/assets/styles/modules/buttons.css',
  '/assets/styles/modules/general.css',
  '/assets/styles/modules/header.css',
  '/assets/styles/modules/newsfeed.css',
  '/assets/styles/modules/profile.css',
  '/assets/styles/modules/variables.css',
  '/assets/images/icon.png',
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.82/dist/themes/light.css',
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.82/dist/shoelace.js',
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap'
]

worker.addEventListener('install', (event) => {
  console.log('Service Worker installed')
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('Caching assets')
      cache.addAll(assets)
    })
  )
})

worker.addEventListener('activate', (event) => {
  console.log('Service Worker activated')
})

worker.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request)
    })
  )
})