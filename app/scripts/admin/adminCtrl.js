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
	  	   		angular.element('.datepicker').pickadate();

	  	   		var _models = {
	  	   			client: {
						id: Utils.uuid(),
						name: '',
						email: '',
						company_name: '',
						phone_number: '',
						address: ''
					},
					campaign: {
						id: Utils.uuid(),
						surface_id: '',
						face_id: '',
						start_date: '',
						end_date: '',
						status: '',
						total: '',
						client: '',
						created_by: '', //user_id
						created_date: '',
						modified_by: '', //user_id
						modified_date: '',
						campaign_type: [] //campaignType object
					},
					campaignType: {
						id: Utils.uuid(),
						name: '',
						tasks: [] //array of task objects
					}, 
					task: {
						id: Utils.uuid(),
						compeleted: false,
						description: '',
						permissions: '',
						created_by: '', //client_id
						due_date: ''
					},
					surface: {
				  	    id: Utils.uuid(),
						name: '',
						latitude: '',
						longitude: '',
						popularity: '',
						price: '',
						traffic: '',
						type: '',
						faces: [] //array of face objects
				    },
				    face: {
				    	id: Utils.uuid(),
				    	surface_id: '',
				    	name: '',
				    	campaigns: [] //array of tacampaignsk objects
				    }
	  	   		}
	  	   		
	  	   		//Clients
	  	   		var ref_clients = new Firebase('https://fiery-heat-9377.firebaseio.com/clients');
	  	   		// create an AngularFire reference to the data
			    var sync_clients = $firebase(ref_clients);
			    // download the data into a local object
			    $scope.clients = sync_clients.$asArray();
			    $scope.client = _models.client;

				//loading in progress!
				$scope.$watch('clients', function(newValue) {
					//loading complete!
				}, true);

				$scope.addClient = function() {
					if($scope.client != null) {
						$scope.clients.$add($scope.client);
					}
				};

				$scope.deleteClient = function(client) {
					if(client != null) {
						$scope.clients.$remove(client);
					}
				};

				//Campains
				var ref_campaigns = new Firebase('https://fiery-heat-9377.firebaseio.com/campaigns');
	  	   		// create an AngularFire reference to the data
			    var sync_campaigns = $firebase(ref_campaigns);
			    // download the data into a local object
			    $scope.campaigns = sync_campaigns.$asArray();
			    $scope.campaign = angular.copy(_models.campaign);

				//loading in progress!
				$scope.$watch('campaigns', function(newValue) {
					//loading complete!
				}, true);

				$scope.addCampaign = function() {
					var _campaign = angular.copy($scope.campaign);
										 
					var _surface = $scope.surfaces.$getRecord($scope.selectedSurface.$id);
					var _face = _surface.faces.filter(function(item) { return item.id === $scope.selectedFace.id });
					// $scope.surfaces.forEach(function(surface) {
					// 	var f = surface.faces.filter(function(item) { return item.id === $scope.selectedFace.id });
					// 	_face = _face.concat(f);
					// });
					if(_face.length > 0 && _surface != null) {
						_campaign.surface_id = _surface.id;
						_campaign.face_id = _face[0].id;

						if(_face[0].campaigns == null) {
							_face[0].campaigns = [_campaign];
						} else {
							_face[0].campaigns.push(_campaign);
						}

						$scope.surfaces.$save($scope.selectedSurface.$id).then(function(result) {
							//record saved!!!
						});
					}

					$scope.campaigns.$add(_campaign);
				};

				$scope.deleteCampaign = function(campaign) {
					if(campaign != null) {
						$scope.campaigns.$remove(campaign);
					}
				};

				//CampaignType
				var ref_campaignType = new Firebase('https://fiery-heat-9377.firebaseio.com/campaignTypes');
	  	   		// create an AngularFire reference to the data
			    var sync_campaignType = $firebase(ref_campaignType);
			    // download the data into a local object
			    $scope.campaignTypes = sync_campaignType.$asArray();
			    $scope.campaignType = _models.campaignType;

				//loading in progress!
				$scope.$watch('campaignTypes', function(newValue) {
					//loading complete!
				}, true);

				$scope.addCampaignType = function() {
					$scope.campaignTypes.$add($scope.campaignType);
				};

				$scope.deleteCampaignType = function(campaignType) {
					if(campaignType != null) {
						$scope.campaignTypes.$remove(campaignType);
					}
				};

				//Tasks
				var ref_tasks = new Firebase('https://fiery-heat-9377.firebaseio.com/tasks');
	  	   		// create an AngularFire reference to the data
			    var sync_tasks = $firebase(ref_tasks);
			    // download the data into a local object
			    $scope.tasks = sync_tasks.$asArray();
				$scope.task = _models.task;
				$scope.taskDescription = null;

				//loading in progress!
				$scope.$watch('tasks', function(newValue) {
					//loading complete!
				}, true);

				$scope.addTask = function() {
					var _task = angular.copy(_models.task);
					_task.description = $scope.taskDescription;
					_task.id = Utils.uuid();
					$scope.campaignType.tasks.push(_task);
					//$scope.tasks.$add(_task);
				};

				$scope.deleteTask = function(task) {
					if(task != null) {
						$scope.campaignType.tasks.pop(task);
					}
				};

				//surface 
				var ref_service = new Firebase('https://fiery-heat-9377.firebaseio.com/surfaces');
	  	   		// create an AngularFire reference to the data
			    var sync_service = $firebase(ref_service);
			    // download the data into a local object
			    $scope.surfaces = sync_service.$asArray();
			    $scope.surface = _models.surface;
			    
			    //loading in progress!
				$scope.$watch('surfaces', function(newValue) {
					//loading complete!
				}, true);
				
				$scope.addSurface = function() {
					$scope.surface.id = Utils.uuid();
					$scope.surface.faces.forEach(function(_face) { 
						_face.surface_id = $scope.surface.id; 
						$scope.faces.$add(_face);
					});
				    $scope.surfaces.$add($scope.surface);
			    };

				$scope.deleteSurface = function(surface) {
					if(surface != null) {
						$scope.surfaces.$remove(surface);
					}
				};


				//faces 
				var ref_faces = new Firebase('https://fiery-heat-9377.firebaseio.com/faces');
	  	   		// create an AngularFire reference to the data
			    var sync_faces = $firebase(ref_faces);
			    // download the data into a local object
			    $scope.faces = sync_faces.$asArray();
				$scope.face = _models.face;
				$scope.faceName = '';

				//loading in progress!
				$scope.$watch('faces', function(newValue) {
					//loading complete!
				}, true);

				$scope.addFace = function() {
					var _face = angular.copy(_models.face);
					_face.name = $scope.faceName;
					_face.id = Utils.uuid();
					_face.campaigns = [];
					$scope.surface.faces.push(_face);
				};

				$scope.deleteFace = function(face) {
					if(face != null) {
						$scope.surface.faces.pop(face);
						$scope.faces.$remove(face);
					}
				};
			}]);
})();