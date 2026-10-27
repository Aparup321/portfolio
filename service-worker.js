const CACHE_NAME = 'aparup-portfolio-v2';
const NETWORK_FIRST_PATHS = new Set([
  '/',
  '/index.html',
  '/styles/main.css',
  '/js/terminal.js',
  '/js/enhancements.js',
  '/js/pwa.js',
  '/js/site.js',
  '/manifest.webmanifest',
]);
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/js/terminal.js',
  '/js/enhancements.js',
  '/js/pwa.js',
  '/js/site.js',
  '/manifest.webmanifest',
  '/assets/fonts/montserrat-latin.woff2',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/images/logo.png',
  '/assets/images/batcave-bg.jpg',
  '/assets/images/batcave-bg.webp',
  '/assets/images/portrait.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate' || NETWORK_FIRST_PATHS.has(requestUrl.pathname)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      }
      return response;
    }))
  );
});
