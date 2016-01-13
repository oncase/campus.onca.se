define(
	[
		'angular',
		'components/module'
	],
	function(angular){

		console.log("[campus.oncase] app required");

		var app = angular.module("campusApp", [
			'ngLocale',
			'ngMaterial',
			'ui.router',
			'components.module'
		])
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

			var primaries = [
						'brown',
						'pink',
						'deep-purple',
						'oncasePalette',
						'teal'
			],
					accents = [
						'deep-orange',
						'blue-grey',
						'red',
						'blue',
						'indigo'
			];

      $mdThemingProvider

        .theme('default')
        .primaryPalette("oncasePalette")
        .accentPalette("red");

			// Configure a dark theme with primary foreground yellow
			$mdThemingProvider.theme('docs-dark', 'default')
				.primaryPalette('yellow')
				.dark();

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

		})
		.config(function($mdDateLocaleProvider, $localeProvider, $filterProvider){
			var dtFormat = $localeProvider.$get().DATETIME_FORMATS;

		  $mdDateLocaleProvider.months = dtFormat.MONTH;
		  $mdDateLocaleProvider.shortMonths = dtFormat.SHORTMONTH;
		  $mdDateLocaleProvider.days = dtFormat.DAY;
		  $mdDateLocaleProvider.shortDays = dtFormat.SHORTDAY;

		  // Can change week display to start on Monday.
		  $mdDateLocaleProvider.firstDayOfWeek = dtFormat.FIRSTDAYOFWEEK;
		  // Optional.


		  $mdDateLocaleProvider.msgCalendar = 'Calendário';
		  $mdDateLocaleProvider.msgOpenCalendar = 'Abrir calendário';
		  $mdDateLocaleProvider.formatDate = function(date) {


			if( date === null)
				return null;


			if(typeof date["getMonth"] !== 'function')
				return null;


		    return ("0"+date.getDate()).slice(-2) + "/" +
							 ("0"+(date.getMonth()+1)).slice(-2) + "/" +
						 	 date.getFullYear()
		  };

		});


		return app;


	}
);
