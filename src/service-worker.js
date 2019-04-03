const version = '0.1.4'

const currentCacheName = `cari-kontrakan-web-v$${version}`

const allStaticFiles = [
  '/',
  '/app.js',
  '/index.html'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentCacheName).then(function(cache) {
      cache.addAll(allStaticFiles)
    })
  )

  self.skipWaiting()
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response
      }

      return fetch(event.request)
    })
  )
})

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if(cacheName !== currentCacheName) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
