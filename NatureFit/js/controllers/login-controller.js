myApp.controller('LoginController', function($scope, CloverFactory, $window) {
  // $scope.user.membership = "member";
  console.log("login controller");
  $scope.login = function() {
    // CloverFactory.addNewCustomer($scope.user);
    $window.location.href="index.html#/calendar";
  }
  $scope.signup = function() {
    CloverFactory.addNewCustomer($scope.newUser);
    delete $scope.newUser;
  }
});