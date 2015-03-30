var mymodule = require('./make_it_modular.module.js');
var dir = process.argv[2];
var extname = process.argv[3];
mymodule(dir, extname, function (err, list) {
  list.forEach(function (file) {
    console.log(file);
  });
});
