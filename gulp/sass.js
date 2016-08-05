var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	config = require('../gulpconfig')();

gulp.task('sass', () => {
	return gulp.src(config.src.stylesheets + '**/*.scss')
		.pipe(plugins.plumber())
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.autoprefixer({
			browsers: config.COMPATIBILITY
		}))
		.pipe(plugins.rename({
			suffix: '.min'
		}))
		.pipe(plugins.cleanCss())
		.pipe(gulp.dest(config.dist.stylesheets))
		.on('finish', () => {
			gulp.src(config.src.stylesheets + '**/*.scss').pipe(plugins.scssLint({
				config: '.scss-lint.yml'
			}))
		});
});
