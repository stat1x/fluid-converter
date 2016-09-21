import gulp from 'gulp';
import imagemin  from 'gulp-imagemin';
import config from '../gulp.config';

gulp.task('images', () => {
	return gulp.src(config.src.images + '**/*')
		.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest(config.dist.images));
});