define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.controller required");

    return coursesModule.controller("CourseController", [
								"CoursesService", "$filter",
			function(  CoursesService ,  $filter ){

				var _defaultClassLabel = "A definir";

				this.getColorForLevel = CoursesService.getColorForLevel;

				this.getNextClass = function(course){
					if( typeof course["classes"] === "undefined" ||
				 			course["classes"].length === 0)
						return _defaultClassLabel;

					var _classes = $filter("orderBy")( course["classes"], 'dateFrom'),
							_today = new Date();
					for(var x = 0 ; x < _classes.length; x++){
						var _classFrom = new Date(_classes[x]["dateFrom"]);
						if(_classFrom >= _today)
							return $filter("date")(_classFrom, "dd/MM/yyyy");
					}

					return _defaultClassLabel;


				};

    	}
		]);


	}
);
