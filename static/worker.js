"use strict";

var version = "v1::",
	offlineFundamentals = ["", "/"];

self.addEventListener("install", function (e) {
	e.waitUntil(
		caches
			.open(version + "fundamentals")
			.then(function (e) {
				return e.addAll(offlineFundamentals);
			})
			.then(function () {})
	);
});

self.addEventListener("fetch", function (e) {
	"GET" === e.request.method &&
		e.respondWith(
			caches.match(e.request).then(function (n) {
				var t = fetch(e.request)
					.then(function (n) {
						var t = n.clone();
						return (
							caches
								.open(version + "pages")
								.then(function (n) {
									return n.put(e.request, t);
								})
								.then(function () {}),
							n
						);
					}, a)
					.catch(a);
				return n || t;
				function a() {
					return new Response("<h1>Service Unavailable</h1>", {
						status: 503,
						statusText: "Service Unavailable",
						headers: new Headers({ "Content-Type": "text/html" }),
					});
				}
			})
		);
});

self.addEventListener("activate", function (e) {
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
			.then(function () {})
	);
});
