myApp.controller('mainController', function($scope, mainFactory){
	$scope.header = []; 
	$scope.cart = [];
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

	$scope.addCart = function(product){
		console.log(product);
		$scope.cart.push(1);

	}
	mainFactory.get(function(response){
		// console.log(response);
		$scope.header = response;
		$scope.products = response.products;
	})

})