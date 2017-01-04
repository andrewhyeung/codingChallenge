myApp.factory('mainFactory', function($http){
	var factory = {}; 
	// factory.post = function(post, callback){
	// 	$http.post('/addpost', post).success(function(output){
	// 		callback(output);
	// 	})
	// }
	factory.get = function(callback){
		$http.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').success(function(output){
			callback(output);
		})
		.error(function(data){
			alert(data); 
			console.log('Error ' + data)
		})
	}
	return factory; 
})