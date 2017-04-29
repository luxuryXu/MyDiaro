// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter.controllers',[])
angular.module('starter.services',[])
angular.module('starter.directives',[])
angular.module('starter', ['ionic', 'starter.controllers','starter.services','starter.directives','ui.thumbnail','materialDatePicker','contenteditable'])
.run(function($ionicPlatform,$rootScope,$state,$ionicModal) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // if( !localStorage.user ){
  //   $ionicModal.fromTemplateUrl('templates/login.html' , {
  //     scope:$rootScope.$new(),
  //     animation:'slide-in-up'
  //   }).then(function(modal){
  //     modal.show();
  //     $rootScope.loginModal = modal;
  //   });
  // }
})



.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.passing-travellers', {
      url: '/passing-travellers',
      views: {
        'menuContent': {
          templateUrl: 'templates/passing-travellers.html',
          controller: 'PassingTravellersCtrl'
        }
      }
    })

    .state('app.mine', {
      url: '/mine',
      views: {
        'menuContent': {
          templateUrl: 'templates/mine.html',
          controller: 'MineCtrl'
        }
      }
    })

    .state('app.map',{
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl'
        }
      }
    })

    .state('app.data-modify' , {
      url: '/data-modify',
      views: {
        'menuContent': {
          templateUrl : 'templates/data-modify.html',
          controller: 'DataModifyCtrl'
        }
      }
    })

    .state('app.collections' , {
      url: '/collections',
      views: {
        'menuContent': {
          templateUrl: 'templates/collections.html',
          controller: 'CollectionsCtrl'
        }
      }
    })

    .state('app.write' , {
      url: '/write',
      views: {
        'menuContent': {
          templateUrl : 'templates/write.html',
          controller: 'WriteCtrl'
        }
      }
    })

    .state('app.diaro-detail' , {
      url: '/diaro-detail/:id',
      views: {
        'menuContent': {
          templateUrl : 'templates/diaro-detail.html',
          controller: 'DiaroCtrl'
        }
      }
    })

    .state('app.settings' , {
      url : '/settings',
      views: {
        'menuContent':{
          templateUrl : 'templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })

    .state('app.modify-password' , {
      url : '/modify-password',
      views: {
        'menuContent':{
          templateUrl : 'templates/modify-password.html',
          controller: 'ModifyPasswordCtrl'
        }
      }
    })

    .state('app.lock' , {
      url : '/lock',
      views : {
        'menuContent': {
          templateUrl : 'templates/lock.html',
          controller: 'LockCtrl'
        }
      }
    })

    .state('app.theme' , {
      url : '/theme',
      views : {
        'menuContent': {
          templateUrl : 'templates/theme.html',
          controller: 'ThemeCtrl'
        }
      }
    })

    .state('app.feedback' , {
      url :'/feedback',
      views : {
        'menuContent': {
          templateUrl :'templates/feedback.html',
          controller: 'FeedbackCtrl'
        }
      }
    })

    .state('app.about-us' , {
      url :'/about-us',
      views : {
        'menuContent': {
          templateUrl :'templates/about-us.html',
          controller: 'AboutUsCtrl'
        }
      }
    })

    .state('app.notice' , {
      url :'/notice',
      views: {
        'menuContent':{
          templateUrl :'templates/notice.html',
          controller:'NoticeCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
