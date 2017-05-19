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


    var flag = true;
    $scope.showText=function() {
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

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

	$scope.event_pic=["resources/img/Event1Large.jpg","resources/img/Event2.jpg","resources/img/Event3.jpg"]
	$scope.switchImg=function (num) {
		var temp = $scope.event_pic[0];
		$scope.event_pic[0]=$scope.event_pic[num-1];
		$scope.event_pic[num-1] = temp;
    };

	$scope.currentEventId = getParameterByName('eid');
	console.log("-------------",$scope.currentEventId);
	if($scope.currentEventId==null){
		alert("self");
        document.getElementById("portfolio").style.display = 'none';
        //document.getElementById("new_event").style.display = 'block';
	}else{
		alert("event id " + $scope.currentEventId)
		$http({
		 url: "http://jenia90.pythonanywhere.com/api/getevent?eid="+$scope.currentEventId,
		 method: "GET",
		 data: {}
		 }).then(function(response) {
		 // $scope.myWelcome = response.data;
		 console.log("response",response.data);
		 $scope.currentEvent = JSON.parse(response.data);
		 $scope.event_pic = $scope.currentEvent.event_pic;
		 });
		//$scope.currentEvent = {"eid": 5, "uid": 13, "name": "happy", "description": "Pastrami pig beef, corned beef frankfurter short loin alcatra. Turkey tenderloin meatloaf, beef shank spare ribs ribeye. Turkey doner bacon porchetta sirloin bresaola short loin short ribs meatball shoulder leberkas prosciutto beef ribs kielbasa pastrami. Tenderloin leberkas pancetta meatloaf alcatra kevin filet mignon frankfurter cupim brisket beef ribs pig kielbasa turkey shankle.", "location": "132521,135225", "event_pic": ["https://us.123rf.com/450wm/smithore/smithore1308/smithore130800078/22285637-ungl-cklich-geschaftsmann-stand-mit-verschrankten-armen-und-verzog-das-gesicht-finster-in-die-kamera.jpg", "http://www.amenclinics.com/wp-content/uploads/2016/01/adhd-boredom-intolerance.jpg", "http://assets4.bigthink.com/system/idea_thumbnails/47894/size_1024/boredom.jpg?1350227712"], "age_restriction": "20-23", "attendees_restriction": "10"}
		//$scope.event_pic = $scope.currentEvent.event_pic;
	}

	this.message = "Hello About!";

}]);
