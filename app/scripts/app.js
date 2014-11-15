/**
 * @ngdoc overview
 * @name BoardDog
 * @description
 * # BoardDog
 *
 * Main module of the application.
 */

(function(undefined) {
  'use strict';

  angular
    .module('BoardDog', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'firebase'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/auth.html',
          controller: 'AuthCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/addClient', {
          templateUrl: 'views/addClient.html',
          controller: 'ClientCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

})();
