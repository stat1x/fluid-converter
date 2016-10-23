import gulp from'gulp';
import nunjucksRender from 'gulp-nunjucks-render';
import config from '../gulp.config';

gulp.task('template', () => {
	return gulp.src(config.srcPath + 'Templates/*.html')
		.pipe(nunjucksRender({
			path: [config.srcPath + 'Templates/']
		}))
		.pipe(gulp.dest(config.distPath));
});
