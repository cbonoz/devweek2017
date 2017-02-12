// DON'T USE mm.foundation
'use strict';
var myApp = angular.module("myApp",['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './partials/login.html'
    })
    .when('/login', {
      templateUrl: './partials/login.html'
    })
    .when('/calendar', {
      templateUrl: './partials/calendar.html'
    })
    .when('/history', {
      templateUrl: './partials/history.html'
    })
    .when('/rewards', {
      templateUrl: './partials/rewards.html'
    })
    .when('/roster', {
      templateUrl: './partials/roster.html'
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
