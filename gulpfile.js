var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: "01 - Image Galary"
    }
  });

  gulp.watch(["*.html", "*.js", "*.css"]).on("change", reload);
});

//