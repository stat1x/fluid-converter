var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	plugins = require('gulp-load-plugins')(),
	config = require('../gulpconfig')();

var DEPS = [
	'./' + config.src.vendors + 'jquery/dist/jquery.js',
	'./' + config.src.vendors + 'tether/dist/js/tether.js',
	'./' + config.src.vendors + 'bootstrap/dist/js/bootstrap.js'
];

gulp.task('javascript', ['javascript:build', 'javascript:lint']);

gulp.task('javascript:build', function() {
	bundleApp(false);
});

gulp.task('javascript:lint', function() {
	return gulp.src(config.src.javascripts + '**/*.js').pipe(plugins.eslint())
		.pipe(plugins.eslint.format())
		.pipe(plugins.eslint.failOnError());
});

var scriptsCount = 0;

function bundleApp(isProduction) {
	scriptsCount++;
	var appBundler = browserify({
		entries: config.src.javascripts + 'Main.js',
		debug: true
	});

	if (!isProduction && scriptsCount === 1) {
		browserify({
			require: DEPS,
			debug: true
		})
			.bundle()
			.on('error', plugins.util.log)
			.pipe(source('Vendors.js'))
			.pipe(gulp.dest(config.dist.javascripts));
	}
	if (!isProduction) {
		DEPS.forEach(function (dep) {
			appBundler.external(dep);
		})
	}

	appBundler
		.transform("babelify", {presets: ["es2015"]})
		.bundle()
		.on('error', plugins.util.log)
		.pipe(source('Main.js'))
		.pipe(gulp.dest(config.dist.javascripts));
}

