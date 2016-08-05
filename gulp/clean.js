var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	config = require('../gulpconfig')();

gulp.task('clean', () => {
	return gulp.src(config.distPath + '/**/*.*', {read: false})
		.pipe(plugins.clean({force: true}));
});