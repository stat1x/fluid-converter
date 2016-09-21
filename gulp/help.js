import gulp from 'gulp';
import help from 'gulp-help';
import taskListing from 'gulp-task-listing';
import config from '../gulp.config';

help(gulp, config.gulphelp.options);

gulp.task('help', taskListing);