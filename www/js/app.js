// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter.controllers',[])
angular.module('starter.services',[])
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])
.run(function($ionicPlatform,$rootScope,$state) {
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
  $rootScope.$on('$ionicView.enter' , function(){
    var index = {
      'app.home':0,
      'app.passing-travellers':1,
      'app.mine':2
    }[$state.current.name];
    if(index != undefined){
      $('#bottom-view').show();
      $('#bottom-view>a').eq(index).addClass('theme-word');
      $('#bottom-view>a').eq(index).siblings().removeClass('theme-word');
    }else{
      $('#bottom-view').hide();
    }
  })
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
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
