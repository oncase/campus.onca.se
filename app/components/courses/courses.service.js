define(
	[
		'angular',
    'components/courses/module',

    'json!data/courses.json'
	],
	function(angular, coursesModule, courses){

    console.log("[campus.oncase] courses.service required");

    return coursesModule.service("CoursesService", ["$filter",function($filter){
      var _levels = {
						"Iniciante" : {color : "#1B5E20", ordinal:1},
						"Intermediário" : {color : "#26C6DA", ordinal:2},
						"Avançado" : {color : "#F44336", ordinal:3},
						"default" : {color : "#444", ordinal:9}
					},
					_courses = _initCourses(courses),
					_audiences = [
						"Business User", "Business Analyst", "Data Analyst",
						"Software Architect", "Pentaho Admin", "Pentaho Support"
					],
					_orderBy = null;

			function _initCourses(coursesArray){
				for( var y=0 ; y < coursesArray.length ; y++ ){
					coursesArray[y]["nextClass"] = _getNextClass(coursesArray[y]);
					coursesArray[y]["levelOrdinal"] = _getOrdinalForLevel(coursesArray[y]["level"])
				}

				return coursesArray;
			}


			function _getNextClass(course){
				if( typeof course["classes"] === "undefined" ||
						course["classes"].length === 0)
					return null;

				var _classes = $filter("orderBy")( course["classes"], 'dateFrom'),
						_today = new Date();
				for(var x = 0 ; x < _classes.length; x++){
					var _classFrom = new Date(_classes[x]["dateFrom"]);
					if(_classFrom >= _today)
						return _classFrom;
				}

				return null;
			}

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

			function _getOrdinalForLevel(level){
				return typeof _levels[level] === "undefined" ? _levels["default"].ordinal
						: _levels[level].ordinal;
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

			function _setOrderBy(newExpression){
				_orderBy = newExpression;
			}

			function _getOrderBy(){
				return _orderBy;
			}


      return {
        getCourses : _getCourses,
				getColorForLevel : _getColorForLevel,
				getLevels : _getLevels,
				getAudiences : _getAudiences,
				getCourse  : _getCourse,
				setOrderBy : _setOrderBy,
				getOrderBy : _getOrderBy
      }

    }]);


	}
);
