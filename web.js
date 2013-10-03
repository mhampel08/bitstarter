var express = require("express");
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  out = fs.readFileSync("index.html", "utf8", function (err,data) {
    if (err) {
		return err;
	}
	return data;
  });
  response.send(out);
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
