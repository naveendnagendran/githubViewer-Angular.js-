(function(){

	angular.module('Github')
	.controller('UserController', ['$scope','github','$routeParams', function($scope, github, $routeParams){
		
	var onError = function(response){
		$scope.error= "Could not fetch the user :("
	};


	var onUserComplete = function(data){
			$scope.user = data;
			github.getRepos($scope.user)
			.then(onRepos, onError);
		};


	var onRepos = function(data){
		$scope.repos= data;
	};

	$scope.search = function(username){
			github.getUser(username)
			.then(onUserComplete, onError);
		};	


	$scope.username = $routeParams.username;
	$scope.repoSortOrder = '+name';
	github.getUser($scope.username).then(onUserComplete, onError);	
	}]);
}());