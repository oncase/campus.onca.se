define(
	[
		'angular',
    'components/markdown/markdown',
	],
	function(angular){

    console.log("[campus.oncase] courses.module required");
		var app = angular.module("courses.module", [
			'btford.markdown',
			'contact.module'
    ]);

		return app;


	}
);
