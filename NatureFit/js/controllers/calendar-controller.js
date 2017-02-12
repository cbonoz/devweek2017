myApp.controller('CalendarController', function($scope, CloverFactory, $window) {
  // $scope.user.membership = "member";
  // var cloverData = CloverFactory.initiateCloverCall()
  // CloverFactory.addNewCustomer();
  CloverFactory.getCloverData()
  .then(function(cloverData) {
    $scope.cloverData = cloverData;
    // $scope.customersList = cloverData.data;
    console.log($scope.customersList);
  })
  CloverFactory.getCustomerData()
  .then(function(customersList) {
    console.log(customersList.data["elements"]);
    $scope.customersList = customersList.data["elements"];
  })

});
