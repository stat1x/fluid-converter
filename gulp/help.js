var config = require('../gulpconfig.js')(),
	plugins = require('gulp-load-plugins')(),
	gulp = plugins.help(require('gulp'), config.gulphelp.options);

gulp.task('help', plugins.taskListing);