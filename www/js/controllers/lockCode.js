/**
 * Created by Administrator on 2017/5/4.
 */
angular.module('starter.controllers')
  .controller('LockCodeCtrl' , function ($scope,$http,$ionicLoading) {
    $scope.user = JSON.parse(localStorage.user);
    $scope.check = function () {
      if($scope.user.lockCode==$scope.lockCode){
        $scope.$emit('ok',{});
      }else{
        $ionicLoading.show({template:'隐私密码错误',duration:1000});
      }
    }
  });
