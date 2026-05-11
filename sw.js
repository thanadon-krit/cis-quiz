// ===== CIS Quiz Service Worker =====
const CACHE_NAME = 'cis-quiz-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './questions.js',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
];

// Install: cache all static assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first strategy (app works fully offline)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        // Cache new successful GET responses
        if (e.request.method === 'GET' && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      }).catch(() => cached); // fallback to cache on network error
    })
  );
});
