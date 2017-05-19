// HomeController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.home', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/', {
		controller: 'HomeController',
		templateUrl: 'components/views/exploreView.html'
	});
}])

// Controller definition for this module
.controller('HomeController', ['$scope',"$http", function($scope,$http) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked

	init();

	function init(){
	
	};

	this.message = "Hello Home!";
    $http.get("http://jenia90.pythonanywhere.com/api/getuser?id=12")
        .then(function(response) {
           // $scope.myWelcome = response.data;
		console.log("response",response);
        });
    $http({
        url: "http://jenia90.pythonanywhere.com/api/getuser",
        method: "GET",
        data: {id: 12}
    }).then(function(response) {
        // $scope.myWelcome = response.data;
        console.log("response",response);
    });
    $scope.events = [];
	//$scope.events = [{"eid": 1, "uid": 12, "name": "ski", "description": "bla bla bla bla", "location": "132521351,135243525", "event_pic": "urlhere", "age_restriction": "20-23", "attendees_restriction": 10}, {"eid": 2, "uid": 13, "name": "suicide", "description": "bla bla bla", "location": "132521,135225", "event_pic": "http://i.huffpost.com/gen/1892441/images/o-BOREDOM-facebook.jpg", "age_restriction": "20-23", "attendees_restriction": 10}, {"eid": 3, "uid": 14, "name": "suicide", "description": "bla bla bla", "location": "132521,135225", "event_pic": "http://www.internetmonk.com/wp-content/uploads/Boredom-baby.jpg", "age_restriction": "20-23", "attendees_restriction": 10}];
    //$scope.events = [{"eid": 1, "uid": 12, "name": "suicide", "description": "bla bla bla", "location": "132521,135225", "event_pic": ["http://www.internetmonk.com/wp-content/uploads/Boredom-baby.jpg", "http://www.internetmonk.com/wp-content/uploads/Boredom-baby.jpg", "http://i.huffpost.com/gen/1892441/images/o-BOREDOM-facebook.jpg"], "age_restriction": "20-23", "attendees_restriction": "10"}, {"eid": 2, "uid": 13, "name": "suicide", "description": "bla bla bla", "location": "132521,135225", "event_pic": ["http://parentingteenagersacademy.com/wp-content/uploads/2012/09/teen-boredom.png", "http://www.amenclinics.com/wp-content/uploads/2016/01/adhd-boredom-intolerance.jpg", "http://scribblescoop.com/wp-content/uploads/2015/02/bored.png"], "age_restriction": "20-23", "attendees_restriction": "10"}, {"eid": 3, "uid": 14, "name": "suicide", "description": "bla bla bla", "location": "132521,135225", "event_pic": ["https://us.123rf.com/450wm/smithore/smithore1308/smithore130800078/22285637-ungl-cklich-geschaftsmann-stand-mit-verschrankten-armen-und-verzog-das-gesicht-finster-in-die-kamera.jpg", "http://www.amenclinics.com/wp-content/uploads/2016/01/adhd-boredom-intolerance.jpg", "http://assets4.bigthink.com/system/idea_thumbnails/47894/size_1024/boredom.jpg?1350227712"], "age_restriction": "20-23", "attendees_restriction": "10"}];
    // $scope.events = [{"eid": 4, "uid": 12, "name": "happy", "description": "Bacon ipsum dolor amet bresaola ham ball tip short loin, capicola pork chop strip steak landjaeger ham hock pork loin prosciutto short ribs. Beef pastrami beef ribs, shank venison bresaola meatloaf salami filet mignon cupim doner ribeye tongue. Boudin landjaeger pig burgdoggen, kevin pancetta pork picanha cow bresaola tenderloin. Shank doner pork loin drumstick t-bone. Beef ribs andouille capicola chuck t-bone, turducken rump tri-tip ham picanha cow. Ham ribeye tail pancetta chicken. Boudin shankle salami, kevin shank tail strip steak sirloin.", "location": "132521,135225", "event_pic": ["https://us.123rf.com/450wm/smithore/smithore1308/smithore130800078/22285637-ungl-cklich-geschaftsmann-stand-mit-verschrankten-armen-und-verzog-das-gesicht-finster-in-die-kamera.jpg", "http://www.amenclinics.com/wp-content/uploads/2016/01/adhd-boredom-intolerance.jpg", "http://assets4.bigthink.com/system/idea_thumbnails/47894/size_1024/boredom.jpg?1350227712"], "age_restriction": "20-23", "attendees_restriction": "10"}, {"eid": 5, "uid": 13, "name": "happy", "description": "Pastrami pig beef, corned beef frankfurter short loin alcatra. Turkey tenderloin meatloaf, beef shank spare ribs ribeye. Turkey doner bacon porchetta sirloin bresaola short loin short ribs meatball shoulder leberkas prosciutto beef ribs kielbasa pastrami. Tenderloin leberkas pancetta meatloaf alcatra kevin filet mignon frankfurter cupim brisket beef ribs pig kielbasa turkey shankle.", "location": "132521,135225", "event_pic": ["https://us.123rf.com/450wm/smithore/smithore1308/smithore130800078/22285637-ungl-cklich-geschaftsmann-stand-mit-verschrankten-armen-und-verzog-das-gesicht-finster-in-die-kamera.jpg", "http://www.amenclinics.com/wp-content/uploads/2016/01/adhd-boredom-intolerance.jpg", "http://assets4.bigthink.com/system/idea_thumbnails/47894/size_1024/boredom.jpg?1350227712"], "age_restriction": "20-23", "attendees_restriction": "10"}, {"eid": 6, "uid": 14, "name": "happy", "description": "Capicola chicken frankfurter, kevin shankle sausage porchetta brisket landjaeger burgdoggen pig. Pig strip steak short loin, alcatra sirloin boudin tail sausage tongue kielbasa hamburger. Ground round pig pancetta ball tip pastrami. Short ribs ground round spare ribs burgdoggen. Pork drumstick jowl pastrami beef ribs sirloin capicola picanha filet mignon short ribs kevin. Meatball tail chicken, beef corned beef swine flank bacon turkey pancetta porchetta leberkas tri-tip kevin.", "location": "132521,135225", "event_pic": ["http://f.tqn.com/y/bicycling/1/S/G/7/-/-/john_kerry.jpg", "https://i.ytimg.com/vi/E4WTCmCHaaY/maxresdefault.jpg", "http://static.wixstatic.com/media/6d9ff4_406569a7341f446bb4089b2f9204e1fd.jpg"], "age_restriction": "20-23", "attendees_restriction": "10"}]
    //$scope.events = [{"eid": 1, "uid": 12, "name": "ski", "description": "bla bla bla bla", "location": "132521351,135243525", "event_pic": "https://www.w3schools.com/w3images/lights.jpg", "age_restriction": "20-23", "attendees_restriction": 10},{"eid": 1, "uid": 12, "name": "ski", "description": "bla bla bla bla", "location": "132521351,135243525", "event_pic": "https://www.w3schools.com/w3images/lights.jpg", "age_restriction": "20-23", "attendees_restriction": 10}];
	$http({
	 url: "http://jenia90.pythonanywhere.com/api/getevents",
	 method: "GET",
	 data: {}
	 }).then(function(response) {
	 // $scope.myWelcome = response.data;
	 console.log("response",response.data);
	 $scope.events = response.data;
	 });

	$scope.clickToOpen = function(event){

        $scope.currentEvent = event;
		window.location = "#/about?eid="+event.eid;
	}



}]);
/*
	.controller('BlogController', ['$http', function($http){

    var blog = this;
    blog.title = "AngularJS Blog App";

    blog.posts = {};
    $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
        blog.posts = data;
    });

    blog.tab = 'blog';

    blog.selectTab = function(setTab){
        blog.tab = setTab;
        console.log(blog.tab)
    };

    blog.isSelected = function(checkTab){
        return blog.tab === checkTab;
    };

    blog.post = {};
    blog.addPost = function(){
        blog.post.createdOn = Date.now();
        blog.post.comments = [];
        blog.post.likes = 0;
        blog.posts.unshift(this.post);
        blog.tab = 0;
        blog.post ={};
    };

}])
    .controller('CommentController', function(){
        this.comment = {};
        this.addComment = function(post){
            this.comment.createdOn = Date.now();
            post.comments.push(this.comment);
            this.comment ={};
        };
    })*/
/*

 Simple blog front end demo in order to learn AngularJS - You can add new posts, add comments, and like posts.

 */
/*
(function(){
    var app = angular.module('blogApp',[]);

    app.controller('BlogController', ['$http', function($http){

        var blog = this;
        blog.title = "AngularJS Blog App";

        blog.posts = {};
        $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
            blog.posts = data;
        });

        blog.tab = 'blog';

        blog.selectTab = function(setTab){
            blog.tab = setTab;
            console.log(blog.tab)
        };

        blog.isSelected = function(checkTab){
            return blog.tab === checkTab;
        };

        blog.post = {};
        blog.addPost = function(){
            blog.post.createdOn = Date.now();
            blog.post.comments = [];
            blog.post.likes = 0;
            blog.posts.unshift(this.post);
            blog.tab = 0;
            blog.post ={};
        };

    }]);

    app.controller('CommentController', function(){
        this.comment = {};
        this.addComment = function(post){
            this.comment.createdOn = Date.now();
            post.comments.push(this.comment);
            this.comment ={};
        };
    });

})();*/