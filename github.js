(function(){


	// this method will be invoked in MainController and we return the 	username and repos
	var github = function($http){

		var getUser = function(username){

			return $http.get('https://api.github.com/users/'+username)
						.then(function(response){
							return response.data;
						});
		};

		var getRepos = function(user){

			return $http.get(user.repos_url)
						.then(function(response){
							return response.data;
						});
		};


		var getRepoDetails = function(username, reponame){
			var repo;

			var repoUrl="https://api.github.com/repos/" + username + "/" + reponame;
			return $http.get(repoUrl)
					.then(function(response){
						 repo=response.data;
						 return $http.get(repoUrl + "/collaborators");
					})
					.then(function(response){
						repo.collaborators = response.data;
						return repo;
					});
		};

		return {
			getUser : getUser,
			getRepos : getRepos,
			getRepoDetails : getRepoDetails
		};

	};

	// Get the reference to the Main Module github. Similar to #include
	var module = angular.module('Github');
	module.factory("github", github)

}());