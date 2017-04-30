/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
  .controller('SelectTagCtrl' , function($scope,$ionicModal){
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
