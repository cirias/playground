var zlib = require('zlib');
var crypto = require('crypto');
var tar = require('tar');
var through = require('through');

var parser = tar.Parse();
parser.on('entry', function (entry) {
  if (entry.type === 'File') {
    entry.pipe(crypto.createHash('md5', { encoding: 'hex' })).pipe(through(function (buf) {
      this.queue(buf + ' ' + entry.path + '\n');
    })).pipe(process.stdout);
  }
});
process.stdin.pipe(crypto.createDecipher(process.argv[2], process.argv[3])).pipe(zlib.createGunzip()).pipe(parser);

// Official Solution:

// var parser = tar.Parse();
// parser.on('entry', function (e) {
//     if (e.type !== 'File') return;
//
//     var h = crypto.createHash('md5', { encoding: 'hex' });
//     e.pipe(h).pipe(through(null, end)).pipe(process.stdout);
//
//     function end () { this.queue(' ' + e.path + '\n') }
// });
//
// var cipher = process.argv[2];
// var pw = process.argv[3];
// process.stdin
//     .pipe(crypto.createDecipher(cipher, pw))
//     .pipe(zlib.createGunzip())
//     .pipe(parser)
// ;
