var gulp = require('gulp'),
path = require('path'),
gulpNSP = require('gulp-nsp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(cb){

        gulpNSP({
            package: 'C:/Users/mcoleman/Desktop/recruiting/package.json',
            stopOnError: false,
            output: 'summary'
        }, cb);
        browserSync.init({
            notify: false,
            server: {
                baseDir: "src"
            }
        });
        watch('./src/index.html', function() {
            browserSync.reload();
        });
    
        watch('./src/styles/**/*.css', function() {
            gulp.start('cssInject');
        });

        watch('./src/js/*.js', function() {
            gulp.start('scriptsRefresh');
        });
    });
    
    gulp.task('cssInject', ['styles'] ,function(){
        return gulp.src('./src/temp/styles/styles.css')
        .pipe(browserSync.stream());
    });

    gulp.task('scriptsRefresh', ['scripts'], function() {
        browserSync.reload();
    });