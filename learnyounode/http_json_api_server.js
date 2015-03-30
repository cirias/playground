var http = require('http');
var parser = require('url').parse;
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var urlInfo = parser(req.url, true);
  if (urlInfo.pathname === '/api/parsetime') {
    var date = new Date(urlInfo.query.iso);
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }));
  } else if (urlInfo.pathname === '/api/unixtime') {
    var date = new Date(urlInfo.query.iso);
    res.end(JSON.stringify({
      unixtime: date.getTime()
    }));
  } else {
    res.end();
  }
});
server.listen(process.argv[2]);
