angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout , $rootScope, toolsService) {

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

  $scope.types = [
    {id:1,name:'朋友'},
    {id:2,name:'爱情'},
    {id:3,name:'商业'}
  ];

  $scope.addType = function(){
    $ionicModal.fromTemplateUrl('templates/add-type.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.addModal = modal;
        modal.show();
      });
  }

  $rootScope.$on('close' , function(){
    $scope.addModal.hide();
  })
})
