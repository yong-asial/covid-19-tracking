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
  
workbox.precaching.precacheAndRoute([{"revision":"22ffaed1dbaefff24ceb71241bccd9bb","url":"app.js"},{"revision":"c7b0a69b300ac69acf080196d410d57a","url":"icon.svg"},{"revision":"f71fe5c6707b13f22f070bd24bc11162","url":"index.html"},{"revision":"aa8d29bb14a711c9dff3aba58ff9fba6","url":"manifest.json"},{"revision":"8de4f324f4264bdea1ba5da6607b2dba","url":"package-lock.json"},{"revision":"afdc86b1523f80ffc944201060d2bc8e","url":"package.json"},{"revision":"a61cc333471b186baff8906973c87e89","url":"workbox-config.js"}]);