/**
 * @ngdoc function
 * @name boardDogApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the BoardDog
 */
 (function(undefined) {
	'use strict';

	angular.module('BoardDog')
	  	   .controller('AuthCtrl', AuthCtrl);

	AuthCtrl.$inject = ['$scope', '$routeParams', '$filter'];

	function AuthCtrl($scope, $routeParams, $filter) {

	};

})();