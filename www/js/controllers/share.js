/**
 * Created by Administrator on 2017/4/16.
 */
angular.module('starter.controllers')
.controller('ShareCtrl' , function ($scope,shareService) {
  $scope.share = shareService;
});
