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
  
workbox.precaching.precacheAndRoute([{"revision":"05a5eb02f91d835311f15a980480de53","url":"app.js"},{"revision":"ad2a6305e4a4bb5556eb791e5b4e60f6","url":"cypress.json"},{"revision":"27a3bcc2e4f95afbc74c8928ba0072df","url":"cypress/fixtures/example.json"},{"revision":"c3fe4023192a5f2e6874da36b9b5e4ea","url":"cypress/integration/spec.js"},{"revision":"e210be5e00aa7afd947c21e027f62590","url":"cypress/plugins/index.js"},{"revision":"26925ea194e46867bca43b758c0c586a","url":"cypress/support/commands.js"},{"revision":"b393644ed524f0514b95437c0796f383","url":"cypress/support/index.js"},{"revision":"c7b0a69b300ac69acf080196d410d57a","url":"icon.svg"},{"revision":"f71fe5c6707b13f22f070bd24bc11162","url":"index.html"},{"revision":"aa8d29bb14a711c9dff3aba58ff9fba6","url":"manifest.json"},{"revision":"3c65148994d7dbb16a06cfa338a6fd2d","url":"package-lock.json"},{"revision":"241c1d82ad79010b836d8fd8034acfb2","url":"package.json"},{"revision":"a61cc333471b186baff8906973c87e89","url":"workbox-config.js"}]);