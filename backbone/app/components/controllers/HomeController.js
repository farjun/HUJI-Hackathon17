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
    /*$http.get("http://jenia90.pythonanywhere.com/api/getuser?id=12")
        .then(function(response) {
           // $scope.myWelcome = response.data;
		console.log("response",response);
        });*/
    /*$http({
        url: "http://jenia90.pythonanywhere.com/api/getuser",
        method: "GET",
        data: {id: 12}
    }).then(function(response) {
        // $scope.myWelcome = response.data;
        console.log("response",response);
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