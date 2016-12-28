var express = require('express'); 
var path = require('path'); 
var bodyParser = require('body-parser'); 

var app = express(); 
var mongoose = require('mongoose'); 

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, './client')));

// require('./server/config/mongoose.js'); 
// require('./server/config/routes.js')(app); 

app.listen(8000, function(){
	console.log('listening on port 8000'); 
})