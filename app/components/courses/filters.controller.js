define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] filters.controller required");

    return coursesModule.controller("FiltersController", [
                "CoursesService",
      function(  CoursesService ){
				var _filters = CoursesService.getFilters();

				this.audience = _filters.audience;
				this.tags = _filters.tags;
				this.levels = _filters.levels;
				this.minDate = _filters.dateFrom;
				this.dateFrom = _filters.dateFrom;
				this.dateTo = _filters.dateTo;

				this.apply = function(){
					CoursesService.setFilters({
						dateFrom : this.dateFrom,
						dateTo : this.dateTo,
						levels: _filters.levels,
						tags: _filters.tags,
						audience : _filters.audience
					});
				}





      }// end controller

    ]);


	}
);
