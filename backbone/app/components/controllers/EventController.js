// HomeController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.home', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/', {
		controller: 'EventController',
		templateUrl: 'components/views/exploreView.html'
	});
}])

// Controller definition for this module
.controller('EventController', ['$scope',"$http", function($scope,$http) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked

	init();

	function init(){
	
	};

	this.message = "Hello Home!";

    $scope.events = [];
	$scope.events = [{"eid": 1, "uid": 12, "name": "suicide", "description": "bla bla bla", "location": "132521,135225", "event_pic": ["http://www.internetmonk.com/wp-content/uploads/Boredom-baby.jpg", "http://www.internetmonk.com/wp-content/uploads/Boredom-baby.jpg", "http://i.huffpost.com/gen/1892441/images/o-BOREDOM-facebook.jpg"], "age_restriction": "20-23", "attendees_restriction": "10"}, {"eid": 2, "uid": 13, "name": "suicide", "description": "bla bla bla", "location": "132521,135225", "event_pic": ["http://parentingteenagersacademy.com/wp-content/uploads/2012/09/teen-boredom.png", "http://www.amenclinics.com/wp-content/uploads/2016/01/adhd-boredom-intolerance.jpg", "http://scribblescoop.com/wp-content/uploads/2015/02/bored.png"], "age_restriction": "20-23", "attendees_restriction": "10"}, {"eid": 3, "uid": 14, "name": "suicide", "description": "bla bla bla", "location": "132521,135225", "event_pic": ["https://us.123rf.com/450wm/smithore/smithore1308/smithore130800078/22285637-ungl-cklich-geschaftsmann-stand-mit-verschrankten-armen-und-verzog-das-gesicht-finster-in-die-kamera.jpg", "http://www.amenclinics.com/wp-content/uploads/2016/01/adhd-boredom-intolerance.jpg", "http://assets4.bigthink.com/system/idea_thumbnails/47894/size_1024/boredom.jpg?1350227712"], "age_restriction": "20-23", "attendees_restriction": "10"}]
    //$scope.events = [{"eid": 1, "uid": 12, "name": "ski", "description": "bla bla bla bla", "location": "132521351,135243525", "event_pic": "https://www.w3schools.com/w3images/lights.jpg", "age_restriction": "20-23", "attendees_restriction": 10},{"eid": 1, "uid": 12, "name": "ski", "description": "bla bla bla bla", "location": "132521351,135243525", "event_pic": "https://www.w3schools.com/w3images/lights.jpg", "age_restriction": "20-23", "attendees_restriction": 10}];
	/*$http({
	 url: "http://jenia90.pythonanywhere.com/api/getevents",
	 method: "GET",
	 data: {}
	 }).then(function(response) {
	 // $scope.myWelcome = response.data;
	 console.log("response",response.data);
	 $scope.events = JSON.parse(response.data);
	 });*/

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