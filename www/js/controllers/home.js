angular.module('starter.controllers')
  .controller('HomeCtrl',function($scope,$state,toolsService){
    var borderT = $('.borderT');
    var randomColor;
    for(var i=0; i<borderT.length; i++){
      randomColor = toolsService.randomColor();
      $(borderT[i]).css('border-top-color' , randomColor);
    }
    $scope.name = $state.current.name;
  });
