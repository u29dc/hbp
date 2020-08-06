window.onload = () => {
	if ("serviceWorker" in navigator) {
		// console.log("CLIENT: service worker registration in progress.");
		navigator.serviceWorker.register("../worker.js").then(
			null
			// function () {
			// 	console.log("CLIENT: service worker registration complete.");
			// },
			// function () {
			// 	console.log("CLIENT: service worker registration failure.");
			// }
		);
	} else {
		// console.log("CLIENT: service worker is not supported.");
	}
};
