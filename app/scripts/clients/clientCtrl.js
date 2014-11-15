/**
 * @ngdoc function
 * @name boardDogApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the BoardDog
 */
 (function(undefined) {
	'use strict';

	angular.module('BoardDog')
	  	   .controller('ClientCtrl', ['$scope', '$routeParams', '$firebase', function ($scope, $routeParams, $firebase) {
				this.client = {
					id: Utils.uuid(),
					name: null,
					email: null,
					company_name: null,
					phone_number: null,
					color: ''
				};

				$scope.addClient = function() {
					console.log($scope.client);
				};
			}]);
})();