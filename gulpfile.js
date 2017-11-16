var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', function() {
  // place code for your default task here

  gulp.src('images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))

});

