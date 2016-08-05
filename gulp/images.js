var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	config = require('../gulpconfig')();

gulp.task('images', () => {
	return gulp.src(config.src.images + '**/*')
		.pipe(plugins.imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest(config.dist.images));
});