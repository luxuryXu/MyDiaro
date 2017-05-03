angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal,$http, $timeout , $rootScope, $ionicLoading,toolsService) {

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

  if(localStorage.user){
    $scope.user = JSON.parse(localStorage.user);
    getTypes($scope.user.id);
    getTags($scope.user.id);
    getLocation($scope.user.id);
  }
  $rootScope.$on('refresh' , function () {
    $scope.user = JSON.parse(localStorage.user);
    getTypes($scope.user.id);
    getTags($scope.user.id);
    getLocation($scope.user.id);
  });

  function getTypes(id) {
    $http.get('/default/user/type/list?userId=' + id)
      .then(function (response) {
        $scope.types = response.data;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
  }

  function getTags(id) {
    $http.get('/default/user/tag/list?userId=' + id)
      .then(function (response) {
        $scope.tags = response.data;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
  }

  function getLocation(id) {
    $http.get('/default/user/location/list?userId=' + id)
      .then(function (response) {
        $scope.locations = response.data;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
  }



  $scope.addType = function($event){
    $event.stopPropagation();
    $ionicModal.fromTemplateUrl('templates/add-type.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.addTypeModal = modal;
        modal.show();
      });
  }

  $scope.addTag = function($event){
    $event.stopPropagation();
    $ionicModal.fromTemplateUrl('templates/add-tag.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.addTagModal = modal;
        modal.show();
      });
  }

  $scope.addLocation = function($event){
    $event.stopPropagation();
    $ionicModal.fromTemplateUrl('templates/add-location.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.addLocationModal = modal;
        modal.show();
      });
  }

  $rootScope.$on('closeAdd' , function(){
    if($scope.addTypeModal){
      $scope.addTypeModal.hide();
      getTypes($scope.user.id);
    }
    if($scope.addTagModal){
      $scope.addTagModal.hide();
      getTags($scope.user.id);
    }
    if($scope.addLocationModal){
      $scope.addLocationModal.hide();
      getLocation($scope.user.id);
    }
  })
})
