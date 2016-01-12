define(
	[
		'angular',
    'components/courses/module',

    'json!data/courses.json'
	],
	function(angular, coursesModule, courses){

    console.log("[campus.oncase] courses.service required");

    return coursesModule.service("CoursesService", ["$filter",function($filter){


			var dateFrom = null,
					dateTo = null;

      var _levels = {
						"Iniciante" : {color : "#1B5E20", ordinal:1},
						"Intermediário" : {color : "#26C6DA", ordinal:2},
						"Avançado" : {color : "#F44336", ordinal:3},
						"default" : {color : "#444", ordinal:9}
					},
					_audiences = [],
					_tags = [],
					_courses = _initCourses(courses),
					_orderBy = null,
					_filters = {
						dateFrom : dateFrom,
						dateTo : dateTo,
						levels: _getPreparedFilter(_getLevels()),
						tags: _getPreparedFilter(_tags),
						audience : _getPreparedFilter(_audiences)
					};

			function _initCourses(coursesArray){
				for( var y=0 ; y < coursesArray.length ; y++ ){
					coursesArray[y]["nextClass"] = _getNextClass(coursesArray[y]);
					coursesArray[y]["levelOrdinal"] = _getOrdinalForLevel(coursesArray[y]["level"])

					_initCollections(coursesArray[y]);

				}

				return coursesArray;
			}

			function _initCollections(course){
				var _aud  = course.audience,
						_t = course.tags;

				// Audience
				for( var z=0 ; z < _aud.length ; z++)
					_addToSet(_aud[z], _audiences);


				// Tags
				for( var k=0 ; k < _t.length ; k++)
					_addToSet(_t[k], _tags);

				_convertClassesDates(course);

			}

			function _convertClassesDates(cour){
				var cla = cour["classes"];
				for(var x=0;x<cla.length;x++){
					cla[x]["dateFrom"] = new Date(cla[x]["dateFrom"])
					cla[x]["dateTo"] = new Date(cla[x]["dateTo"])
				}

			}

			function _addToSet(elm, arr){
				if(arr.indexOf(elm) === -1)
					arr.push(elm);
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
        return $filter("filter")(_courses, _featuresFilter);
      }

			function _featuresFilter(cour){
				return _datesFilter(cour) && _labelsFilter(cour, "tags")
									&& _labelsFilter(cour, "audience") && _levelsFilter(cour);
			}

			function _datesFilter(cour){

				var filterFrom = _filters.dateFrom,
						filterTo = _filters.dateTo;

				if(filterFrom === null && filterTo === null)
					return true;

				if(filterFrom !== null && filterTo === null){
					filterTo = new Date();
					filterTo.setFullYear(filterTo.getFullYear()+2);
				}
				if(filterFrom === null && filterTo !== null){
					filterFrom = new Date();
				}

				var cla = cour["classes"];
				for(var i=0;i<cla.length;i++){
					if(cla[i].dateFrom >= filterFrom
							&& cla[i].dateFrom <= filterTo)
							return true;
				}


				return false;

			}

			function _levelsFilter(cour){
				return _filters.levels[cour.level].enabled;
			}

			function _labelsFilter(cour, colname){
				var __colec = _filters[colname];

				for(var z=0;z<__colec.length;z++)
					if(__colec[z].enabled && _hasLabel(cour, colname, __colec[z].label))
						return true;

				return false;
			}

			function _hasLabel(cour, colname, label){

				for(var x=0;x<cour[colname].length;x++){
					if(cour[colname][x]===label)
						return true;
				}
				return false;
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

			function _getTags(){
				return _tags;
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


			function _getPreparedFilter(collection){

				var _col = angular.copy(collection);

				for(var k in _col){
					if(typeof _col[k] ==="string"){
						_col[k] = {
							label : _col[k],
							enabled : true
						};
					}else if(typeof _col[k] ==="object"){
						_col[k] = {
							label : k,
							enabled : true
						}
					}else {

					}
				}

				return _col;

			}

			function _getFilters(){
				return _filters;
			}

			function _setFilters(newFilters){
				_filters = newFilters;
			}


      return {
        getCourses : _getCourses,
				getColorForLevel : _getColorForLevel,
				getLevels : _getLevels,
				getAudiences : _getAudiences,
				getTags : _getTags,
				getCourse  : _getCourse,
				setOrderBy : _setOrderBy,
				getOrderBy : _getOrderBy,
				getPreparedFilter : _getPreparedFilter,
				getFilters : _getFilters,
				setFilters : _setFilters
      }

    }]);


	}
);
