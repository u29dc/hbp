const gulp = require("gulp"),
	shell = require("gulp-shell"),
	workbox = require("workbox-build");

gulp.task(
	"worker",
	gulp.series(
		function () {
			return workbox.generateSW({
				cacheId: "u29dc",
				globDirectory: "./public",
				globIgnores: ["**/index.xml", "**/index.json", "**/sitemap.xml"],
				globPatterns: ["**/*.{js,css,html}"],
				navigateFallback: "/404.html",
				sourcemap: false,
				swDest: "./public/worker.js",
				runtimeCaching: [
					{
						urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico|webmanifest)$/,
						handler: "CacheFirst",
					},
					{
						urlPattern: /\.(?:json|xml)$/,
						handler: "NetworkOnly",
					},
				],
			});
		},
		function () {
			return gulp.src("public/work*.js", { read: false }).pipe(shell(["terser <%= file.path %> -m -c -o <%= file.path %>"]));
		}
	)
);

gulp.task("default", gulp.series("worker"));
