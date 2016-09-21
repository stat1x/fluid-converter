import gulp from 'gulp';
import directorySync  from 'gulp-directory-sync';
import config from '../gulp.config';

gulp.task('fonts', () => {
	return gulp.src('').pipe(directorySync(config.src.fonts, config.dist.fonts, {printSummary: true}));
});
