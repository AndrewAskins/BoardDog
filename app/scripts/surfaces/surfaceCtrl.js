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
	  	   .controller('SurfaceCtrl', ['$scope', '$routeParams', '$filter', '$firebase', function AuthCtrl($scope, $routeParams, $filter) {
			  var ref = new Firebase('https://fiery-heat-9377.firebaseio.com/surfaces');
	  	   		// create an AngularFire reference to the data
			    var sync = $firebase(ref);
			    // download the data into a local object
			    $scope.surfaces = sync.$asArray();
			    $scope.surface = {
			  	    id: Utils.uuid(),
					name: null,
					location: {
						latitude: null,
						longitude: null
					},
					popularity: null,
					price: null,
					traffic: null,
					type: null
			    };
				
			    $scope.addSurface = function() {
				    firebase($scope.surface);
			    };
		}]);

})();