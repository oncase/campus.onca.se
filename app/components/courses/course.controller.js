define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.controller required");

    return coursesModule.controller("CourseController", [
								"CoursesService",
			function(  CoursesService){
				this.getColorForLevel = CoursesService.getColorForLevel;
    	}
		]);


	}
);
