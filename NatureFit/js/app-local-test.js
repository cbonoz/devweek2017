// DON'T USE mm.foundation
'use strict';
var myApp = angular.module("myApp",['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './partials/start.html'
    })
    .when('/start', {
      templateUrl: './partials/start.html'
    })    
    .when('/system', {
      templateUrl: './partials/system.html'
    })  
    .when('/structure', {
      templateUrl: './partials/structure-test.html'
    })  
    .when('/credit', {
      templateUrl: './partials/credit.html'
    })  
    .when('/contracts', {
      templateUrl: './partials/contracts.html'
    })  
    .when('/close', {
      templateUrl: './partials/close.html'
    })  
    .when('/search', {
      templateUrl: './partials/search.html'
    })  
    .otherwise({
      redirectTo: '/'
    });
});