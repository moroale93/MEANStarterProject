angular.module('myApp').service('ApiRequester', ['$http', function($http) {
	this.addUser = function(user) {
		return $http.post("/rest-api/users", user);
	};

	this.getUsers = function() {
		return $http.get("/rest-api/users");
	};

	this.deleteAllUsers = function() {
		return $http.delete("/rest-api/users");
	};
}]);
