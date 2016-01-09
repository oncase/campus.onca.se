define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.details.controller required");

    return coursesModule.controller("CourseDetailsController", [
								"CoursesService", "$filter", "$stateParams", "$mdDialog",
			function(  CoursesService ,  $filter ,  $stateParams,   $mdDialog){

				var self = this;


        this.course = CoursesService.getCourse(
          $stateParams.courseId
        );

				self.levelChip = [this.course.level];
				self.workloadChip = [this.course.workload];

				this.getColorForLevel = function(){
					return CoursesService.getColorForLevel(this.course.level);
				};

				this.showClassDetails = function(ev, cl){
					$mdDialog.show({
			      controller: function($scope, $mdDialog, course, cl){
							this.course = course;
							this.cl = cl
							this.url = "http://campus.onca.se/courses/"+course.id;
							this.close = function(){
								$mdDialog.cancel();
							};
						},
						controllerAs : "classCtrl",
			      templateUrl: 'app/components/courses/class.info.template.html',
			      parent: angular.element(document.body),
			      targetEvent: ev,
			      clickOutsideToClose:true,
			      fullscreen: true,
						locals:{
							course : self.course,
							cl : cl
						}
			    });
				}

				this.showClassEmpty = function(ev, cl){
					$mdDialog.show({
			      controller: function($scope, $mdDialog, course){
							this.course = course;
							this.close = function(){
								$mdDialog.cancel();
							};
						},
						controllerAs : "eClassCtrl",
			      templateUrl: 'app/components/courses/class.empty.template.html',
			      parent: angular.element(document.body),
			      targetEvent: ev,
			      clickOutsideToClose:true,
			      fullscreen: true,
						locals:{
							course : self.course,
							cl : cl
						}
			    });
				}

			}

		]);


	}
);
