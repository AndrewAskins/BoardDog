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
		  	   	var ref = new Firebase('https://fiery-heat-9377.firebaseio.com/surfaces');
	  			// create an AngularFire reference to the data
			 	var sync = $firebase(ref);
			 	// download the data into a local object
			 	$scope.surfaces = sync.$asArray();
				
				$scope.data = {};
				
				//loading in progress!
				$scope.$watch('surfaces', function(surfaces) {
					if(surfaces != null)
					{
						//loading complete!
						var data1 = [];
						angular.forEach(surfaces, function(value, key, surface) {
						    angular.forEach(value.faces, function(value, key, face) {
							    var row = {
								    id: value.id,
								    name: value.name
							    };
							    
							    row.tasks = [];
							    
							    angular.forEach(value.campaigns, function(value, key, campaign) {
								    var block = {
									    id: value.id,
									    name: value.name+' $'+campaign.total,
									    color: '#f8f8f8',
									    from: value.start_date,
									    to: value.end_date
								    };
								    
								    var progress = 0;
								    var total = 0;
								    
								    angular.forEach(value.campaign_type.tasks, function(value, key, task) {
									    total++;
									    if(value.completed)
									    {
										    progress++;
									    }
								    });
								    
								    progress = progress/total;
								    var color = colorForProgress(progress);
								    
								    var progressObj = {
									    progress: progress,
									    color: color
								    };
								    
								    block.progress = progressObj;
								    
								    row.tasks.push(block);
							    });
							    
							    data1.push(row);
						    });
						    
						});
						
						$scope.data.data1 = data1;
						
						
					}
					
					
				}, true);

				$scope.myOptions = [
				  {id: 1, title: 'Name', method: 'name'},
				  {id: 2, title: 'Earliest Task', method: 'from'},
				  {id: 3, title: 'Latest Task', method: 'to'}
				];
				
				$scope.config = {
				  create: true,
				  valueField: 'method',
				  labelField: 'title',
				  delimiter: '|',
				  placeholder: 'Pick something'
				}
				
				angular.element('.datepicker').pickadate();

				$scope.options = {
		            mode: 'custom',
		            scale: 'day',
		            maxHeight: false,
		            width: '50',
		            autoExpand: 'none',
		            taskOutOfRange: 'truncate',
		            fromDate: undefined,
		            toDate: undefined,
		            showLabelsColumn: true,
		            currentDate: 'none',
		            draw: true,
		            readOnly: false,
		            filterTask: undefined,
		            filterRow: undefined,
		            labelsWidth: '200',
		            headers: ['month', 'day'],
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
		            timeFramesNonWorkingMode: 'hidden',
		            columnMagnet: '12 hours'
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
                        	'id': '0', 
                        	'name': 'Gervais Street Board',
                        	'tasks': [
                            // Dates can be specified as string, timestamp or javascript date object. The data attribute can be used to attach a custom object
                            {'id': 'f55549b5-e449-4b0c-9f4b-8b33381f7d76', 'name': 'Kickoff', 'color': '#f8f8f8', 'from': '2013-10-07T09:00:00', 'to': '2013-10-015T10:00:00', progress: { progress: '75', color: colorForProgress('75') }},
                            {'id': '5e997eb3-4311-46b1-a1b4-7e8663ea8b0b', 'name': 'Concept approval', 'color': '#f8f8f8', 'from': '2013-10-18T09:00:00', 'to': '2013-10-24T10:00:00', progress: { progress: '40', color: colorForProgress('40') }},
                        ]},
                        {
                        	'id': '1', 
                        	'name': 'Huger St Board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-10-05T09:00:00', 'to': '2013-10-09T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                            {'id': '0fbf344a-cb43-4b20-8003-a789ba803ad8', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-10T09:00:00', 'to': '2013-11-17T10:00:00', progress: { progress: '15', color: colorForProgress('15') }},
                        ]},
                        {
                        	'id': '2', 
                        	'name': 'Miyos Board', 
                        	'tasks': [
                            // Dates can be specified as string, timestamp or javascript date object. The data attribute can be used to attach a custom object
                            {'id': '5e997eb3-4311-46b1-a1b4-7e8663ea8b0b', 'name': 'Concept approval', 'color': '#f8f8f8', 'from': '2013-10-28T09:00:00', 'to': '2013-11-15T10:00:00', progress: { progress: '80', color: colorForProgress('80') }},
                        ]},
                        {
                        	'id': '3', 
                        	'name': 'Bad ass board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-10-06T09:00:00', 'to': '2013-10-13T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                            {'id': '0fbf344a-cb43-4b20-8003-a789ba803ad8', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-17T09:00:00', 'to': '2013-11-27T10:00:00', progress: { progress: '40', color: colorForProgress('40') }},
                        ]},
                        {
                        	'id': '4', 
                        	'name': 'Bad ass board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-00T09:00:00', 'to': '2013-11-07T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                        ]},
                        {
                        	'id': '5', 
                        	'name': 'Bad ass board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-10-06T09:00:00', 'to': '2013-10-13T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                            {'id': '0fbf344a-cb43-4b20-8003-a789ba803ad8', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-17T09:00:00', 'to': '2013-11-27T10:00:00', progress: { progress: '40', color: colorForProgress('40') }},
                        ]},
                        {
                        	'id': '6', 
                        	'name': 'Bad ass board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-00T09:00:00', 'to': '2013-11-07T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                        ]},
                        {
                        	'id': '7', 
                        	'name': 'Bad ass board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-10-06T09:00:00', 'to': '2013-10-13T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                            {'id': '0fbf344a-cb43-4b20-8003-a789ba803ad8', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-17T09:00:00', 'to': '2013-11-27T10:00:00', progress: { progress: '40', color: colorForProgress('40') }},
                        ]},
                        {
                        	'id': '8', 
                        	'name': 'Bad ass board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-00T09:00:00', 'to': '2013-11-07T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                        ]},
                        {
                        	'id': '9', 
                        	'name': 'Bad ass board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-10-06T09:00:00', 'to': '2013-10-13T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                            {'id': '0fbf344a-cb43-4b20-8003-a789ba803ad8', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-17T09:00:00', 'to': '2013-11-27T10:00:00', progress: { progress: '40', color: colorForProgress('40') }},
                        ]},
                        {
                        	'id': '10', 
                        	'name': 'Bad ass board', 
                        	'tasks': [
                            {'id': '301d781f-1ef0-4c35-8398-478b641c0658', 'name': 'Demo', 'color': '#f8f8f8', 'from': '2013-11-00T09:00:00', 'to': '2013-11-07T10:00:00', progress: { progress: '100', color: colorForProgress('100') }},
                        ]},
                    ]};
                    
                    function colorForProgress(progress)
                    {
	                    if(progress <= 50)
	                    {
		                    return '#C1272D'
	                    }
	                    else if(progress < 100)
	                    {
		                    return '#235C73'
	                    }
	                    return '#22B573'
                    }
			}]);
})();