define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] filters.directive required");

    return coursesModule.directive("filtersPane", [function(){
      return {
        restrict : "E",
        templateUrl : "app/components/courses/filters.template.html",
        controller : "FiltersController" ,
        controllerAs : "filtersCtrl"
      };
    }]);


	}
);
