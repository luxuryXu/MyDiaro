/**
 * Created by Administrator on 2017/3/13.
 */
angular.module('starter.controllers')
.controller('WriteCtrl' , function($scope,$ionicModal,$http,$rootScope,$ionicLoading,$state){
  $scope.user = JSON.parse(localStorage.user);
  $rootScope.$on('newUser',function () {
    $scope.user = JSON.parse(localStorage.user);
  });
  $scope.$on('$ionicView.enter',function () {
    $scope.diary = {};
    $scope.diary.now = getNowFormatDate();
    setInterval(function () {
      $scope.diary.now = getNowFormatDate();
      $scope.$apply();
    },1000);
  });
  $scope.selectType = function(){
    $ionicModal.fromTemplateUrl('templates/select-type.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.selectTypeModal = modal;
        modal.show();
      });
  }
  $scope.selectTag = function(){
    $ionicModal.fromTemplateUrl('templates/select-tag.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.selectTagModal = modal;
        modal.show();
      });
  }
  $scope.selectLocation = function(){
    $ionicModal.fromTemplateUrl('templates/select-location.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.selectLocationModal = modal;
        modal.show();
      });
  }

  $scope.$on('closeSelect' , function(){
    if($scope.selectTypeModal)
      $scope.selectTypeModal.hide();
    if($scope.selectTagModal)
      $scope.selectTagModal.hide();
    if($scope.selectLocationModal)
      $scope.selectLocationModal.hide();
  })

  $scope.$on('selectLocation' , function(event,data){
    $scope.selectLocationModal.hide();
    $scope.diary.location = data;
  })
  $scope.$on('selectType' , function(event,data){
    $scope.selectTypeModal.hide();
    $scope.diary.type = data;
  })
  $scope.$on('selectTag' , function(event,data){
    $scope.selectTagModal.hide();
    $scope.diary.tag = data;
  })

  function checkTime(n) {
    return n>10?n:'0'+n;
  }

  function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    month = checkTime(month);
    strDate = checkTime(strDate);
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);
    var currentDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + "    " + hour + seperator2 + min
      + seperator2 + sec;
    return currentDate;
  }

  $scope.save = function () {
    var d = {
      title:$scope.diary.title,
      content:$scope.diary.content,
      pictures:$scope.diary.pictures,
      time:new Date($scope.diary.now).getTime(),
      type:$scope.diary.type,
      tag:$scope.diary.tag,
      location:$scope.diary.location,
      open:$scope.diary.open?1:0,
      loves:0,
      collects:0,
      views:0,
      user:$scope.user
    };
    $http({
      method:'POST',
      url:'/default/diary/save',
      data:d
    }).then(function () {
      $ionicLoading.show({template:'保存成功',duration:1000});
      $rootScope.$broadcast('getDiaries',{});
      $state.go('app.home');
    },function (err) {
      $ionicLoading.show({template:err.data.message,duration:1000});
    });
  }
})
