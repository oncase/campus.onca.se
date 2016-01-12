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

				var _sendMailUrl= 'http://oncase.com.br/app/server/sendmail.campus.php';

				var _sendContactPost = function(formData){
					console.log("Servico enviando...");
					console.log(formData);
					return $http({
				      method: "post",
				      url: _sendMailUrl,
				      data: formData,
				      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				    });
				};

				return {
					sendContact : _sendContactPost
				}
      }// end controller

    ]);


	}
);
