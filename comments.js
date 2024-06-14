// Create web server 
// 1. load http module
var http = require('http');

// 2. create http server
http.createServer(function (req, res) {
  // 3. set response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // 4. set response content    
  res.end('Hello World\n');

}).listen(8080);

console.log('Server running on port 8080.');

// 5. open browser and type http://localhost:8080/ in address bar
// 6. you will see 'Hello World' on browser