// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {

        gulp.src('scss/*.scss')
            .pipe(sass()).on('error', function(error) {
                    console.log("Gulp choked! " + error);
                })
            .pipe(gulp.dest(function(f) {
                //console.log(f.base);
                return "c:\\Projects\\AdvancedCss\\Mod3Lab\\css\\";
            }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
})
