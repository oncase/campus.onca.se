define(
	[
		'angular',
    'components/contact/module'
	],
	function(angular, contactModule){

    console.log("[campus.oncase] contact.directive required");

    return contactModule.directive("contactForm", [function(){
      return {
        restrict : "E",
        templateUrl : "app/components/contact/contact.template.html",
        controller : "ContactController" ,
        controllerAs : "contactCtrl",
				scope : {
					theme : '=theme'
				},
				link : function(scope, element, attrs, controller, transcludeFn){

					controller.whichPage = typeof attrs["whichPage"] === "string" ?
							attrs["whichPage"] : "N/D";

					controller.whichCourse = typeof attrs["whichCourse"] === "string" ?
							attrs["whichCourse"] : "N/D";

				}
      };
    }]);


	}
);
