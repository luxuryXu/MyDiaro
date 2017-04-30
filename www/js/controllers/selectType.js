/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
.controller('SelectTypeCtrl' , function($scope,$ionicModal){
  $scope.$on('addType' , function(){
    $ionicModal.fromTemplateUrl('templates/add-type.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.addTypeModal = modal;
        modal.show();
      });
  });

  $scope.$on('closeAdd' , function(){
    $scope.addTypeModal.hide();
  })
});
