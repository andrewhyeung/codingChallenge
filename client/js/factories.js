myApp.factory('mainFactory', function($http){
	var factory = {}; 
	// factory.post = function(post, callback){
	// 	$http.post('/addpost', post).success(function(output){
	// 		callback(output);
	// 	})
	// }
	// factory.get = function(callback){
	// 	$http.get('/getPosts').success(function(output){
	// 		callback(output);
	// 	})
	// }
	return factory; 
})