let srcPath = 'src/',
	distPath = 'dist/',
	config = {
	distPath: distPath,
	srcPath: srcPath,
	src: {
		javascripts: srcPath + 'JavaScript/',
		stylesheets: srcPath + 'Scss/',
		images: srcPath + 'Images/',
		vendors: srcPath + 'Vendors/',
		templates: srcPath + 'Templates/',
		fonts: srcPath + 'Fonts/'
	},
	dist: {
		javascripts: distPath + 'JavaScript/',
		stylesheets: distPath + 'Css/',
		images: distPath + 'Images/',
		vendors: distPath + 'Vendors/',
		templates: distPath + 'Templates/',
		fonts: distPath + 'Fonts/'
	},
	COMPATIBILITY: [
		'last 2 versions',
		'ie >= 9',
		'and_chr >= 2.3'
	],
	gulphelp: {
		options: {
			"hideEmpty": true,
			"hideDepsMessage": true,
			"description": ''
		}
	}
};

export default config;
