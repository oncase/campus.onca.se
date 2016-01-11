define(
	[
		'angular',
    'components/crew/module'
	],
	function(angular, crewModule){

    console.log("[campus.oncase] crew.controller required");

    return crewModule.controller("CrewController", [
								"$window",
      function( $window  ){
				/* ------------------------------------
						Update guidelines:
					 ------------------------------------
					  - The picture needs to be 1x1 [squared]
						- Keep the picture low-res it's displayed as 150x150px, but you can
							still double these dimensions to match high density monitors.
						- The social Object keys you're gonna use will have to match one of
						  font-awesome icons. They're rendered as class="fa-{{key}}". So
							please visit https://fortawesome.github.io/Font-Awesome/icons/ and
							choose wisely;
						- Keep a number of 4 bio items. Nothing more.
				 */
				var _crew = [
					{
						name: "Marcello Pontes",
						img: "assets/img/crew/marcello.jpg",
						headline : "Frontender & Analytics Architect",
						bio:[
							"10 anos de Analytics",
							"8 anos de Pentaho",
							"Profissional Certificado Pentaho e MongoDB",
							"Frequentemente se isola em devland"
						],
						social:{
							twitter : "https://twitter.com/marpontes",
							github : "https://github.com/marpontes",
							linkedin : "https://linkedin.com/in/marpontes"
						}
					},
					{
						name: "Leonardo Luiz",
						img: "assets/img/crew/leo.jpg",
						headline : "Analytics Architect",
						bio:[
							"Graduado em Ciências da Computação pela UFPE",
							"6 anos de Analytics",
							"Profissional Certificado Pentaho",
							"Mais horas de projetos Pentaho do que de GoT"
						],
						social:{
							twitter : "https://twitter.com/marpontes",
							github : "https://github.com/marpontes",
							linkedin : "https://linkedin.com/in/marpontes"
						}
					},
					{
						name: "Iandé Coutinho",
						img: "assets/img/crew/iande.jpg",
						headline : "CIO & Analytics Evangelist",
						bio:[
							"Graduado em Ciências da Computação pela UNICAP",
							"10+ anos de Analytics com diversas pós graduações",
							"Profissional Certificado Pentaho",
							"Frequentemente aplica Analytics na arte de velejar"
						],
						social:{
							twitter : "https://twitter.com/marpontes",
							github : "https://github.com/marpontes",
							linkedin : "https://linkedin.com/in/marpontes"
						}
					},
					{
						name: "Mailson Santos",
						img: "assets/img/crew/mailson.jpg",
						headline : "Data Scientist",
						bio:[
							"Mestre em Mineração de dados pela UFPE",
							"Experiência de mais de 5 anos com Pentaho",
							"Diversos papers na área de Analytics",
							"O próximo Zuckerberg"
						],
						social:{
							twitter : "https://twitter.com/marpontes",
							github : "https://github.com/marpontes",
							linkedin : "https://linkedin.com/in/marpontes"
						}
					},
					{
						name: "Álvaro Basto",
						img: "assets/img/crew/alvaro.jpg",
						headline : "Support Leader",
						bio:[
							"Profissional Certificado Pentaho",
							"Head de suporte ao produto Pentaho na Oncase",
							"Experiência de mais de 5 anos com Pentaho",
							"Estuda correlação de variáveis no Tinder"
						],
						social:{
							twitter : "https://twitter.com/marpontes",
							github : "https://github.com/marpontes",
							linkedin : "https://linkedin.com/marpontes"
						}
					}
				], _ordered=false;;

				function generateRandomOrder(){
					for( var y = 0 ; y < _crew.length ; y++ ){
						_crew[y]["ordinal"] = Math.random();
					}
					_ordered = true;
				}

				this.getCrew = function(){
					if(!_ordered)
						generateRandomOrder();

					return _crew;
				}

				this.openWindow = function(url){
					$window.open(url);
				}

      }// end controller

    ]);


	}
);
