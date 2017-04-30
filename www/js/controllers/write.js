/**
 * Created by Administrator on 2017/3/13.
 */
angular.module('starter.controllers')
.controller('WriteCtrl' , function($scope,$ionicModal,$rootScope){
  $scope.selectType = function(){
    $ionicModal.fromTemplateUrl('templates/add-type.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.addTypeModal = modal;
        modal.show();
      });
    // $ionicModal.fromTemplateUrl('templates/add-type.html',{
    //   scope:$scope.$new(),
    //   animation:'slide-in-up'
    // })
    //   .then(function(modal){
    //     $scope.addTypeModal = modal;
    //     modal.show();
    //   });
  }

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
