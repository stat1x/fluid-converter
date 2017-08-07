import gulp from 'gulp';
import browser from 'browser-sync';
import config from '../gulp.config';

gulp.task('serve', () => {
    browser.init({
        server: config.distPath
    });
});

gulp.task('prod', ['serve'], () => {
	gulp.start('javascript', 'images', 'template', 'sass');
});
