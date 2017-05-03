/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
  .controller('SelectLocationCtrl' , function($scope,$http,$ionicModal,$rootScope,$ionicLoading){
    $scope.user = JSON.parse(localStorage.user);
    $rootScope.$on('refresh' , function () {
      $scope.user = JSON.parse(localStorage.user);
    });
    $http.get('/default/user/location/list?userId=' + $scope.user.id)
      .then(function (response) {
        $scope.locations = response.data;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
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
