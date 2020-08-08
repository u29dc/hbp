window.onload = () => {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("../worker.js")
			.then(function (reg) {
				if (reg.installing) {
					// console.log("[Service worker] installing");
				} else if (reg.waiting) {
					// console.log("[Service worker] installed");
				} else if (reg.active) {
					// console.log("[Service worker] active");
				}
			})
			.catch(function (error) {
				// console.log("[Service worker] failed with " + error);
			});
	}
};
