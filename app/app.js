define(
	[
		'angular',
		'components/module'
	],
	function(angular){

		console.log("[campus.oncase] app required");

		var app = angular.module("campusApp", [
			'ngMaterial',
			'ui.router',
			'components.module'
		])
		.run(function($rootScope){
				$rootScope.$on('$stateChangeStart',
				function(event, toState, toParams, fromState, fromParams){
				    console.log("Mudou!");
				})
		})
		.config(function($stateProvider, $urlRouterProvider, $locationProvider){

			// $locationProvider
			//   .html5Mode(true)
			// 	.hashPrefix('!');

			$urlRouterProvider.otherwise("/courses");

			$stateProvider
			.state('courses', {
				url: "/courses",
				templateUrl: "app/partials/courses.html"
			})
      .state('courses.details', {
        url: "/:courseId",
				parent : "courses",
        templateUrl: "app/partials/courses.details.html"
      });



		});


		return app;


	}
);
