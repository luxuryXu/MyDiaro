angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout , toolsService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  /****随机色****/
  var randowColor;
  var borderC = $('.borderC');

  for(var i=0; i<borderC.length; i++){
      randowColor = toolsService.randomColor();
      $(borderC[i]).css('border-left-color' , randowColor);
  }


  $scope.header = {
    monday: 'Mon',
    tuesday: 'Tue',
    wednesday: 'Wed',
    thursday: 'Thu',
    friday: 'Fri',
    saturday: 'Sat',
    sunday: 'Sun'
  }
  $scope.arrows = {
    year: {
      left: 'img/white_arrow_left.svg',
      right: 'img/white_arrow_right.svg'
    },
    month: {
      left: 'img/grey_arrow_left.svg',
      right: 'img/grey_arrow_right.svg'
    }
  };

  setTimeout(function(){
    var height = $('.mb-datepicker').height();
    $('.date-wrap').css('height', height + 'px');
  },100);

  $scope.isSlide = function(index){
    var item = $('.list>li').eq(index).find('.theme-list');
    var icon = $('.list>li').eq(index).find('.attr-name i');
    if(item.css('display')=='none'){
      item.show();
      icon.removeClass('ion-ios-arrow-right').addClass('ion-ios-arrow-down');
    }else{
      item.hide();
      icon.removeClass('ion-ios-arrow-down').addClass('ion-ios-arrow-right');
    }
  }


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
