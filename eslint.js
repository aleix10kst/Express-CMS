var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function(){
    gulp.task('lint',function () {
        return gulp.src([

        ])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });
};