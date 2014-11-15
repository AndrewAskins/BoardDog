'use strict';

/**
 * @ngdoc function
 * @name boardDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boardDogApp
 */
angular.module('boardDogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
