define(
	[
		'angular',
		'components/module'
	],
	function(angular){

    console.log("[campus.oncase] app required");
		var app = angular.module("campusApp", [
			'ngMaterial',
			'components.module'
		]);

		return app;


	}
);
