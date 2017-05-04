/**
 * Created by Administrator on 2017/5/4.
 */
angular.module('starter.controllers')
  .controller('PrivacyCtrl' , function ($scope,$http,$ionicLoading) {
    $scope.user = JSON.parse(localStorage.user);
    $scope.confirm = function () {
      var info = {
        userId:$scope.user.id,
        lockCode:$scope.lockCode
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
        $scope.$emit('privacy',{});
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
    }
  });
