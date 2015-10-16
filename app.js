(function () {
	
	var app = angular.module('Github',["ngRoute"]);

	app.config(function($routeProvider) {
		$routeProvider
		.when("/main",{
			templateUrl:"main.html",
			controller: "MainController"
		})
		.when("/user/:username",{
			templateUrl:"user.html",
			controller:"UserController"
		})
		.when("/user/:username/:reponame",{
			templateUrl:"repo.html",
			controller:"RepoController"
		})
		.otherwise({
			redirectTo:"/main"
		});
	});


}());