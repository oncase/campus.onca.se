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
					},
					_audiences = [
						"Business User", "Business Analyst", "Data Analyst",
						"Software Architect", "Pentaho Admin", "Pentaho Support"
					];

      function _getCourses(){
        return _courses;
      }

			function _getLevels(){
				var __levels = angular.copy(_levels);
				delete __levels["default"];
				return __levels;
			}

			function _getColorForLevel(level){
				return typeof _levels[level] === "undefined" ? _levels["default"].color
						: _levels[level].color;
			}

			function _getAudiences(){
				return _audiences;
			}

			function _getCourse(courseId){

				for(var x = 0 ; x < _courses.length ; x++)
					if(courseId === _courses[x].id)
						return _courses[x];

				return null;

			}



      return {
        getCourses : _getCourses,
				getColorForLevel : _getColorForLevel,
				getLevels : _getLevels,
				getAudiences : _getAudiences,
				getCourse  : _getCourse
      }

    }]);


	}
);
