const worker = self

worker.addEventListener('install', (event) => {
  console.log('Service Worker installed')
})

worker.addEventListener('activate', (event) => {
  console.log('Service Worker activated')
})

worker.addEventListener('fetch', (event) => {
  console.log('Fetch event', event)
})