var http = require('http');

// site = 'http://localhost:' + port;

http.createServer(function (request, response) {
    response.write('CS搭建的服务器');
    response.end();
}).listen(80);

console.log('Static file server running at\n => /\nCTRL + C to shutdown');
