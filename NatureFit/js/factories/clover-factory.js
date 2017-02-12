myApp.factory('CloverFactory', function($http) {
  var factory = {};
  var cloverData = $http.get('https://apisandbox.dev.clover.com:443/v3/merchants/YSCK4AFAGQB12?access_token=883b7001-8342-74b0-5182-78279c24f6b2')
  .then(function(data) {
    return data;
  });
  // factory.initiateCloverCall = function() {
  //   $http({
  //     method: 'GET',
  //     url: 'https://apisandbox.dev.clover.com:443/v3/merchants/YSCK4AFAGQB12?access_token=883b7001-8342-74b0-5182-78279c24f6b2'
  //   }).then(function successCallback(response) {
  //     cloverData = response;
  //     console.log(response);
  //     return response;
  //   }, function errorCallback(response) {
  //     console.log(response);
  //   });


    //   'http://localhost:8000/index.html', function(result) {
    //   console.log(result);


  factory.getCloverData = function() {
    console.log(cloverData);
    return cloverData;
  }


return factory;
});
