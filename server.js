var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request for ' + pathName + ' received.'); 
     
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var content = route(handle, pathName);
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

module.exports.start = start;
