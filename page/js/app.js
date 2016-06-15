(function(){
	var app = angular.module('visit',[]);

	//controllers
	app.controller('ProjectController', function(){
		this.projects = projects;
	});

	// list of projects in experience section
	var projects = [
		{
			screen: "images/15-234.jpg",
			tools: [
				"icons/html5.png",
				"icons/css3.png",
				"icons/bootstrap.png",
				"icons/sass.png",
				"icons/angularjs.png",
				"icons/gulp.png",
			],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			screen: "images/15-234.jpg",
			tools: [
				"icons/html5.png",
				"icons/css3.png",
				"icons/bootstrap.png",
				"icons/sass.png",
				"icons/angularjs.png",
				"icons/gulp.png",
			],
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
		}
	];
})();
