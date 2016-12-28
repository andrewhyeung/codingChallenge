var main = require('./../controllers/mainController.js')

module.exports = function(app){
	app.post('/addpost', function(req,res){
		main.addPost(req, res);
	})
	app.get('/getPosts', function(req, res){
		main.getPosts(req, res);
	})
}