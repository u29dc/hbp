const cssnano = require("cssnano"),
	imports = require("postcss-import"),
	importUrl = require("postcss-import-url"),
	mixins = require("postcss-mixins"),
	nested = require("postcss-nested"),
	postCSSPresetEnv = require("postcss-preset-env"),
	url = require("postcss-url");

module.exports = () => ({
	plugins: [
		importUrl({}),
		url,
		imports,
		mixins,
		nested,
		postCSSPresetEnv({
			stage: 1,
		}),
		cssnano({
			preset: [
				"default",
				{
					discardComments: {
						removeAll: true,
					},
				},
			],
		}),
	],
});
