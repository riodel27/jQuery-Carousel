var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

    gulp.task('sass', function(){
        return gulp.src('scss/*.scss')
              .pipe(sass())
              .pipe(gulp.dest('css'))
    });

    gulp.task('scripts',function(){
      return gulp.src('./js/app.js')
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./public/js'));
    });

    gulp.task('default',function(){
      gulp.watch('scss/**/*.scss', ['sass']);
      gulp.watch('./js/**/*.js',['scripts']);
    });
