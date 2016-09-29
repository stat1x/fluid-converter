import gulp from 'gulp';
import directorySync  from 'gulp-directory-sync';
import config from '../gulp.config';

gulp.task('vendors', () => {
	return gulp.src([
		config.src.vendors + '**/*.min.*',
		config.src.vendors + '**/*.pack.*',
		config.src.vendors + '**/default.css',
		config.src.vendors + '**/arta.css',
		'!' + config.src.vendors + '**/extras/**',
		'!' + config.src.vendors + '**/external/**',
		'!' + config.src.vendors + '**/templates/**'
	]).pipe(gulp.dest(config.dist.vendors));
});
