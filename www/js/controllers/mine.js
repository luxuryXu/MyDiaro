/**
 * Created by Administrator on 2017/2/18.
 */
angular.module('starter.controllers')
.controller('MineCtrl' , function($scope,$ionicModal,$rootScope,$state){
  $scope.name = $state.current.name;
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
});
