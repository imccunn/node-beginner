// var exec = require('child_process').exec;

var querystring = require('querystring'),
    fs = require('fs');

function start(response) {
  console.log('Request handler \'start\' was called.');

  var body = '<html>'+
             '<head>'+
             '<meta http-equiv="Content-Type" content="text/html; '+
             'charset=UTF-8" />'+
             '</head>'+
             '<body>'+
             '<form action="/upload" method="post">'+
             '<textarea name="text" rows="20" cols="60"></textarea>'+
             '<input type="submit" value="Submit text" />'+
             '</form>'+
             '</body>'+
             '</html>';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

/*
function start(response) {
  console.log('Request handler \'start\' was called');
  var content = 'empty';
  
  exec('find /',
       {timeout: 1000, maxBuffer: 20000*1024},
       function (error, stdout, stderr) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(stdout);
        response.end();
       });

  
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }  

}
*/


function upload(response, postData) {
  console.log('Request handler \'upload\' was called');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You\'ve sent: ' + querystring.parse(postData).text);
  response.end();
}

function show(response) {
  console.log('Request handler \'show\' was called.');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream('/tmp/test.png').pipe(response);

}

module.exports.start = start;
module.exports.upload = upload;
module.exports.show = show;

