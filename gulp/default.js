var gulp = require('gulp'),
	browser = require('browser-sync'),
	config = require('../gulpconfig')();

gulp.task('build', ['clean', 'sass', 'javascript']);

gulp.task('serve', ['build'], function () {
	browser.init({server: config.distPath});
});

gulp.task('watch', () => {
	gulp.watch(config.src.stylesheets + '**/*.scss', ['sass', browser.reload]);
	gulp.watch(config.src.javascripts + '**/*.js', ['javascript', browser.reload]);
	gulp.watch(config.src.vendors + '**/*', ['vendors', browser.reload]);
	gulp.watch(config.src.images + '**/*', ['images', browser.reload]);
	gulp.watch(config.src.templates + '**/*.html', ['html', browser.reload]);
});

gulp.task('default', ['watch', 'serve'], () => {
	gulp.start('javascript', 'images', 'html', 'sass', 'vendors');
});
