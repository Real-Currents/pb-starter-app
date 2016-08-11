/*jshint strict:false */
/*jshint node:true */

var gulp       = require('gulp'),
  browserSync  = require('browser-sync').create(),
  del          = require('del'),
  minifyCss    = require('gulp-minify-css'),
  ngAnnotate   = require('gulp-ng-annotate'),
  autoprefixer = require('gulp-autoprefixer'),
  reload       = browserSync.reload,
  replace      = require('gulp-replace'),
  rev          = require('gulp-rev'),
  runSequence  = require('run-sequence'),
  sourcemaps   = require('gulp-sourcemaps'),
  uglify       = require('gulp-uglify'),
  usemin       = require('gulp-usemin'),
  sass         = require('gulp-sass'),
  sassdoc      = require('sassdoc');


var sassFiles = './app/assets/sass/**/*.{scss,sass}';
var cssFiles = './app/assets/css';
var cssBuildFiles = './build/assets/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compact'
};
var sassDistOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};
var autoprefixerOptions = {
  browsers: ['last 2 versions']
};
var sassdocOptions = {
  dest: './app/sassdoc'
};

gulp.task('sass', function () {
  return gulp
    .src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write()) // inline sourcemaps
    .pipe(gulp.dest(cssFiles))
    .pipe(browserSync.stream({match: '**/*.css'}));
});
gulp.task('sass-build', function () {
  return gulp
    .src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write()) // inline sourcemaps
    .pipe(gulp.dest(cssFiles))
    .pipe(gulp.dest(cssBuildFiles));
});

gulp.task('sass-dist', function () {
  // var cssfilter = filter('design_system.css', {restore: true})
  return gulp
    .src(sassFiles)
    .pipe(sass(sassDistOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(cssFiles))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sassdoc', function () {
  return gulp.src('./app/**/*.scss')
    .pipe(sassdoc(sassdocOptions));
});


//usemin
gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss, rev],
      vendorjs: [uglify({
        mangle: true
      }), rev],
      appjs: [
        replace('debug: true', 'debug: false'),
        ngAnnotate({
          remove: true,
          add: true,
          single_quotes: true
        }),
        uglify({
          mangle: true
        }),
        rev
      ]
    }))
    .pipe(gulp.dest('./build'));
});


//copy modules
gulp.task('copy:modules', [], function() {
  gulp.src([
      './app/modules/**/templates/**',
      './app/modules/**/assets/images/**/*.*'
    ])
    .pipe(gulp.dest('./build/modules'));
});


//copy core data json
gulp.task('copy:json-core-data', [], function() {
  gulp.src([
      './app/core/data/**/*.json'
    ])
    .pipe(gulp.dest('./build/core/data/'));
});


//copy fonts
gulp.task('copy:fonts', [], function() {
  gulp.src([
      './app/assets/fonts/*',
      './app/bower_components/bootstrap/dist/fonts/*',
      './app/bower_components/pb-design-system/dist/fonts/*',
    ])
    .pipe(gulp.dest('./build/assets/fonts'));
});


//copy images
gulp.task('copy:images', [], function() {
  gulp.src([
      './app/assets/images/**/*'
    ])
    .pipe(gulp.dest('./build/assets/images'));
});


// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
});


// run from the build folder
gulp.task('serve-build', [], function() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});


//build
gulp.task('build', [], function() {
  runSequence(
    'sass-build',
    'sass-dist',
    'usemin',
    'copy:modules',
    'copy:images',
    'copy:fonts',
    'copy:json-core-data'
  );
});


// run this to open project in browser and watch for changes in CSS
gulp.task('default', ['watch'], function() {});

// Watch
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(['app/assets/sass/**/*.scss', 'app/modules/**/*.scss'], {interval: 500}, ['sass']);
  gulp.watch(['app/core/**/*.js', 'app/modules/**/*.js', 'app/core/**/*.json'], {interval: 500}, reload);
  gulp.watch(['app/core/**/*.html', 'app/modules/**/*.html'], {interval: 500}, reload);
});
