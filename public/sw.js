var CACHE_NAME = 'mr.house';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/0.bundle.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});