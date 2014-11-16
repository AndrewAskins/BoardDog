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
		  	   	// var ref = new Firebase('https://fiery-heat-9377.firebaseio.com/surfuces');
	  			// create an AngularFire reference to the data
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

				angular.element('.datepicker').pickadate();

				$scope.options = {
		            mode: 'custom',
		            scale: 'day',
		            maxHeight: false,
		            width: false,
		            autoExpand: 'none',
		            taskOutOfRange: 'truncate',
		            fromDate: undefined,
		            toDate: undefined,
		            showLabelsColumn: true,
		            currentDate: 'line',
		            currentDateValue : new Date(2013, 9, 23, 11, 20, 0),
		            draw: true,
		            readOnly: false,
		            filterTask: undefined,
		            filterRow: undefined,
		            timeFrames:
		                 {'day': {
		                    start: moment('8:00', 'HH:mm'),
		                        end: moment('20:00', 'HH:mm'),
		                        working: true,
		                        default: true
		                    },
		                 'noon': {
		                     start: moment('12:00', 'HH:mm'),
		                     end: moment('13:30', 'HH:mm'),
		                     working: false,
		                     default: true
		                 },
		                 'weekend': {
		                     working: false
		                 }
		                },
		            dateFrames: {
		                'weekend': {
		                    evaluator: function(date) {
		                        return date.isoWeekday() === 6 || date.isoWeekday() === 7;
		                    },
		                    targets: ['weekend']
		                }
		            },
		            timeFramesNonWorkingMode: 'hidden'
		        };
				
				$scope.$on('event:gantt-ready', function() 
				{ 
					// Start using the Gantt e.g. load data
					$scope.loadTimespans($scope.ganttTimespan.timespan1);
					$scope.loadData($scope.ganttData.data1);
				});
				
				$scope.ganttTimespan = {
                    'timespan1': [
                        {
                            id: '1',
                            from: new Date(2013, 9, 21, 8, 0, 0),
                            to: new Date(2013, 9, 25, 15, 0, 0),
                            name: 'Sprint 1 Timespan'
                            //priority: undefined,
                            //classes: [], //Set custom classes names to apply to the timespan.
                            //data: undefined
                        }
                    ]
                };

				$scope.ganttData = {
                    'data1': [
                        // Order is optional. If not specified it will be assigned automatically
                        {
                        	'id': '2f85dbeb-0845-404e-934e-218bf39750c0', 
                        	'name': 'Milestones',
                        	'tasks': [
                            // Dates can be specified as string, timestamp or javascript date object. The data attribute can be used to attach a custom object
                            {'id': 'f55549b5-e449-4b0c-9f4b-8b33381f7d76', 'name': 'Kickoff', 'color': '#93C47D', 'from': '2013-10-07T09:00:00', 'to': '2013-10-07T10:00:00'},
                            {'id': '5e997eb3-4311-46b1-a1b4-7e8663ea8b0b', 'name': 'Concept approval', 'color': '#93C47D', 'from': new Date(2013, 9, 18, 18, 0, 0), 'to': new Date(2013, 9, 18, 18, 0, 0), 'est': new Date(2013, 9, 16, 7, 0, 0), 'lct': new Date(2013, 9, 19, 0, 0, 0)},
                            {'id': 'b6a1c25c-85ae-4991-8502-b2b5127bc47c', 'name': 'Development finished', 'color': '#93C47D', 'from': new Date(2013, 10, 15, 18, 0, 0), 'to': new Date(2013, 10, 15, 18, 0, 0)},
                            {'id': '6fdfd775-7b22-42ec-a12c-21a64c9e7a9e', 'name': 'Shop is running', 'color': '#93C47D', 'from': new Date(2013, 10, 22, 12, 0, 0), 'to': new Date(2013, 10, 22, 12, 0, 0)},
                            {'id': 'c112ee80-82fc-49ba-b8de-f8efba41b5b4', 'name': 'Go-live', 'color': '#93C47D', 'from': new Date(2013, 10, 29, 16, 0, 0), 'to': new Date(2013, 10, 29, 16, 0, 0)}
                        ]},
                        {
                        	'id': 'b8d10927-cf50-48bd-a056-3554decab824', 
                        	'name': 'Status meetings', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 9, 25, 15, 0, 0), 'to': new Date(2013, 9, 25, 18, 30, 0)},
                            {'id': '0fbf344a-cb43-4b20-8003-a789ba803ad8', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 10, 1, 15, 0, 0), 'to': new Date(2013, 10, 1, 18, 0, 0)},
                            {'id': '12af138c-ba21-4159-99b9-06d61b1299a2', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 10, 8, 15, 0, 0), 'to': new Date(2013, 10, 8, 18, 0, 0)},
                            {'id': '73294eca-de4c-4f35-aa9b-ae25480967ba', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 10, 15, 15, 0, 0), 'to': new Date(2013, 10, 15, 18, 0, 0)},
                            {'id': '75c3dc51-09c4-44fb-ac40-2f4548d0728e', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 10, 24, 9, 0, 0), 'to': new Date(2013, 10, 24, 10, 0, 0)}
                        ]},
                        {
                        	'id': '2f85dbeb-0845-404e-934e-218bf39750c0', 
                        	'name': 'Milestones', 
                        	'tasks': [
                            // Dates can be specified as string, timestamp or javascript date object. The data attribute can be used to attach a custom object
                            {'id': 'f55549b5-e449-4b0c-9f4b-8b33381f7d76', 'name': 'Kickoff', 'color': '#93C47D', 'from': '2013-10-07T09:00:00', 'to': '2013-10-07T10:00:00'},
                            {'id': '5e997eb3-4311-46b1-a1b4-7e8663ea8b0b', 'name': 'Concept approval', 'color': '#93C47D', 'from': new Date(2013, 9, 18, 18, 0, 0), 'to': new Date(2013, 9, 18, 18, 0, 0), 'est': new Date(2013, 9, 16, 7, 0, 0), 'lct': new Date(2013, 9, 19, 0, 0, 0)},
                            {'id': 'b6a1c25c-85ae-4991-8502-b2b5127bc47c', 'name': 'Development finished', 'color': '#93C47D', 'from': new Date(2013, 10, 15, 18, 0, 0), 'to': new Date(2013, 10, 15, 18, 0, 0)},
                            {'id': '6fdfd775-7b22-42ec-a12c-21a64c9e7a9e', 'name': 'Shop is running', 'color': '#93C47D', 'from': new Date(2013, 10, 22, 12, 0, 0), 'to': new Date(2013, 10, 22, 12, 0, 0)},
                            {'id': 'c112ee80-82fc-49ba-b8de-f8efba41b5b4', 'name': 'Go-live', 'color': '#93C47D', 'from': new Date(2013, 10, 29, 16, 0, 0), 'to': new Date(2013, 10, 29, 16, 0, 0)}
                        ]},
                        {
                        	'id': 'b8d10927-cf50-48bd-a056-3554decab824', 
                        	'name': 'Status meetings', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 9, 25, 15, 0, 0), 'to': new Date(2013, 9, 25, 18, 30, 0)},
                            {'id': '0fbf344a-cb43-4b20-8003-a789ba803ad8', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 10, 1, 15, 0, 0), 'to': new Date(2013, 10, 1, 18, 0, 0)},
                            {'id': '12af138c-ba21-4159-99b9-06d61b1299a2', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 10, 8, 15, 0, 0), 'to': new Date(2013, 10, 8, 18, 0, 0)},
                            {'id': '73294eca-de4c-4f35-aa9b-ae25480967ba', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 10, 15, 15, 0, 0), 'to': new Date(2013, 10, 15, 18, 0, 0)},
                            {'id': '75c3dc51-09c4-44fb-ac40-2f4548d0728e', 'name': 'Demo', 'color': '#9FC5F8', 'from': new Date(2013, 10, 24, 9, 0, 0), 'to': new Date(2013, 10, 24, 10, 0, 0)}
                        ]},
                    ]};
			}]);
})();