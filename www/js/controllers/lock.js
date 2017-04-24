/**
 * Created by 30613 on 2017/4/17.
 */
angular.module('starter.controllers')
.controller('LockCtrl' , function($scope,$ionicModal,toolsService){
  $scope.privacy = false;
  //首先获取当前用户的信息 privacy privacyCode

  $scope.changePrivacy = function(privacy){
    //修改当前用户的privacy属性
    if(privacy){
      toolsService.modal('privacy.html')
          .then(function (modal) {
            $scope.loginModal = modal;
            modal.show();
      });
    }
  }
});
