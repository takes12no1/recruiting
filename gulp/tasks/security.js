var gulp = require('gulp'),
gulpNSP = require('gulp-nsp');

//To check your project
gulp.task('nsp', function (cb) {
  gulpNSP({package: __dirname + '/package.json'}, cb);
});