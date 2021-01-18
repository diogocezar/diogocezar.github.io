const cacheName = 'diogocezar.dev'
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([
      '/',
      '/index.html',
      '/assets/docs/diogocezar.pdf',
      '/assets/fonts/AGaramondPro-Italic.eot',
      '/assets/fonts/AGaramondPro-Italic.otf',
      '/assets/fonts/AGaramondPro-Italic.svg',
      '/assets/fonts/AGaramondPro-Italic.ttf',
      '/assets/fonts/AGaramondPro-Italic.woff',
      '/assets/fonts/AGaramondPro-Regular.eot',
      '/assets/fonts/AGaramondPro-Regular.otf',
      '/assets/fonts/AGaramondPro-Regular.svg',
      '/assets/fonts/AGaramondPro-Regular.ttf',
      '/assets/fonts/AGaramondPro-Regular.woff',
      '/assets/fonts/AGaramondPro-Semibold.eot',
      '/assets/fonts/AGaramondPro-Semibold.otf',
      '/assets/fonts/AGaramondPro-Semibold.svg',
      '/assets/fonts/AGaramondPro-Semibold.ttf',
      '/assets/fonts/AGaramondPro-Semibold.woff',
      '/assets/fonts/AGaramondPro-SemiboldItalic.eot',
      '/assets/fonts/AGaramondPro-SemiboldItalic.otf',
      '/assets/fonts/AGaramondPro-SemiboldItalic.svg',
      '/assets/fonts/AGaramondPro-SemiboldItalic.ttf',
      '/assets/fonts/AGaramondPro-SemiboldItalic.woff',
      '/assets/fonts/AkzidenzGroteskBE-Bold.eot',
      '/assets/fonts/AkzidenzGroteskBE-Bold.otf',
      '/assets/fonts/AkzidenzGroteskBE-Bold.svg',
      '/assets/fonts/AkzidenzGroteskBE-Bold.ttf',
      '/assets/fonts/AkzidenzGroteskBE-Bold.woff',
      '/assets/fonts/AkzidenzGroteskBE-Regular.eot',
      '/assets/fonts/AkzidenzGroteskBE-Regular.otf',
      '/assets/fonts/AkzidenzGroteskBE-Regular.svg',
      '/assets/fonts/AkzidenzGroteskBE-Regular.ttf',
      '/assets/fonts/AkzidenzGroteskBE-Regular.woff',
      '/assets/images/agency/angie.svg',
      '/assets/images/agency/boyband.svg',
      '/assets/images/agency/esss.svg',
      '/assets/images/agency/hardera.svg',
      '/assets/images/agency/kokar.svg',
      '/assets/images/agency/products-of-tomorrow.jpg',
      '/assets/images/main-customers/70FA8DB8D8E3FDC5.jpg',
      '/assets/images/main-customers/70FA8DB8D8E3FDC7.jpg',
      '/assets/images/main-customers/70FA8DB8D8E3FDCB.jpg',
      '/assets/images/main-customers/brahma.svg',
      '/assets/images/main-customers/gillette.svg',
      '/assets/images/main-customers/lacta.svg',
      '/assets/images/main-customers/recco.svg',
      '/assets/images/main-customers/skol.svg',
      '/assets/images/main-customers/sonho-de-valsa.svg',
      '/assets/images/main-customers/subway.svg',
      '/assets/images/main-customers/twitter.svg',
      '/assets/images/main-customers/visa.svg',
      '/assets/images/main-customers/volkswagen.svg',
      '/assets/images/musical/fernando-e-sorocaba.jpg',
      '/assets/images/musical/henrique-e-diego.jpg',
      '/assets/images/musical/inimigos-da-hp.jpg',
      '/assets/images/musical/jads-e-jadson.jpg',
      '/assets/images/musical/joao-gustavo-e-murilo.jpg',
      '/assets/images/musical/marcos-e-belutti.jpg',
      '/assets/images/musical/michel-telo.jpg',
      '/assets/images/social-networks/footer/footer-facebook.svg',
      '/assets/images/social-networks/footer/footer-github.svg',
      '/assets/images/social-networks/footer/footer-instagram.svg',
      '/assets/images/social-networks/footer/footer-linkedin.svg',
      '/assets/images/social-networks/footer/footer-twitter.svg',
      '/assets/images/social-networks/github.svg',
      '/assets/images/social-networks/instagram.svg',
      '/assets/images/social-networks/linkedin.svg',
      '/assets/images/social-networks/skype.svg',
      '/assets/images/social-networks/twitter.svg',
      '/assets/images/social-networks/youtube.svg',
      '/assets/images/social-networks/facebook.svg',
      '/assets/images/social-networks/flickr.svg',
    ])
      .then(() => self.skipWaiting())),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => response || fetch(event.request)),
  )
})
