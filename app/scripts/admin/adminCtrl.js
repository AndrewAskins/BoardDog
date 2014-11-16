/**
 * @ngdoc function
 * @name boardDogApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the BoardDog
 */
 (function(undefined) {
	'use strict';

	angular.module('BoardDog')
	  	   .controller('AdminCtrl', ['$scope', '$routeParams', '$firebase', function ($scope, $routeParams, $firebase) {
	  	   		
	  	   		//Clients
	  	   		var ref_clients = new Firebase('https://fiery-heat-9377.firebaseio.com/clients');
	  	   		// create an AngularFire reference to the data
			    var sync_clients = $firebase(ref_clients);
			    // download the data into a local object
			    $scope.clients = sync_clients.$asArray();
				$scope.client = {
					id: Utils.uuid(),
					name: null,
					email: null,
					company_name: null,
					phone_number: null,
					address: null
				};

				//loading in progress!
				$scope.$watch('clients', function(newValue) {
					//loading complete!
				}, true);

				$scope.addClient = function() {
					$scope.clients.$add($scope.client);
				};

				$scope.deleteClient = function(client) {
					if(client != null) {
						$scope.clients.$remove(client);
					}
				};

				var ref_campaigns = new Firebase('https://fiery-heat-9377.firebaseio.com/campaigns');
	  	   		// create an AngularFire reference to the data
			    var sync_campaigns = $firebase(ref_campaigns);
			    // download the data into a local object
			    $scope.campaigns = sync_campaigns.$asArray();
				$scope.campaign = {
					id: Utils.uuid(),
					start_date: null,
					end_date: null,
					status: null,
					total: null,
					client_id: null,
					created_by: null,
					created_date: null,
					modified_by: null,
					modified_date: null
				};

				//loading in progress!
				$scope.$watch('campaigns', function(newValue) {
					//loading complete!
				}, true);

				$scope.addCampaign = function() {
					$scope.campaigns.$add($scope.campaign);
				};

				$scope.deleteCampaign = function(campaign) {
					if(campaign != null) {
						$scope.campaigns.$remove(campaign);
					}
				};

				//Tasks
				var ref_tasks = new Firebase('https://fiery-heat-9377.firebaseio.com/tasks');
	  	   		// create an AngularFire reference to the data
			    var sync_tasks = $firebase(ref_tasks);
			    // download the data into a local object
			    $scope.tasks = sync_tasks.$asArray();
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


				//surface 
				var ref_service = new Firebase('https://fiery-heat-9377.firebaseio.com/surfaces');
	  	   		// create an AngularFire reference to the data
			    var sync_service = $firebase(ref_service);
			    // download the data into a local object
			    $scope.surfaces = sync_service.$asArray();
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
			    
			    //loading in progress!
				$scope.$watch('surfaces', function(newValue) {
					//loading complete!
				}, true);
				
				$scope.addSurface = function() {
				    firebase($scope.surface);
			    };

				$scope.deleteSurface = function(surface) {
					if(surface != null) {
						$scope.surface.$remove(surface);
					}
				};


				//faces 
				var ref_faces = new Firebase('https://fiery-heat-9377.firebaseio.com/faces');
	  	   		// create an AngularFire reference to the data
			    var sync_faces = $firebase(ref_faces);
			    // download the data into a local object
			    $scope.faces = sync_faces.$asArray();
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