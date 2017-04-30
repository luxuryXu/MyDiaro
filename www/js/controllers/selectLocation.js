/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
  .controller('SelectLocationCtrl' , function($scope,$ionicModal){
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
