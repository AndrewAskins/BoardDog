/**
 * @ngdoc function
 * @name boardDogApp.controller:AuthCtrl
 * @description
 * # ClientCtrl
 * Controller of the BoardDog
 */
 (function(undefined) {
	'use strict';

	angular.module('BoardDog')
		.controller('ClientCtrl', ClientCtrl);

	ClientCtrl.$inject = ['$scope', '$routeParams', '$filter', '$firebase'];

	function ClientCtrl($scope, $routeParams, $filter, $firebase) {
		var url = 'https://fiery-heat-9377.firebaseio.com/';
		var sync = $firebase(url);
	    
	    // download the data into a local object
	    var syncObject = sync.$asObject();
	    
	    // synchronize the object with a three-way data binding
	    // click on `index.html` above to see it used in the DOM!
	    syncObject.$bindTo($scope, "data");
	};

})();