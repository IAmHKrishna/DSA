var app = angular.module('apiApp', []);

app.controller('UserCtrl', function($scope, $http) {
  $scope.users = [];

  $http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
      $scope.users = response.data;
    }, function(error) {
      console.error('API error:', error);
    });
});
