'use strict';

/**
 * @ngdoc function
 * @name boardDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the BoardDog
 */
angular.module('BoardDog')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
