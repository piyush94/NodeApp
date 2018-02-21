var http = require('http');
var myDateTime = require('./myDateTime');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("The date and time are currently: " + myDateTime.myDateTime() + "<br/><br/>" + req.url);
}).listen(8080);