myApp.controller('LoginController', function($scope, CloverFactory, $window) {
  // $scope.user.membership = "member";
  console.log("login controller");
  $scope.login = function() {
    CloverFactory.getCloverData();
    $window.location.href="index.html#/calendar";
  }

});
