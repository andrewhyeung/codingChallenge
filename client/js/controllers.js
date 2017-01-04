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
	$scope.retailPricing = function(product){
		console.log(product.defaultPriceInCents);

		product.defaultPriceInCents = product.defaultPriceInCents;
	}
	$scope.wholesalePricing = function(product){
		console.log(product.defaultPriceInCents); 
		product.defaultPriceInCents = product.defaultPriceInCents* 0.80;
	}
	$scope.addCart = function(product){
		$scope.cart.push(product);
		console.log($scope.cart);
	}
	$scope.removeCart = function(product){
		$scope.cart.splice(product,1);
		console.log($scope.cart);
	}

	mainFactory.get(function(response){
		$scope.header = response;
		$scope.products = response.products;
	})

})