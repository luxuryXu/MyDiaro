/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
  .controller('SelectLocationCtrl' , function($scope,$ionicModal){
      $scope.locations = [
        {id:1,name:'Business',num:2},
        {id:2,name:'Friends',num:5},
        {id:3,name:'Love',num:12}
      ];
      $scope.addLocation = function(){
        $ionicModal.fromTemplateUrl('templates/add-location.html',{
          scope:$scope.$new(),
          animation:'slide-in-up'
        })
          .then(function(modal){
            $scope.addLocationModal = modal;
            modal.show();
          });
      }

      $scope.$on('closeAdd' , function(){
        $scope.addLocationModal.hide();
      });
  });
