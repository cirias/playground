var http = require('http');
var concat = require('concat-stream');
http.get(process.argv[2], function (response) {
  response.pipe(concat(function (data) {
    console.log(data.toString());
    http.get(process.argv[3], function (response) {
      response.pipe(concat(function (data) {
        console.log(data.toString());
        http.get(process.argv[4], function (response) {
          response.pipe(concat(function (data) {
            console.log(data.toString())
          }));
        });
      }));
    });
  }));
});

