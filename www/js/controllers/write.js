/**
 * Created by Administrator on 2017/3/13.
 */
angular.module('starter.controllers')
.controller('WriteCtrl' , function($scope,$ionicModal,$http,$rootScope,$ionicLoading){
  $scope.diary = {};
  $scope.diary.now = getNowFormatDate();
  setInterval(function () {
    $scope.diary.now = getNowFormatDate();
    $scope.$apply();
  },1000);
  // console.log(new Date($scope.diary.now).getTime());
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

  function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }

    var currentDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + "    " + date.getHours() + seperator2 + date.getMinutes()
      + seperator2 + date.getSeconds();
    return currentDate;
  }

  $scope.user = JSON.parse(localStorage.user);
  $rootScope.$on('refresh' , function () {
    $scope.user = JSON.parse(localStorage.user);
  });

  $scope.save = function () {
    var d = {
      title:$scope.diary.title,
      content:$scope.diary.content,
      pictures:$scope.diary.pictures,
      time:new Date($scope.diary.now).getTime(),
      typeId:$scope.diary.type.id,
      tagId:$scope.diary.tag.id,
      location:$scope.diary.location.id,
      open:$scope.diary.open?1:0,
      loves:0,
      collects:0,
      views:0,
      userId:$scope.user.id
    };
    $http({
      method:'POST',
      url:'/default/diary/save',
      data:d
    }).then(function (res) {
      console.log(res);
    },function (err) {
      $ionicLoading.show({template:err.data.message,duration:1000});
    });
  }
})
