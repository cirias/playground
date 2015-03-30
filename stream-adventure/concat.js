var concat = require('concat-stream');

// Offical Solution:

// process.stdin.pipe(concat(function (src) {
//     var s = src.toString().split('').reverse().join('');
//     console.log(s);
// }));

process.stdin.pipe(concat(function (buf) {
  // this.queue(buf);
  console.log(Array.prototype.reverse.call(buf).toString());
}));
