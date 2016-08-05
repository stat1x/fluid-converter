var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	config = require('../gulpconfig')();

gulp.task('vendors', () => {
	return gulp.src('').pipe(plugins.directorySync(config.src.vendors, config.dist.vendors, {printSummary: true}));
});
