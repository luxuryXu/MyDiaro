/**
 * Created by Administrator on 2017/2/18.
 */
angular.module('starter.controllers')
.controller('PassingTravellersCtrl' , function($scope,$state,$ionicSlideBoxDelegate){
  $scope.name = $state.current.name;
  $scope.index = 0;
  $scope.select = function (index) {
      $scope.index = index;
  }
  $scope.slideTo = function (index) {
      $ionicSlideBoxDelegate.$getByHandle('passingSlide').slide(index,400);
  }
});
