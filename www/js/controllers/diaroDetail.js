/**
 * Created by 30613 on 2017/3/27.
 */
angular.module('starter.controllers')
  .controller('DiaroCtrl' , function($scope,$stateParams,$http,$ionicLoading){
    $scope.user = JSON.parse(localStorage.user);
    $http.get('/default/diary/info/' + $stateParams.id)
      .then(function (res) {
        $scope.diary = res.data;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
  });
