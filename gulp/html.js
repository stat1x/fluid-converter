var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	config = require('../gulpconfig')();

gulp.task('html', () => {
	return gulp.src(config.srcPath + 'Templates/**/*.html')
		.pipe(plugins.nunjucksRender({
			path: [config.srcPath + 'Templates/']
		}))
		.pipe(gulp.dest(config.distPath + 'Templates/'));
});
