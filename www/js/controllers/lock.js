/**
 * Created by 30613 on 2017/4/17.
 */
angular.module('starter.controllers')
.controller('LockCtrl' , function($scope,$ionicModal,$http,toolsService){
  //首先获取当前用户的信息 privacy privacyCode
  $scope.user = JSON.parse(localStorage.user);
  $scope.privacy = !$scope.user.lockCode?false:true;
  $scope.$on('privacy' , function () {
    $scope.privacyModal.hide();
    $scope.user = JSON.parse(localStorage.user);
    $scope.privacy = !$scope.user.lockCode?false:true;
  });
  $scope.$on('closePrivacy' , function () {
    $scope.privacyModal.hide();
    $scope.privacy = !$scope.user.lockCode?false:true;
  });

  $scope.changePrivacy = function(privacy){
    //修改当前用户的privacy属性
    if(privacy){
      $ionicModal.fromTemplateUrl('templates/privacy.html',{
        scope:$scope.$new(),
        animation:'slide-in-up'
      })
        .then(function(modal){
          modal.show();
          $scope.privacyModal = modal;
        });
    }else{
      var info = {
        userId:$scope.user.id,
        lockCode:null
      };
      $http({
        method:'POST',
        url:'/default/user/info',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data:$.param(info)
      }).then(function () {
        $http.get('/default/user/info/'+$scope.user.id)
          .then(function (res) {
            localStorage.user = JSON.stringify(res.data);
          });
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
    }
  }
});
