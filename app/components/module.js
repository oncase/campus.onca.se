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
    'components/courses/filters.controller',
    'components/courses/filters.directive',

				/* crew */
		    'components/crew/module',
		    'components/crew/crew.controller',
		    'components/crew/crew.directive',

				/* contact */
		    'components/contact/module',
		    'components/contact/contact.controller',
		    'components/contact/contact.service',
		    'components/contact/contact.directive',
	],
	function(angular){

    console.log("[campus.oncase] components.module required");
		var componentsModule = angular.module("components.module", [
			'courses.module',
			'crew.module',
			'contact.module'
    ]);

		return componentsModule;


	}
);
