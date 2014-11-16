/**
 * @ngdoc function
 * @name boardDogApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the BoardDog
 */
 (function(undefined) {
	'use strict';

	angular.module('BoardDog')
	  	   .controller('ScheduleCtrl', ['$scope', '$routeParams', '$firebase', "GANTT_EVENTS", function ($scope, $routeParams, $firebase, GANTT_EVENTS) {
	  	//    		var ref = new Firebase('https://fiery-heat-9377.firebaseio.com/surfuces');
	  	//    		// create an AngularFire reference to the data
			 //    var sync = $firebase(ref);
			 //    // download the data into a local object
			 //    $scope.clients = sync.$asArray();
				// $scope.client = {
				// 	id: Utils.uuid(),
				// 	name: null,
				// 	email: null,
				// 	company_name: null,
				// 	phone_number: null,
				// 	color: ''
				// };
				$scope.data = [];

				$scope.$on(GANTT_EVENTS.READY, function() {
		            $scope.data = loadData();
		        });

				function loadData() {
					return [
						{
							name: 'Milestones', 
							height: '3em', 
							sortable: {
								enabled: false
							}, 
							classes: 'gantt-row-milestone', 
							color: '#45607D', 
							data: 'Can contain any custom data or object',
						  	tasks: [
								    {name: 'Kickoff', color: '#93C47D', from: '2013-10-07T09:00:00', to: '2013-10-07T10:00:00', data: 'Can contain any custom data or object'},
								    {name: 'Concept approval', color: '#93C47D', from: new Date(2013, 9, 18, 18, 0, 0), to: new Date(2013, 9, 18, 18, 0, 0), est: new Date(2013, 9, 16, 7, 0, 0), lct: new Date(2013, 9, 19, 0, 0, 0)},
								    {name: 'Development finished', color: '#93C47D', from: new Date(2013, 10, 15, 18, 0, 0), to: new Date(2013, 10, 15, 18, 0, 0)},
								    {name: 'Shop is running', color: '#93C47D', from: new Date(2013, 10, 22, 12, 0, 0), to: new Date(2013, 10, 22, 12, 0, 0)},
								    {name: 'Go-live', color: '#93C47D', from: new Date(2013, 10, 29, 16, 0, 0), to: new Date(2013, 10, 29, 16, 0, 0)}
								]
						},
						{
							name: 'Status meetings', 
							tasks: [
							    {name: 'Demo', color: '#9FC5F8', from: new Date(2013, 9, 25, 15, 0, 0), to: new Date(2013, 9, 25, 18, 30, 0)},
							    {name: 'Demo', color: '#9FC5F8', from: new Date(2013, 10, 1, 15, 0, 0), to: new Date(2013, 10, 1, 18, 0, 0)},
							    {name: 'Demo', color: '#9FC5F8', from: new Date(2013, 10, 8, 15, 0, 0), to: new Date(2013, 10, 8, 18, 0, 0)},
							    {name: 'Demo', color: '#9FC5F8', from: new Date(2013, 10, 15, 15, 0, 0), to: new Date(2013, 10, 15, 18, 0, 0)},
							    {name: 'Demo', color: '#9FC5F8', from: new Date(2013, 10, 24, 9, 0, 0), to: new Date(2013, 10, 24, 10, 0, 0)}
							]
						}
					];
				};
			}]);
})();