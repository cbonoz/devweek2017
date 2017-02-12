// DON'T USE mm.foundation
'use strict';
var myApp = angular.module("myApp",['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/site/fin/ofd/internal/sales/cnt2543948.html',
    })
    .when('/start', {
      templateUrl: '/site/fin/ofd/internal/sales/cnt2543948.html'
    })    
    .when('/system', {
      templateUrl: '/site/fin/ofd/internal/sales/cnt2547618.html'
    })  
    .when('/structure', {
      templateUrl: '/site/fin/ofd/internal/sales/cnt2639938.html'
    })  
    .when('/credit', {
      templateUrl: '/site/fin/ofd/internal/sales/cnt2573538.html'
    })  
    .when('/contracts', {
      templateUrl: '/site/fin/ofd/internal/sales/cnt2573543.html'
    })  
    .when('/close', {
      templateUrl: '/site/fin/ofd/internal/sales/cnt2573544.html'
    })  
    .when('/search', {
      templateUrl: '/site/fin/ofd/internal/sales/cnt2586304.html'
    })  
    .otherwise({
      redirectTo: '/'
    })
});