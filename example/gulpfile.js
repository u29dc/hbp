const gulp = require("gulp"),
	shell = require("gulp-shell"),
	workbox = require("workbox-build");

gulp.task("worker", () => {
	return workbox.generateSW({
		cacheId: "cache",
		globDirectory: "./public",
		globIgnores: ["**/index.xml", "**/index.json", "**/sitemap.xml"],
		globPatterns: ["**/*.{js,css,html}"],
		navigateFallback: "/404.html",
		sourcemap: false,
		swDest: "./public/worker.js",
		runtimeCaching: [
			{
				urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
				handler: "CacheFirst",
			},
			{
				urlPattern: /\.(?:json|xml)$/,
				handler: "NetworkOnly",
			},
		],
	});
});

gulp.task("terser", () => {
	return gulp.src("public/work*.js", { read: false }).pipe(shell(["terser <%= file.path %> -m -c -o <%= file.path %>"]));
});

gulp.task("default", gulp.series("worker", "terser"));
