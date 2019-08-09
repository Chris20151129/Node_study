var http = require("http");
var url = require("url");

function onRequest(request, response) {
    response.write('hello');
    response.end();
  }
  http.createServer(onRequest).listen(8889);
  console.log("Server has started.");
