var gulp  = require('gulp');
var atom  = require('gulp-download-atom-shell');
var bower = require('gulp-bower');
var sass  = require('gulp-sass');

//--- Download atom shell ------------------------------------------------------
gulp.task('download-atom', function(cb){
    atom({
      version: '0.20.3',
      outputDir: 'build'
    }, cb);
});

//--- Download dependencies using bower ----------------------------------------
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('dependencies/'))
});

//--- Compiel scss to css ------------------------------------------------------
gulp.task('scss', function () {
    gulp.src('./css/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});


//--- Main ---------------------------------------------------------------------
gulp.task('default', ['download-atom', 'bower'], function() {
});