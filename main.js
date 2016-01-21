require.config({
  baseUrl: "app/",
  paths: {
    angular    : '../node_modules/angular/angular.min',
    ngLocale   : '../node_modules/angular-i18n/angular-locale_pt-br',
    ngAnimate  : '../node_modules/angular-animate/angular-animate.min',
    ngAria     : '../node_modules/angular-aria/angular-aria.min',
    ngMaterial : '../node_modules/angular-material/angular-material.min',
    text : '../node_modules/requirejs-plugins/lib/text',
    json : '../node_modules/requirejs-plugins/src/json',
    ngSanitize : '../node_modules/angular-sanitize/angular-sanitize.min',
    showdown : '../node_modules/showdown/dist/showdown',
    ngRouter : '../node_modules/angular-ui-router/release/angular-ui-router.min',
    angulartics : '../node_modules/angulartics/dist/angulartics.min',
    angularticsGTM : '../node_modules/angulartics/dist/angulartics-gtm.min'

  },
  shim: {
    angular : {
      'exports' : 'angular'
    },
    angulartics : {
      deps : ["angular"]
    },
    angularticsGTM : {
      deps : ["angular","angulartics"]
    },
    ngLocale : {
      deps : ["angular"]
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
    },
    ngSanitize : {
      deps : ["angular"]
    },
    showdown : {
      exports : "Showdown"
    },
    ngRouter : {
      deps: ["angular"]
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
          'ngRouter',
          'ngLocale',
          'angulartics',
          'angularticsGTM',
          'app',
        ],
        function(angular, ngAnimate, ngAria, ngMaterial) {

    'use strict';

    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {

      console.log("[campus.oncase] main.js bootstrapping");
      angular.bootstrap(document,['campusApp']);

    });

});
