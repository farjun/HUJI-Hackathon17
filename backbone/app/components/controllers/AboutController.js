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

var flag = true;
function showText() {
  if (flag) {
    document.getElementById('overlay').className = 'overlayNew';
    flag = false;
    var element = document.getElementById("largImg");
    var captionText = document.getElementById("introtext");
    captionText.innerHTML = element.alt;
  }
  else {
    document.getElementById('overlay').className = 'overlay';
    flag = true;
  }
}

// Controller definition for this module
.controller('MyProfileController', ['$scope', function($scope) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){
	
	};


	$scope.images=["resources/img/Event1Large.jpg","resources/img/Event2.jpg","resources/img/Event3.jpg"]
	$scope.switchImg=function (num) {
		var temp = $scope.images[0];
		$scope.images[0]=$scope.images[num-1];
		$scope.images[num-1] = temp;
    };


	this.message = "Hello About!";

}]);
