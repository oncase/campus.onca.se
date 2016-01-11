define(
	[
		'angular',
    'components/crew/module'
	],
	function(angular, crewModule){

    console.log("[campus.oncase] crew.directive required");

    return crewModule.directive("crewList", [function(){
      return {
        restrict : "E",
        templateUrl : "app/components/crew/crew.template.html",
        controller : "CrewController" ,
        controllerAs : "crewCtrl",
				init : function(){
					console.log("INIT");
				}
      };
    }]);


	}
);
