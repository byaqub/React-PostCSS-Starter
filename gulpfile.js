const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  watch = require('gulp-watch'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  imports = require('postcss-import'),
  nested = require('postcss-nested');

gulp.task('default', () => {
  gulp.start('watch');
})

gulp.task('watch', () => {
  watch('./src/styles/**/*.css', () => {
    gulp.start('styles');
  })
})

gulp.task('styles', () => {
  return gulp.src('./src/styles/styles.css')
  .pipe(postcss([imports, nested, cssvars, autoprefixer]))
  .pipe(gulp.dest('./src'))
})

