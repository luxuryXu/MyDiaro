/**
 * Created by 30613 on 2017/2/20.
 */
angular.module('starter.controllers')
.controller('DataModifyCtrl' , function($scope,$http,$state,$ionicLoading,$ionicHistory,$rootScope){
    $scope.user = JSON.parse(localStorage.user);
    $scope.save = function () {
      var info = {
        userId:$scope.user.id,
        nickName:$scope.user.nickName,
        sign:$scope.user.sign
      };
      $http({
        method:'POST',
        url:'/default/user/info',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data:$.param(info)
      }).then(function () {
        localStorage.user = JSON.stringify($scope.user);
        $ionicLoading.show({template:'修改成功',duration:1000});
        $rootScope.$broadcast('modify',{});
        setTimeout(function () {
          $ionicHistory.goBack();
        },1000);
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
        setTimeout(function () {
          $ionicHistory.goBack();
        },1000);
      });
    }
});
