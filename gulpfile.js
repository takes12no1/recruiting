var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');


gulp.task('default', function() {
    console.log("default gulp task ran")
});

gulp.task('html', function(){
    console.log('File Changed');
});

gulp.task('styles', function(){
    console.log('CSS File Changed');
    return gulp.src('./src/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./src/temp/styles'));
});

gulp.task('watch', function(){
    watch('./src/index.html', function() {
        gulp.start('html');
    });

    watch('./src/styles/*.css', function() {
        gulp.start('styles');
    });
});