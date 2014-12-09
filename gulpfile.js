var gulp  = require('gulp'),
    shell = require('gulp-shell'),
    watch = require('gulp-watch');
 
gulp.task('default', function(cb) {
  watch(['lib/**/*'], shell.task(['jspm link github:djindjic/fbh-firebase-util@0.0.14 -y']));
});