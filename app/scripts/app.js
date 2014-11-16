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
      'firebase'
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
        .when('/clients', {
          templateUrl: 'views/clients.html',
          controller: 'ClientCtrl'
        })
        .when('/tasks', {
          templateUrl: 'views/tasks.html',
          controller: 'TaskCtrl'
        })
        .when('/surfaces', {
          templateUrl: 'views/surfaces.html',
          controller: 'SurfaceCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

})();
