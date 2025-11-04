// Service Worker for POS System
self.addEventListener("install", (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log('Service Worker activating...');
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // For now, just pass through all requests
  event.respondWith(fetch(event.request));
});