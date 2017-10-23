var gulp = require('gulp');

var inlinesource = require('gulp-inline-source');
var webserver = require('gulp-webserver');
 
gulp.task('inlinesource', function () {
    var options = {
        compress: true
    };
 
    return gulp.src('./src/*.html')
        .pipe(inlinesource(options))
        .pipe(gulp.dest('./dist'));
});

gulp.task('webserver', function() {
    gulp.src('./dist')
    .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true
    }));
});

gulp.task('default', ['inlinesource'], function() {

});