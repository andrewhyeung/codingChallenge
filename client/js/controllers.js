myApp.controller('mainController', function($scope, $http){
	// $scope.loadMore = function() {
	// 	console.log('hi'); 

	// }
	// $scope.post = function(data){
	// 	//if post is empty, send back error message
	// 	if(data.text.length > 0){
	// 		wallFactory.post(data, function(response){
	// 			$scope.posts.push(response);  
	// 			$scope.comment = {};
	// 		}); 
	// 	}	
	// 	else{
	// 		console.log('error')
	// 	}
	// }
	// wallFactory.get(function(response){
	// 	$scope.posts = response;
	// })
	// mainFactory.get(function(response){
	// 	console.log(response);
	// })
	function fetch(){
		$http.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
	}
	$scope.$watch('search', function(){
		fetch()
	})
})