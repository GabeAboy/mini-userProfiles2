angular.module('userProfiles').service('mainService', function($http) {


  this.getUsers = function() {
    return $http({
			method:'GET',
			url:'http://reqres.in/api/users?page=1'
			//REST get request to url linking you to a the webpage at a specific endpoint
		});
  };


});
