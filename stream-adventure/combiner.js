var combine = require('stream-combiner');
var zlib = require('zlib');
var split = require('split');
var through = require('through');

// Official Solution:

// module.exports = function () {
//     var grouper = through(write, end);
//     var current;
//
//     function write (line) {
//         if (line.length === 0) return;
//         var row = JSON.parse(line);
//
//         if (row.type === 'genre') {
//             if (current) {
//                 this.queue(JSON.stringify(current) + '\n');
//             }
//             current = { name: row.name, books: [] };
//         }
//         else if (row.type === 'book') {
//             current.books.push(row.name);
//         }
//     }
//     function end () {
//         if (current) {
//             this.queue(JSON.stringify(current) + '\n');
//         }
//         this.queue(null);
//     }
//
//     return combine(split(), grouper, zlib.createGzip());
// };

module.exports = function () {
  var book = {
    data: null,
    write: function (row) {
      if (!row) return;
      row = JSON.parse(row);
      if (row.type === 'genre') {
        if (this.data) {
          this.queue(JSON.stringify(this.data) + '\n');
        }
        this.data = {
          name: row.name,
          books: []
        };
      } else {
        this.data.books.push(row.name);
      }
    },
    end: function () {
      this.queue(JSON.stringify(this.data) + '\n');
      this.emit('end');
    }
  };

  return combine(
    split(),
    through(book.write, book.end),
    zlib.createGzip()
  );
};
