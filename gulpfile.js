var gulp = require('gulp');
var atom = require('gulp-download-atom-shell');

gulp.task('download-atom', function(cb){
    atom({
      version: '0.20.3',
      outputDir: 'build'
    }, cb);
});


gulp.task('default', function() {

});