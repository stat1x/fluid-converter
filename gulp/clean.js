import gulp from 'gulp';
import clean from 'gulp-clean';
import config from '../gulp.config';

gulp.task('clean', () => {
	return gulp.src(config.distPath + '/**/*.*', {read: false})
		.pipe(clean({force: true}));
});