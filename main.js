require.config({
  baseUrl: "app/",
  paths: {
    angular    : '../node_modules/angular/angular.min',
    ngAnimate  : '../node_modules/angular-animate/angular-animate.min',
    ngAria     : '../node_modules/angular-aria/angular-aria.min',
    ngMaterial : '../node_modules/angular-material/angular-material.min',
    text : '../node_modules/requirejs-plugins/lib/text',
    json : '../node_modules/requirejs-plugins/src/json',

  },
  shim: {
    angular : {
      'exports' : 'angular'
    },
    ngAnimate : {
      exports: "ngAnimate",
      deps: [ "angular" ]
    },
    ngAria : {
      exports: "ngAria",
      deps: [ "angular" ]
    },
    ngMaterial : {
      exports: "ngMaterial",
      deps: [ "angular", "ngAnimate", "ngAria" ]
    }
  },
  priority: ['angular']
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require([
          'angular',
          'ngAnimate',
          'ngAria',
          'ngMaterial',
          'app'
        ],
        function(angular, ngAnimate, ngAria, ngMaterial, app, leaflet, oclazyload) {

    'use strict';

    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {

      console.log("[campus.oncase] main.js bootstrapping");
      angular.bootstrap(document,['campusApp']);

    });

});
