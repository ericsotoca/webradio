const CACHE_NAME = 'sotoca-radio-cache-v1';
// Adapter le chemin de base pour GitHub Pages
const BASE_PATH = '/'; // Changez ceci par '/votre-repo/' si nécessaire

const urlsToCache = [
    BASE_PATH,
    BASE_PATH + 'index.html',
    BASE_PATH + 'styles.css',
    BASE_PATH + 'script.js',
    BASE_PATH + 'logo.jpg',
    BASE_PATH + 'manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => {
                // Fallback vers la page d'accueil en cas d'erreur
                return caches.match(BASE_PATH + 'index.html');
            })
    );
});
