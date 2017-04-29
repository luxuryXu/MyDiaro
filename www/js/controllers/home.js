angular.module('starter.controllers')
  .controller('HomeCtrl',function($scope,$state,toolsService,$rootScope,$ionicModal){
    //日记边框
    setTimeout(function () {
      var borderT = $('.borderT');
      var randomColor;
      for(var i=0; i<borderT.length; i++){
        randomColor = toolsService.randomColor();
        $(borderT[i]).css('border-top-color' , randomColor);
      }
    },0);

    $scope.name = $state.current.name;

    $scope.myDiaries = [
      {
        id:1,
        title : '我的标题'
      }
    ];

  });
