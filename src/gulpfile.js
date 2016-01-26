var gulp    = require('gulp');
var compass = require('gulp-compass');
var rename = require('gulp-rename');
var ejs = require("gulp-ejs");
var fs = require("fs");
 
gulp.task('compass', function(){
    gulp.src('sass/*.scss').pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: '../dist/css/',
        sass: 'sass/'
    }));
});

gulp.task('ejs', function(){
    var jsonData = require('./json/pages.json');
    
    jsonData.pages.forEach(function (data, index) {
        console.log(data.title);
        //PC
        gulp.src("./ejs/template.ejs")
           .pipe(ejs({
                data:{
                    title: data.title,
                    imageSrc: data.imageSrc,
                }
            }))
            .pipe(rename(data.page+".html")) //出力ファイル名を指定
            .pipe(gulp.dest("../dist/"+data.dir)); //ファイル出力先を設定
    });
});

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', function(event) {
        gulp.run('compass');
    });
});
  
gulp.task('default', function(){
    gulp.run('watch');
});
