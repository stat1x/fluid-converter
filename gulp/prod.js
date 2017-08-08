import gulp from 'gulp';
import browser from 'browser-sync';
import config from '../gulp.config';

gulp.task('serve', () => {
    browser.init({
        server: config.distPath,
        open: false
    });
});

gulp.task('heroku:production', () => {
	gulp.start('javascript', 'images', 'template', 'sass');
});
