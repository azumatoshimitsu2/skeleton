var gulp    = require('gulp');
var compass = require('gulp-compass');
 
gulp.task('compass', function(){
    gulp.src('sass/*.scss').pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: '../dist/css/',
        sass: 'sass/'
    }));
});

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', function(event) {
        gulp.run('compass');
    });
});
  
gulp.task('default', function(){
    gulp.run('watch');
});
