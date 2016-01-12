define(
	[
		'angular',
    'components/contact/module'
	],
	function(angular, contactModule){

    console.log("[campus.oncase] contact.service required");

    return contactModule.service("ContactService", [
								"$http","$timeout",
      function(  $http , $timeout  ){

				function _sendContact(){

					return $timeout(function(){
						console.log("Timeout");
						return "1";
					}, 1000);

				}


				return {
					sendContact : _sendContact
				}
      }// end controller

    ]);


	}
);
