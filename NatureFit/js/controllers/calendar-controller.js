myApp.controller('CalendarController', function($scope, CloverFactory, $window) {
  // $scope.user.membership = "member";
  // var cloverData = CloverFactory.initiateCloverCall()

  CloverFactory.getCloverData()
  .then(function(cloverData) {
    $scope.cloverData = cloverData;
    console.log($scope.cloverData);
  })

});
