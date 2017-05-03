/**
 * Created by Administrator on 2017/4/30.
 */
angular.module('starter.controllers')
.controller('SelectTypeCtrl' , function($scope,$http,$ionicModal,$rootScope,$ionicLoading){
  $scope.user = JSON.parse(localStorage.user);
  $rootScope.$on('refresh' , function () {
    $scope.user = JSON.parse(localStorage.user);
  });
  getTypes($scope.user.id);

  function getTypes(id) {
    $http.get('/default/user/type/list?userId=' + id)
      .then(function (response) {
        $scope.types = response.data;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
  }

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
    getTypes($scope.user.id);
  })
});
