const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const livereload = require('gulp-livereload');
const webserver = require('gulp-webserver');
 
gulp.task('minify', () => {
  return gulp.src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./public'))
    .pipe(livereload());
});

gulp.task('minify-css', () => {
  return gulp.src('./src/assets/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(livereload());
});

gulp.task('compress', function () {
  return gulp.src('./src/js/**/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
        .pipe(livereload());
});

exports.images = () => (
  gulp.src('./src/assets/images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./public/assets/images'))
      .pipe(livereload())
);

gulp.task('stream', function () {
gulp.watch('./src/**/*.html', gulp.series('minify'))
gulp.watch('./src/assets/**/*.css', gulp.series('minify-css'))
gulp.watch('./src/assets/**/*', gulp.series('images'))
gulp.watch('./src/js/**/*.js', gulp.series('compress'))
});

gulp.task('webserver', function() {
gulp.src('./public')
  .pipe(webserver({
    livereload: true,
    open: true,
    enable: true,
    fallback: 'index.html',
  }));
});

gulp.task('default', gulp.parallel(['webserver', 'stream']));







// var less = require('gulp-less');
// var path = require('path');
 
// gulp.task('less', function () {
//   return gulp.src('./src/assets/less/**/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./src/assets/css'));
// });

// var LessAutoprefix = require('less-plugin-autoprefix');
// var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
 
// return gulp.src('./src/assets/less/**/*.less')
//   .pipe(less({
//     plugins: [autoprefix]
//   }))
//   .pipe(gulp.dest('./public/assets/css'));













