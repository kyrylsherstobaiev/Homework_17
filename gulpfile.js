var gulp = require('gulp'),
	watch = require('gulp-watch'),
	prefixer = require('gulp-autoprefixer'),
	rigger = require('gulp-rigger'),
	cssmin = require('gulp-minify-css');

gulp.task('html', function () {
	return gulp.src('*.html')
		.pipe(rigger())
		.pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
	return gulp.src('script/*.js')
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('fonts', function () {
	return gulp.src('fonts/*.*')
		.pipe(gulp.dest('dist/fonts/'));
});

gulp.task('css', function () {
	return gulp.src('css/*.css')
		.pipe(prefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('images', function () {
	return gulp.src('img/*/*')
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', function () {
	watch('*.html', gulp.series('html'));
	watch('*.js', gulp.series('js'));
	watch('*.*', gulp.series('fonts'));
	watch('css/*.css', gulp.series('css'));
	watch('img/*/*', gulp.series('imgages'));
});

gulp.task('default', gulp.series('html', 'css', 'images', 'js', 'fonts'));