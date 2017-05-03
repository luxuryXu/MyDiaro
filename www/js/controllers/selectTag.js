/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
  .controller('SelectTagCtrl' , function($scope,$http,$ionicModal,$rootScope,$ionicLoading){
    $scope.user = JSON.parse(localStorage.user);
    $rootScope.$on('refresh' , function () {
      $scope.user = JSON.parse(localStorage.user);
    });
    $http.get('/default/user/tag/list?userId=' + $scope.user.id)
      .then(function (response) {
        $scope.tags = response.data;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });

    $scope.addTag = function(){
      $ionicModal.fromTemplateUrl('templates/add-tag.html',{
        scope:$scope.$new(),
        animation:'slide-in-up'
      })
        .then(function(modal){
          $scope.addTagModal = modal;
          modal.show();
        });
    }
    $scope.$on('closeAdd' , function(){
      $scope.addTagModal.hide();
    })
  });
