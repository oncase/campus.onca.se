define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.details.controller required");

    return coursesModule.controller("CourseDetailsController", [
								"CoursesService", "$filter", "$stateParams",
			function(  CoursesService ,  $filter , $stateParams){
        this.course = CoursesService.getCourse(
          $stateParams.courseId
        );
			}

		]);


	}
);
