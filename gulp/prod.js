import gulp from 'gulp';
import browser from 'browser-sync';
import config from '../gulp.config';


gulp.task('watch', () => {
	gulp.watch(config.src.stylesheets + '**/*.scss', ['sass', browser.reload]);
	gulp.watch(config.src.javascripts + '**/*.js', ['javascript', browser.reload]);
	gulp.watch(config.src.images + '**/*', ['images', browser.reload]);
	gulp.watch(config.src.templates + '**/*.html', ['template', browser.reload]);
});

gulp.task('prod', () => {
	gulp.start('javascript', 'images', 'template', 'sass');
});
