define(
	[
		'angular',

		/* Courses */
    'components/courses/module',
    'components/courses/list.directive',
    'components/courses/list.controller',
    'components/courses/course.directive',
    'components/courses/course.controller',
    'components/courses/course.details.controller',
    'components/courses/course.details.directive',
    'components/courses/courses.service',
    'components/courses/course.route.controller',
	],
	function(angular){

    console.log("[campus.oncase] components.module required");
		var componentsModule = angular.module("components.module", [
			'courses.module'
    ]);

		return componentsModule;


	}
);
