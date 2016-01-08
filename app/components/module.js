define(
	[
		'angular',

		/* Courses */
    'components/courses/module',
    'components/courses/list.directive',
    'components/courses/list.controller',
    'components/courses/course.directive',
    'components/courses/course.controller',
    'components/courses/courses.service',
	],
	function(angular){

    console.log("[campus.oncase] components.module required");
		var componentsModule = angular.module("components.module", [
			'courses.module'
    ]);

		return componentsModule;


	}
);
