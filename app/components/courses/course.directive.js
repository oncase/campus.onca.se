define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.directive required");

    return coursesModule.directive("course", [function(){
      return {
        restrict : "E",
        templateUrl : "app/components/courses/course.template.html",
        controller : "CourseController" ,
        controllerAs : "courseCtrl",
        replace: true
      };
    }]);


	}
);
