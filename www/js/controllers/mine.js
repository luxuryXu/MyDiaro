/**
 * Created by Administrator on 2017/2/18.
 */
angular.module('starter.controllers')
.controller('MineCtrl' , function($scope,$ionicModal,$rootScope,$state,$ionicLoading){
  $scope.name = $state.current.name;
  $scope.user = JSON.parse(localStorage.user);
  $rootScope.$on('refresh' , function () {
    $scope.user = JSON.parse(localStorage.user);
  });
  $scope.signOut = function () {
    localStorage.removeItem('user');
    $rootScope.loginModal.show();
  }
  //photo
  $scope.showHeadList = function(){
    var scope = $scope.$new();
    $ionicModal.fromTemplateUrl('templates/photo.html',{
      scope : scope,
      animation : 'slide-in-up'
    }).then(function(modal){
      $scope.avatarModal = modal;
      $scope.avatarModal.show();
    });
  };
  //share
  $scope.showShareList = function(){
    var scope = $scope.$new();
    $ionicModal.fromTemplateUrl('templates/share.html',{
      scope : scope,
      animation : 'slide-in-up'
    }).then(function(modal){
      $scope.shareModal = modal;
      $scope.shareModal.show();
    });
  }

  //$scope.takePhoto = function () {
  //  Camera.takePhoto({
  //    quality :75,
  //    targetWidth:100,
  //    targetHeight:100,
  //    saveToPhotoAlbum:true
  //  }).then(function(imageURI){
  //    $scope.lastPhoto = imageURI;
  //  },function(err){
  //    $ionicLoading.show({template:"您已取消相机使用！",duration:2000});
  //  });
  //}

});
