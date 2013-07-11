var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var fs = require('fs');
  var output = fs.readFileSync("index.html");
  var buf = new Buffer(output,"utf-8");
//  var end = buf.write(output,"utf-8");
  response.send(buf.toString("utf-8",0,output.length));
//  response.send(output);
//  response.send("hellow");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
