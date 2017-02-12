myApp.factory('CloverFactory', function($http) {
  var factory = {};
  var cloverData = $http.get('https://apisandbox.dev.clover.com:443/v3/merchants/YSCK4AFAGQB12?access_token=883b7001-8342-74b0-5182-78279c24f6b2')
  .then(function(data) {
    return data;
  });
  var customers = $http.get('https://apisandbox.dev.clover.com:443/v3/merchants/YSCK4AFAGQB12/customers?access_token=883b7001-8342-74b0-5182-78279c24f6b2&expand=emailAddresses,phoneNumbers,metadata')
  .then(function(data) {
    console.log(data);
    return data;
  });
  // var customersList = $http.get('https://apisandbox.dev.clover.com:443/v3/merchants/YSCK4AFAGQB12/customers?access_token=883b7001-8342-74b0-5182-78279c24f6b2');
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

  factory.getCustomerData = function() {
    console.log(customers);
    return customers;
  }

  factory.addNewCustomer = function(newUser) {
    console.log(newUser);
    console.log("add new customer function");
    var firstName = newUser.fullName.split(" ")[0];
    var lastName = newUser.fullName.split(" ")[1];
    // https://apisandbox.dev.clover.com:443/v3/merchants/YSCK4AFAGQB12/customers?access_token=883b7001-8342-74b0-5182-78279c24f6b2
    var body = {
    "firstName": firstName,
    "lastName": lastName,
    "metadata": {
      "password": newUser.password,
      "affiliation": newUser.affiliation
    },
      "emailAddresses": [{"emailAddress": newUser.email}],
      "marketingAllowed": false,
      "phoneNumbers": [{"phoneNumber": newUser.phoneNumber}]
    };
    console.log(body);
    $http({
      method: 'POST',
      url: 'https://apisandbox.dev.clover.com:443/v3/merchants/YSCK4AFAGQB12/customers?access_token=883b7001-8342-74b0-5182-78279c24f6b2',
      data: body
    }).then(function successCallback(response) {

      return true;
    }, function errorCallback(response) {
      console.log(response);
      return
    });
  }

return factory;
});
