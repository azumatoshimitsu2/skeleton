var gulp       = require('gulp');
var compass    = require('gulp-compass');
var rename     = require('gulp-rename');
var fs         = require("fs");
var uglify     = require("gulp-uglify");
var concat     = require("gulp-concat");
var styleguide = require('sc5-styleguide');
var outputPath = '../styleguide/';
 
gulp.task('compass', function(){
    gulp.src('sass/*.scss').pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: '../dist/css/',
        sass: 'sass/'
    }));
});

gulp.task('concat', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./js'));
});
gulp.task('minify', ['concat'], function() {
    return gulp.src('./js/lib.js')
        .pipe(uglify())
        .pipe(rename('lib.min.js')) 
        .pipe(gulp.dest('../dist/js/'));
});

gulp.task('js', ['concat', 'minify']);

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', function(event) {
        gulp.run('compass');
    });
});

gulp.task('styleguide:generate', function() {
  return gulp.src('sass/*.scss')
    .pipe(styleguide.generate({
        title: 'My Styleguide',
        server: true,
        rootPath: outputPath,
        showCss: false,
        overviewPath: outputPath + 'README.md',
        extraHead: '<style>html, body { font-size: 10px; } .sg.sg-wrapper { max-width: 1000px; }</style>',
        afterBody: '<script>document.getElementsByClassName("view-index")[0].setAttribute("id", "container")</script>'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('sass/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      comments: false,
      sass: 'sass/',
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('watch', ['styleguide'], function() {
  gulp.watch(['sass/*.scss'], ['styleguide']);
});

gulp.task('default', function(){
    gulp.run('watch');
});
