var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task ('previewDist', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathsToCopy = [
        './src/**/*',
        '!./src/*.html',
        '!./src/images/**',
        '!./src/styles/**',
        '!./src/temp',
        '!./src/temp/**'

    ]
    return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

gulp.task('deleteDistFolder', function() {
    return del("./docs");
});

gulp.task('optomizeImages', ['deleteDistFolder'], function() {
    return gulp.src(['./src/images/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
    gulp.start("usemin");
});

gulp.task('usemin', ['styles', 'scripts'], function (){
    return gulp.src("./src/*.html")
    .pipe(usemin({
        css: [function() {return rev()}, function() {return cssnano()}],
        js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles','optomizeImages', 'useminTrigger']);
