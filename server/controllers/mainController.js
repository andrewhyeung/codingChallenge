var mongoose = require('mongoose'); 
var Post = mongoose.model('post');

module.exports = {
	addPost: function(req, res){
		var newPost = new Post(req.body); 
		newPost.save(function(err, results){
			if(err){
				console.log(err); 
			}
			else{
				// console.log(results); 
				res.json(results); 
			}
		})
	}, 
	getPosts: function(req, res){
		Post.find({}).sort({created_at: -1}).exec(function(err, results){
			if(err){
				console.log('getPosts error: ', err);
			}
			else{
				// console.log('this is the result of find {} query', results); 
				res.json(results); 
			}
		})
	}
}