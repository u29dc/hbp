"serviceWorker" in navigator &&
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("../worker.js")
			.then((r) => {})
			.catch((r) => {
				console.error("[Service Worker]", r);
			});
	});
