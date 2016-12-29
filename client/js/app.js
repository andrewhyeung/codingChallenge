var myApp = angular.module('myApp', ['ngRoute']); 

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'mainController',
		templateUrl: 'static/partials/home.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})