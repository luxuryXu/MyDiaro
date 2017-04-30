/**
 * Created by Administrator on 2017/4/29.
 */
/**
 * Created by Administrator on 2017/4/29.
 */
angular.module('starter.controllers')
  .controller('AddLocationCtrl' , function($scope,$ionicLoading){
    $scope.location = null;
    $scope.addLocation = function(){
      $ionicLoading.show({template:'添加成功',duration:1000});
    }
  });
