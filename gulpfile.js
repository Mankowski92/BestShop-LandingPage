var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass", function () {
  return gulp
    .src("scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"));
});
gulp.task("watch", function () {
  gulp.watch("scss/**/*.scss", gulp.series("sass"));
});

// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var del = require("del");

// gulp.task("styles", () => {
//   return gulp
//     .src("scss/style.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(gulp.dest("css"));
// });

// gulp.task("clean", () => {
//   return del(["css/style.css"]);
// });

// gulp.task("default", gulp.series(["clean", "styles"]));

// gulp.task("watch", () => {
//   gulp.watch("./scss/**/*.scss", (done) => {
//     gulp.series(["clean", "styles"])(done);
//   });
// });
