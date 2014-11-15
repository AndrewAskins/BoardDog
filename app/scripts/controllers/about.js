'use strict';

/**
 * @ngdoc function
 * @name boardDogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the BoardDog
 */
angular.module('BoardDog')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
