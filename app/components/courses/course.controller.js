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

					return course.nextClass === null ? _defaultClassLabel
										: $filter("date")(course.nextClass, "dd/MM/yyyy");

				};


			  this.showSharing = function(ev, course) {
					    $mdDialog.show({
					      controller: function($scope, $mdDialog, course){
									this.course = course;
									this.url = "http://campus.oncase.com.br/#/courses/"+course.id;
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
