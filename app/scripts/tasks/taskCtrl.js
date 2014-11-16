/**
 * @ngdoc function
 * @name boardDogApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the BoardDog
 */
 (function(undefined) {
	'use strict';

	angular.module('BoardDog')
	  	   .controller('TaskCtrl', ['$scope', '$routeParams', '$firebase', function ($scope, $routeParams, $firebase) {
	  	   		var ref = new Firebase('https://fiery-heat-9377.firebaseio.com/tasks');
	  	   		// create an AngularFire reference to the data
			    var sync = $firebase(ref);
			    // download the data into a local object
			    $scope.tasks = sync.$asArray();
				$scope.task = {
					id: Utils.uuid(),
					compeleted: null,
					description: null
				};

				//loading in progress!
				$scope.$watch('tasks', function(newValue) {
					//loading complete!
				}, true);

				$scope.addTask = function() {
					$scope.tasks.$add($scope.task);
				};

				$scope.deleteTask = function(task) {
					if(task != null) {
						$scope.tasks.$remove(task);
					}
				};
			}]);
})();