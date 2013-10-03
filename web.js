var express = require("express");
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(16);
  out = fs.readFileSync("index.html", "utf8", function (err,data) {
    if (err) {
		return err;
	}
	return data;
  });
  buffer.write(out, "utf-8")
  response.send(buffer.toString("utf-8"));
});

app.get('/', function(request, response) {
  fs.readFileSync("index.html", "utf8", function (err,data) {
    if (err) {
		return console.log(err);
	}
	console.log(data);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
