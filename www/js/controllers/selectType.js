/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
.controller('SelectTypeCtrl' , function($scope,$ionicModal){
  $scope.types = [
    {id:1,name:'type1',num:6},
    {id:2,name:'type2',num:3},
    {id:3,name:'type3',num:4}
  ];
  $scope.addType = function(){
    $ionicModal.fromTemplateUrl('templates/add-type.html',{
      scope:$scope.$new(),
      animation:'slide-in-up'
    })
      .then(function(modal){
        $scope.addTypeModal = modal;
        modal.show();
      });
  }
  $scope.$on('closeAdd' , function(){
    $scope.addTypeModal.hide();
  })
});
