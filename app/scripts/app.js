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
      'gantt',
      'selectize',
      'firebase',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/auth.html',
          controller: 'AuthCtrl'
        })
        .when('/schedule', {
          templateUrl: 'views/schedule.html',
          controller: 'ScheduleCtrl'
        })
        .when('/admin', {
          templateUrl: 'views/admin.html',
          controller: 'AdminCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

})();
