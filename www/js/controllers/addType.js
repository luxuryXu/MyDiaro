/**
 * Created by Administrator on 2017/4/29.
 */
angular.module('starter.controllers')
.controller('AddTypeCtrl' , function($scope,$http,$rootScope,$ionicLoading){
  $scope.user = JSON.parse(localStorage.user);
  $rootScope.$on('refresh' , function () {
    $scope.user = JSON.parse(localStorage.user);
  });
  $scope.addType = function(){
    var params = {
      typeName:$scope.type,
      userId:$scope.user.id
    }
    $http({
      method:'POST',
      url:'/default/user/type/save',
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      data:$.param(params)
    }).then(function (res) {
      $scope.$emit('closeAdd',{});
    },function (err) {
      $ionicLoading.show({template:err.data.message,duration:1000});
    });
  }
});
