define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.details.directive required");

    return coursesModule.directive("courseDetails", [function(){
      return {
        restrict : "E",
        templateUrl : "app/components/courses/course.details.template.html",
        controller : "CourseDetailsController" ,
        controllerAs : "detailsCtrl"
      };
    }]);


	}
);
