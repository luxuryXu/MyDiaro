/**
 * Created by 30613 on 2017/2/20.
 */
angular.module('starter.controllers')
.controller('DataModifyCtrl' , function($scope,$http){
    $scope.user = JSON.parse(localStorage.user);

});
