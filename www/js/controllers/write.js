/**
 * Created by Administrator on 2017/3/13.
 */
angular.module('starter.controllers')
.controller('WriteCtrl' , function($scope,$ionicModal,$rootScope){
  $scope.selectType = function(){
    $ionicModal.fromTemplateUrl('templates/select-type.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.selectTypeModal = modal;
        modal.show();
      });
  }
  $scope.selectTag = function(){
    $ionicModal.fromTemplateUrl('templates/select-tag.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.selectTagModal = modal;
        modal.show();
      });
  }
  $scope.selectLocation = function(){
    $ionicModal.fromTemplateUrl('templates/select-location.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.selectLocationModal = modal;
        modal.show();
      });
  }

  $scope.$on('closeSelect' , function(){
    if($scope.selectTypeModal)
      $scope.selectTypeModal.hide();
    if($scope.selectTagModal)
      $scope.selectTagModal.hide();
    if($scope.selectLocationModal)
      $scope.selectLocationModal.hide();
  })

  $rootScope.$on('close' , function(){
    if($scope.addTypeModal){
      $scope.addTypeModal.hide();
    }
    if($scope.addTagModal){
      $scope.addTagModal.hide();
    }
    if($scope.addLocationModal){
      $scope.addLocationModal.hide();
    }
  })
})
