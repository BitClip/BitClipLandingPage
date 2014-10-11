var express = require('express');
var ejs = require('ejs');

var app = express();
var port = process.env.PORT || 3000;


app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.render('index.html');
});

app.listen(port, function(){
	console.log("on port 3000");
});