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
		.config(function($mdThemingProvider){



			      $mdThemingProvider.definePalette('oncasePalette', {
			        '50': 'e5e9ef',
			        '100': 'bfc8d8',
			        '200': '95a4bf',
			        '300': '6f84a8',
			        '400': '4e6693',
			        '500': '2b4a7f',
			        '600': '284576',
			        '700': '203c6c',
			        '800': '1b3462',
			        '900': '0e2854',
			        'A100': '82a5ea',
			        'A200': '3a7bff',
			        'A400': '1f68ff',
			        'A700': '135ffe',
			        'contrastDefaultColor': 'light',
			        'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100']
			      });


			      $mdThemingProvider

			        .theme('default')
			        .primaryPalette('oncasePalette')
			        .accentPalette('deep-orange');


		})
		.config(function($stateProvider, $urlRouterProvider, $locationProvider){

			$urlRouterProvider.otherwise("/courses");

			$stateProvider
			.state('courses', {
				url: "/courses",
				templateUrl: "app/partials/courses.html",
				controller:"CoursesRouteController",
				controllerAs:"crouteCtrl"
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
