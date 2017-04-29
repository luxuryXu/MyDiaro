/**
 * Created by Administrator on 2017/4/29.
 */
angular.module('starter.controllers')
.controller('AddCtrl' , function($scope,$rootScope){
  $scope.close = function(){
    $rootScope.$broadcast('close',{});
  }
  $scope.doAdd = function(){
    alert(1);
  }
});
