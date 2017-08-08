import gulp from "gulp";
import plumber from "gulp-plumber";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import scssLint from "gulp-scss-lint";
import cleanCss from "gulp-clean-css";
import sourceMaps from "gulp-sourcemaps";
import config from "../gulp.config";

gulp.task('sass', () => {
	return gulp.src(config.src.stylesheets + '**/*.scss')
		.pipe(plumber())
		.pipe(sourceMaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: config.COMPATIBILITY
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(cleanCss())
		.pipe(sourceMaps.write())
		.pipe(gulp.dest(config.dist.stylesheets));
});
