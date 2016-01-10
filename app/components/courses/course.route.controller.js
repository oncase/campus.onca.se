define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.controller required");

    return coursesModule.controller("CoursesRouteController", [
								"CoursesService", "$filter",
			function(  CoursesService ,  $filter ){

				this.orderByExpression = CoursesService.getOrderBy();

				this.fireOrderBy = function(){
					CoursesService.setOrderBy(this.orderByExpression);
				}

    	}
		]);


	}
);
