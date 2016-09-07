var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    sass    = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename  = require('gulp-rename'),
    browserSync = require('browser-sync'),
    del     = require('del'),
    reload  = browserSync.reload;

var inputJs   = 'app/js/**/*.js',
    inputScss = 'app/scss/**/*.scss',
    inputHtml = 'index.html',
    outputJs  = 'app/js/',
    outputCss = 'app/';

gulp.task('scripts',  function(){
  gulp.src([inputJs, '!app/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(outputJs))
  .pipe(reload({stream: true}))
});

gulp.task('sass', function(){
  gulp.src(inputScss)
  .pipe(plumber())
  .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest(outputCss))
  .pipe(reload({stream: true}))
});

gulp.task('html', function(){
  gulp.src('index.html')
  .pipe(reload({stream: true}))
});

// ////////////////////////////////////////////////
// Browser-Sync Tasks
// // /////////////////////////////////////////////

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app/"
        }
    });
});


gulp.task('watch', function(){
  gulp.watch(inputJs, ['scripts']);
  gulp.watch(inputScss, ['sass']);
  gulp.watch(inputHtml, ['html']);
});

gulp.task('default', ['scripts', 'sass', 'html', 'browser-sync', 'watch']);
