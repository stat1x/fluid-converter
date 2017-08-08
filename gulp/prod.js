import gulp from 'gulp';

gulp.task('heroku:production', () => {
	gulp.start('javascript', 'images', 'template', 'sass');
});
