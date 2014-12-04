var Promise        = require('promise'),
    gulp           = require('gulp'),
    del            = require('del'),
    $              = require('gulp-load-plugins')();

var startServer = function(){
  return new Promise(function (fulfil) {
    gulp.src('./www')
      .pipe($.webserver({
        port: 9000,
        livereload: true,
        fallback: 'index.html'
      }))
      .on('end', fulfil);
  });
};

var styles = function() {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding app styles');
    gulp.src(['app/bundle_assets/styles/**/*.css'])
      .pipe($.concat('style.css'))
      .pipe($.minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(gulp.dest('./www/styles'))
      .on('end', fulfil);
    });
};

var fonts = function() {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding app fonts');
    gulp.src(['app/bundle_assets/fonts/**/*'])
      .pipe($.flatten())
      .pipe(gulp.dest('./www/fonts'))
      .on('end', fulfil);
    });
};

var indexHtml = function () {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding index.html');
    gulp.src('./app/index.html')
      .pipe($.htmlmin({
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./www'))
      .pipe($.shell(['cd app && jspm bundle-sfx src/main ../www/script.js']))
      .on('end', fulfil);
    });
};

var clean = function (paths) {
  return new Promise(function (fulfil) {
    $.util.log('Clear:');
    paths.forEach(function(path) {
      $.util.log('-' + path);
    });
    del(paths, fulfil);
  });
};

gulp.task('default',
  function() {
    // clean(['www'])
    // .then(styles)
    // .then(fonts)
    // .then(indexHtml)
    // .then(startServer);
    startServer();
  }
);