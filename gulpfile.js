var gulp = require('gulp'),
    markdown = require('gulp-markdown');

gulp.task('default', function () {
    gulp.src('src/*.markdown')
        .pipe(markdown())
        .pipe(gulp.dest('build'));
});
