"use strict";

var version = "v1::",
	offline = ["", "/"];

// console.log("WORKER: executing.");

self.addEventListener("install", function (e) {
	// console.log("WORKER: install event in progress.");
	e.waitUntil(
		caches
			.open(version + "fundamentals")
			.then(function (e) {
				return e.addAll(offline);
			})
			.then(function () {
				// console.log("WORKER: install completed");
			})
	);
});

self.addEventListener("fetch", function (e) {
	// console.log("WORKER: fetch event in progress.");
	"GET" === e.request.method
		? e.respondWith(
				caches.match(e.request).then(function (n) {
					var t = fetch(e.request)
						.then(function (n) {
							var t = n.clone();
							return (
								// console.log("WORKER: fetch response from network.", e.request.url),
								caches
									.open(version + "pages")
									.then(function (n) {
										return n.put(e.request, t);
									})
									.then(function () {
										// console.log("WORKER: fetch response stored in cache.", e.request.url);
									}),
								n
							);
						}, o)
						.catch(o);
					// console.log("WORKER: fetch event", n ? "(cached)" : "(network)", e.request.url), n || t;
					return null;

					function o() {
						return (
							// console.log("WORKER: fetch request failed in both cache and network."),
							new Response("<h1>Service Unavailable</h1>", {
								status: 503,
								statusText: "Service Unavailable",
								headers: new Headers({ "Content-Type": "text/html" }),
							})
						);
					}
				})
		  )
		: // console.log("WORKER: fetch event ignored.", e.request.method, e.request.url);
		  null;
});

self.addEventListener("activate", function (e) {
	// console.log("WORKER: activate event in progress.");
	e.waitUntil(
		caches
			.keys()
			.then(function (e) {
				return Promise.all(
					e
						.filter(function (e) {
							return !e.startsWith(version);
						})
						.map(function (e) {
							return caches.delete(e);
						})
				);
			})
			.then(function () {
				// console.log("WORKER: activate completed.");
			})
	);
});
