module.exports = function () {
	var srcPath = 'src/',
		distPath = 'dist/';
	config = {
		distPath: distPath,
		srcPath: srcPath,
		src: {
			javascripts: srcPath + 'JavaScript/',
			stylesheets: srcPath + 'Scss/',
			images: srcPath + 'Images/',
			vendors: srcPath + 'Vendors/',
			templates: srcPath + 'Templates/'
		},
		dist: {
			javascripts: distPath + 'JavaScript/',
			stylesheets: distPath + 'Css/',
			images: distPath + 'Images/',
			vendors: distPath + 'Vendors/',
			templates: distPath + 'Templates/'
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

	return config;
};
