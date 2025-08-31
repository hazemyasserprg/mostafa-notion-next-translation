// Basic service worker
const CACHE_NAME = 'mostafa-yasser-v1';
const urlsToCache = [
  '/',
  '/en',
  '/ar',
  '/icon.png',
  '/logos/lightLogo.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
      )
  );
});
