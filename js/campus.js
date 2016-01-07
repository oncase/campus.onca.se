var app = angular.module("campusApp", []);

app.controller("courseList", function($scope) {
	$scope.courses = [
		{
			name : "Lorem ipsum",
			details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + 
				"Nunc eu lorem quis lacus cursus lacinia. Nunc fringilla luctus " +
				"volutpat. Nunc dignissim eros ac urna dapibus viverra at id diam."+
				" Vivamus tincidunt neque a orci blandit posuere. Integer feugiat "+
				"vel velit nec condimentum. Aliquam at hendrerit ex, nec tristique"+
				" ligula. Phasellus.",
			image : "https://avatars1.githubusercontent.com/u/1022787?v=3&s=200",
			tags : ['dashboards', 'pentaho'],
			classes : [
				{

				}
			],
			workload : 20 //in hours
		},
		{
			name : "dolor sit amet",
			details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "+
				"In vestibulum risus eu lorem aliquam, in sollicitudin magna lobortis"+
				". Aenean tincidunt feugiat orci, ut ultrices dolor iaculis scelerisque."+
				" Maecenas mauris enim, bibendum in tincidunt eu, faucibus sit amet"+
				" neque. Maecenas elementum.",
			image : "http://statistiche.unisi.it:8080/pentaho-style/favicon.ico",
			tags : ['bootcamp', 'analytics', 'pentaho'],
			classes : [
				{

				}
			],
			workload : 40 //in hours
		}
	];

	$scope.search = function (course) {
		if (!$scope.courseFilter) {
			return true;
		}
		var tags = $scope.courseFilter.tags.split(" ");
		for (var courseTag = course.tags.length - 1; courseTag >= 0; courseTag--) {
			for (var filterTag = 0; filterTag < tags.length; filterTag++) {
				console.log(course.tags[courseTag] + ", " + tags[filterTag]);
				console.log(course.tags[courseTag].indexOf(tags[filterTag]));
				if (course.tags[courseTag].indexOf(tags[filterTag]) > -1) {
					return true;
				}
			}
		}
		return false;
	}
});