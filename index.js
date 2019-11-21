const cmd = process.argv[2]
const sass = require('node-sass');
const fs = require('fs-extra')
const path = require('path');
const chokidar = require('chokidar');
var globImporter = require('node-sass-glob-importer');

const src = __dirname + '/src/sass/';
const watcher = chokidar.watch(src, {
  persistent: true
});
const walker = function (p, fileCallback, errCallback) {
  fs.readdir(p, function (err, files) {
    if (err) {
      errCallback(err);
      return;
    }
    files.forEach(function (f) {
      let fp = path.join(p, f);
      if (fs.statSync(fp).isDirectory()) {
        walker(fp, fileCallback);
      } else {
        fileCallback(fp);
      }
    });
  });
};
const compleScss = function (scss_filename) {
  let name = path.basename(scss_filename);
  if (name.endsWith('.scss') && !name.startsWith('_')) {
    sass.render({
      file: scss_filename,
      includePaths: ['src/sass/'],
      outputStyle: "compressed", //nested, expanded, compact
      importer: globImporter()
    }, (error, result) => {
      if (error) {
        console.log(error.status);
        console.log(error.column);
        console.log(error.message);
        console.log(error.line);
      }
      else {
        let dist = scss_filename.replace(".scss", ".css");
        dist = dist.replace("/src/sass/", "/dist/assets/css/");
        console.log('outputFile : ', dist);
        fs.outputFile(dist, result.css, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }
    });
  }
}
watcher.on('ready', function () { console.log("chokidar ready"); })
  .on('change', function (file) { walker(src, compleScss); console.log("Update : " + file); });