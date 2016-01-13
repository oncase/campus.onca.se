define(
	[
		'angular',
    'components/courses/module'
	],
	function(angular, coursesModule){

    console.log("[campus.oncase] course.details.controller required");

    return coursesModule.controller("CourseDetailsController", [
							"CoursesService","$filter","$stateParams","$mdDialog","$location",
							"$window","$timeout","$scope",

			function(CoursesService , $filter , $stateParams,  $mdDialog,  $location,
				       $window, $timeout,   $scope){

				var self = this;

        this.course = CoursesService.getCourse(
          $stateParams.courseId
        );

				if (this.course === null){
					$location.path('/');
					return;
				}

				function exit(e) {
					if (e.keyCode == 27)
						$timeout(function(){
							$location.path('/');
						},0);
				}

				$scope.$on('$destroy', function () {
				  angular.element($window).off('keydown', exit);
				});

				angular.element($window).on('keydown', exit);


				self.levelChip = [this.course.level];
				self.workloadChip = [this.course.workload];

				this.getColorForLevel = function(){
					return CoursesService.getColorForLevel(this.course.level);
				};

				function dateFilter(cl){
					return new Date(cl.dateFrom) < new Date() ? false : true;
				}

				this.getFilteredClasses = function(){
					return $filter("filter")(this.course.classes, dateFilter);
				}

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
