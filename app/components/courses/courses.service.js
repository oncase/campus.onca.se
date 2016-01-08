define(
	[
		'angular',
    'components/courses/module',

    'json!data/courses.json'
	],
	function(angular, coursesModule, courses){

    console.log("[campus.oncase] courses.service required");

    return coursesModule.service("CoursesService", [function(){
      var _courses = courses,
					_levels = {
						"Iniciante" : {color : "#1B5E20"},
						"Intermediário" : {color : "#26C6DA"},
						"Avançado" : {color : "#F44336"},
						"default" : {color : "#444"}
					};

      function _getCourses(){
        return _courses;
      }

			function _getColorForLevel(level){
				return typeof _levels[level] === "undefined" ? _levels["default"].color
						: _levels[level].color;
			}



      return {
        getCourses : _getCourses,
				getColorForLevel : _getColorForLevel
      }

    }]);


	}
);
