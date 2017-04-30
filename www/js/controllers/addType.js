/**
 * Created by Administrator on 2017/4/29.
 */
angular.module('starter.controllers')
.controller('AddTypeCtrl' , function($scope){
  $scope.newType = '';
  $scope.doAdd = function(){
    console.log($scope.newType);
  }


});
