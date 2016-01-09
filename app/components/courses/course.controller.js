define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.controller required");

    return coursesModule.controller("CourseController", [
								"CoursesService", "$filter", "$mdDialog",
			function(  CoursesService ,  $filter ,  $mdDialog){

				var _defaultClassLabel = "A definir",
						self = this;

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


			  this.showSharing = function(ev, course) {
					    $mdDialog.show({
					      controller: function($scope, $mdDialog, course){
									this.course = course;
									this.url = "http://campus.onca.se/courses/"+course.id;
									this.close = function(){
										$mdDialog.cancel();
									};
									this.onTextClick = function ($event) {
									  $event.target.select();
									};
								},
								controllerAs : "cshareCtrl",
					      templateUrl: 'app/components/courses/course.share.template.html',
					      parent: angular.element(document.body),
					      targetEvent: ev,
					      clickOutsideToClose:true,
					      fullscreen: true,
								locals : {
									course : course
								}
					    });
			  };

    	}
		])


	}
);
