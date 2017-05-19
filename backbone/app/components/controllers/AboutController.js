// AboutController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.about', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/about', {
		controller: 'MyProfileController',
		templateUrl: 'components/views/myProfileView.html'
	});
}])

// Controller definition for this module
.controller('MyProfileController', ['$scope', function($scope) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){
	
	};

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

	$scope.images=["resources/img/Event1Large.jpg","resources/img/Event2.jpg","resources/img/Event3.jpg"]
	$scope.switchImg=function (num) {
		var temp = $scope.images[0];
		$scope.images[0]=$scope.images[num-1];
		$scope.images[num-1] = temp;
    };

	$scope.currentEvent = getParameterByName('eid');
	console.log("-------------",$scope.currentEvent);
	if($scope.currentEvent==null){
		alert("self");
        document.getElementById("portfolio").style.display = 'none';
	}else{
		alert("event id " + $scope.currentEvent)
	}

	this.message = "Hello About!";

}]);