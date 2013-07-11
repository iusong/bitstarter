var fs = (require 'fs');
var express = require('express');

var app = express.createServer(express.logger());

var output = fs.readFileSync("./index.html");
app.get('/', function(request, response) {
  var buf = new Buffer(output.length);
  buf.write(output,"utf-8");
  response.send(buf.toString('utf-8'));
//  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
