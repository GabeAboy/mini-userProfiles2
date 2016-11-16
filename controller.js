// angular.module('userProfiles').controller('MainController', function($scope, mainService) {
//
//   $scope.getUsers = function() {
//   	$scope.users = mainService.getUsers();
//   };
//
//
//   $scope.getUsers();
//
// });
angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    //enter the service scified function once recieved data then
    //define $scope.users
    mainService.getUsers().then(function(response) {
      $scope.users = response.data.data;
    });
  }
  $scope.getUsers();
});
