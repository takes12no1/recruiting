var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('default', function() {
    console.log("default gulp task ran")
});

gulp.task('html', function(){
    console.log('File Changed');
});

gulp.task('styles', function(){
    console.log('CSS File Changed');
    return gulp.src('./src/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./src/temp/styles'));
});

gulp.task('watch', function(){

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
});

gulp.task('cssInject', ['styles'] ,function(){
    return gulp.src('./src/temp/styles/styles.css')
    .pipe(browserSync.stream());
});