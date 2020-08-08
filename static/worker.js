"use strict";

var cacheName = location.host;
var cacheFiles = ["", "/", "/index.html", "/js/main.min.js", "/css/main.min.css"];

// install service worker
self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(cacheName).then(function (cache) {
			return cache.addAll(cacheFiles);
		})
	);
});

// fetch content
self.addEventListener("fetch", function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response !== undefined) {
				return response;
			} else {
				return fetch(event.request).then(function (response) {
					let responseClone = response.clone();
					caches.open(cacheName).then(function (cache) {
						cache.put(event.request, responseClone);
					});
					return response;
				});
			}
		})
	);
});
