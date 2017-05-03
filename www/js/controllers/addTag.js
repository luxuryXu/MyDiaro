/**
 * Created by Administrator on 2017/4/29.
 */
angular.module('starter.controllers')
.controller('AddTagCtrl' , function($scope,$http,$rootScope,$ionicLoading){
  $scope.user = JSON.parse(localStorage.user);
  $rootScope.$on('refresh' , function () {
    $scope.user = JSON.parse(localStorage.user);
  });
  $scope.addTag = function(){
    var params = {
      tagName:$scope.tag,
      userId:$scope.user.id
    }
    $http({
      method:'POST',
      url:'/default/user/tag/save',
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      data:$.param(params)
    }).then(function (res) {
      $scope.$emit('closeAdd',{});
    },function (err) {
      $ionicLoading.show({template:err.data.message,duration:1000});
    });
  }
});
