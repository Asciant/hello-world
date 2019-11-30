var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from iMac\n');
}).listen(8080, '10.130.97.47');
console.log('Server running at http://10.130.97.47:8080/');
