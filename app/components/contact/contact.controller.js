define(
	[
		'angular',
    'components/contact/module'
	],
	function(angular, contactModule){

    console.log("[campus.oncase] contact.controller required");

    return contactModule.controller("ContactController", [
								 "$window", "ContactService", "$mdToast",
      function(   $window ,  ContactService ,  $mdToast ){

				var emptyConcact = {
					name : "",
					email : "",
					msg : ""
				},
				self = this;

				this.whichPage = null;
				this.whichCourse = null;
				this.contactInfo = angular.copy(emptyConcact);

				this.getAdditionalMsg = function(){
					return this.whichCourse === null ? ""
					 : " sobre o curso "+this.whichCourse
				}

				this.resetForm = function(){
					this.contactInfo = angular.copy(emptyConcact);;
				}

				this.sendContact = function(){

					// Object to be sent
					var sendObj = this.contactInfo;
					sendObj["page"] = this.whichPage;
					sendObj["course"] = this.whichCourse;


					// Alerts for bad email address
					if(this.contactInfo.email === undefined){
						$mdToast.show(
							$mdToast.simple()
								.textContent('Por favor, informe um e-mail válido.')
								.hideDelay(3000)
						);
						return;
					}

					console.log("Validado");
					console.log(sendObj);
					// Sends
					ContactService.sendContact(sendObj)
					.then(function(res){

						// Success
						if(res.status===200 && res.data=="1"){
							$mdToast.show(
					      $mdToast.simple()
					        .textContent('Enviado com sucesso!')
					        .hideDelay(3000)
					    ).then(function(){self.resetForm()});

						//Some error
						}else{
							$mdToast.show(
					      $mdToast.simple()
					        .textContent('Erro ao enviar.')
					        .hideDelay(3000)
					    );

						}

					});

				}


      }// end controller

    ]);


	}
);
