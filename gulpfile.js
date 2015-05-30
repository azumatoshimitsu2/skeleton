var gulp        = require('gulp');
var compass     = require('gulp-compass');
var browserSync = require('browser-sync');
var jsdoc       = require("gulp-jsdoc");
 
gulp.task('compass', function(){
    gulp.src('./src/sass/*.scss').pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: './dist/css/',
        sass: './src/sass/'
    }));
});
 
gulp.task("browserSync", function () {
    browserSync({
        proxy: "localhost",
        startPath: "./dist/index.html"
    });
    // srcフォルダ以下のファイルを監視
    gulp.watch("src/**", function() {
        browserSync.reload();   // ファイルに変更があれば同期しているブラウザをリロード
    });
});
 
gulp.task("doc", function () {
    gulp.src("./dist/js/*.js").pipe(jsdoc('./documentation/'));
});


gulp.task('watch', function(){
    gulp.watch('./src/sass/*.scss', function(event) {
        gulp.run('compass');
        gulp.run('browserSync');
    });
});
  
gulp.task('default', function(){
    gulp.run('watch');
});