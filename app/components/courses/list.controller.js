define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.list.controller required");

    return coursesModule.controller("CourseListController", [
                "CoursesService", "$rootScope",
      function(  CoursesService ,  $rootScope ){

				this.getOrderBy = CoursesService.getOrderBy;
        this.getCourses =  CoursesService.getCourses;

				$rootScope.$on('$stateChangeStart',
				function(event, toState, toParams, fromState, fromParams){
				    console.log("MUDANDO ROTA");
				});

      }// end controller

    ]);


	}
);
