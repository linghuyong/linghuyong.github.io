var gulp = require('gulp');

var inlinesource = require('gulp-inline-source');
var webserver = require('gulp-webserver');
var postcss = require('gulp-postcss');
var adaptive = require('postcss-adaptive');
 
gulp.task('inlinesource', function () {
    var options = {
        compress: true
    };
 
    return gulp.src('./src/*.html')
        .pipe(inlinesource(options))
        .pipe(gulp.dest('./dist'));
});

gulp.task('postcss', function () {
    var processors = [adaptive({ remUnit: 75 })];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
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

gulp.task('default', ['inlinesource', 'postcss'], function() {

});