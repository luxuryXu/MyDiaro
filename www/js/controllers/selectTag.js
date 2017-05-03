/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
  .controller('SelectTagCtrl' , function($scope,$ionicModal){
    $scope.tags = [
      {id:1,name:'tag1',num:4},
      {id:2,name:'tag2',num:8},
      {id:3,name:'tag3',num:11}
    ];
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
