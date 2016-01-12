define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.list.controller required");

    return coursesModule.controller("CourseListController", [
                "CoursesService",
      function(  CoursesService ){

				this.getOrderBy = CoursesService.getOrderBy;
        this.getCourses =  CoursesService.getCourses;



      }// end controller

    ]);


	}
);
