(function(){

	angular.module('Github')
	.controller('MainController', ['$scope', '$location', function($scope, $location){


	$scope.search = function(username){
		$location.path("/user/"+username);
	};	


	$scope.username = 'angular';
	}]);

}());