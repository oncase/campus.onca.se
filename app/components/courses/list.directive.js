define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] list.directive required");

    return coursesModule.directive("coursesList", [function(){
      return {
        restrict : "E",
        templateUrl : "app/components/courses/list.template.html",
        controller : "CourseListController" ,
        controllerAs : "listCtrl"
      };
    }]);


	}
);
