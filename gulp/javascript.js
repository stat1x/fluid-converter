import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint  from 'gulp-eslint';
import config from '../gulp.config';

gulp.task('javascript', ['javascript:build', 'javascript:lint']);

gulp.task('javascript:build', () => {
	browserify(config.src.javascripts + 'Main.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()
		.pipe(source('App.js'))
		.pipe(buffer())
		.pipe(gulp.dest(config.dist.javascripts));
});

gulp.task('javascript:lint', () => {
	return gulp.src(config.src.javascripts + '**/*.js').pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});
