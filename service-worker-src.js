const WB_VERSION = '5.0.0';
importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${WB_VERSION}/workbox-sw.js`);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'My-awesome-cache',
    precache: 'precache',
    runtime: 'runtime',
});

const expirationPlugin = new workbox.expiration.ExpirationPlugin({
    maxEntries: 10,
    maxAgeSeconds: 60 * 60 * 60,
});

new workbox.routing.registerRoute(
    new RegExp('https://cors-anywhere.herokuapp.com/'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'My-awesome-cache-api',
        plugins: [
            expirationPlugin
        ]
    })
);
  
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);