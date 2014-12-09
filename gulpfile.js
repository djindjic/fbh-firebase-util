var gulp_runner = require('gulp'),
    shell_link  = require('gulp-shell'),
    watch_files = require('gulp-watch');

gulp_runner.task('default', function(cb) {
  watch_files(['lib/**/*'], shell_link.task(['jspm link github:djindjic/fbh-firebase-util@0.0.14 -y']));
});