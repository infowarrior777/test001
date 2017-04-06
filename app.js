var express = require('express');

var app = express();






app.get('/', function (req, res){
	res.sendFile('/nodeprojects/HD1/index.html');
});

app.get('/page1', function (req, res){
	res.sendFile('/nodeprojects/HD1/page1.html');
});

app.get('/page2', function (req, res){
	res.sendFile('/nodeprojects/HD1/page2.html');
});


app.get('/page3', function (req, res){
	res.sendFile('/nodeprojects/HD1/page3.html');
});





app.listen(3000, function (){
	console.log('Im listening on port 3000!');
});

