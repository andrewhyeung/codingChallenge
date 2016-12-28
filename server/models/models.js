var mongoose = require('mongoose'); 

var Schema = mongoose.Schema; 

var wallSchema = new mongoose.Schema({
	text: String, 
	created_at: {type: Date, default: new Date}, 
	location: String
})

mongoose.model('post', wallSchema);