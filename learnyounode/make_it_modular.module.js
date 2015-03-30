var fs = require('fs');
var path = require('path');
module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err);

    var matches = list.filter(function (filename) {
      return path.extname(filename) === '.' + ext;
    })
    callback(null, matches);
  });
};
