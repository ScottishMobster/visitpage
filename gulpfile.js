var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.watch('page/scss/**/*.scss', ['sass'])
	return gulp.src('page/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('page/css'))
});

