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
	  	   		var ref = new Firebase('https://fiery-heat-9377.firebaseio.com/clients');
	  	   		// create an AngularFire reference to the data
			    var sync = $firebase(ref);
			    // download the data into a local object
			    $scope.clients = sync.$asArray();
				$scope.client = {
					id: Utils.uuid(),
					name: null,
					email: null,
					company_name: null,
					phone_number: null,
					color: ''
				};

				$scope.$watch('clients', function(newValue) {
					
				}, true);

				$scope.addClient = function() {
					$scope.clients.$add($scope.client);
				};
			}]);
})();