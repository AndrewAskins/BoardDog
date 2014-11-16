/**
 * @ngdoc function
 * @name boardDogApp.controller:FaceCtrl
 * @description
 * # FaceCtrl
 * Controller of the BoardDog
 */
 (function(undefined) {
	'use strict';

	angular.module('BoardDog')
	  	   .controller('FaceCtrl', ['$scope', '$routeParams', '$firebase', function ($scope, $routeParams, $firebase) {
	  	   		var ref = new Firebase('https://fiery-heat-9377.firebaseio.com/faces');
	  	   		// create an AngularFire reference to the data
			    var sync = $firebase(ref);
			    // download the data into a local object
			    $scope.faces = sync.$asArray();
				$scope.face = {
					id: Utils.uuid(),
					name: null,
					email: null,
					company_name: null,
					phone_number: null,
					color: ''
				};

				//loading in progress!
				$scope.$watch('faces', function(newValue) {
					//loading complete!
				}, true);

				$scope.addFace = function() {
					$scope.faces.$add($scope.face);
				};

				$scope.deleteFace = function(face) {
					if(face != null) {
						$scope.faces.$remove(face);
					}
				};
			}]);
})();