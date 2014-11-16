/**
 * @ngdoc function
 * @name boardDogApp.controller:CampaignCtrl
 * @description
 * # CampaignCtrl
 * Controller of the BoardDog
 */
 (function(undefined) {
	'use strict';

	angular.module('BoardDog')
	  	   .controller('CampaignCtrl', ['$scope', '$routeParams', '$firebase', function ($scope, $routeParams, $firebase) {
	  	   		var ref = new Firebase('https://fiery-heat-9377.firebaseio.com/campaigns');
	  	   		// create an AngularFire reference to the data
			    var sync = $firebase(ref);
			    // download the data into a local object
			    $scope.campaigns = sync.$asArray();
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
			}]);
})();