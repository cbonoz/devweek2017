myApp.controller('LoginController', function($scope, CloverFactory, $window) {
  // $scope.user.membership = "member";
  console.log("login controller");
  $scope.login = function() {
    // CloverFactory.addNewCustomer($scope.user);
    $window.location.href="index.html#/calendar";
  }
  $scope.signup = function() {
    CloverFactory.addNewCustomer($scope.newUser.then(function successCallback(response) {
        alert("Congrats, " + $scope.newUser.fullName.split(" ")[0] + ". Please sign in.");
        $scope.newUser = null;
        delete $scope.newUser;
      console.log(response);
      return response;
    }, function errorCallback(response) {
      console.log(response);
    }));
    delete $scope.newUser;
  }
});