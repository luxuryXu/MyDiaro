angular.module('starter.controllers')
  .controller('HomeCtrl',function($scope,$state,toolsService,$rootScope){
    if( !localStorage.user ){
      toolsService.modal('login.html')
        .then(function (modal) {
          $scope.loginModal = modal;
          modal.show();
        })
    }
    $rootScope.$on('closeLogin' , function () {
      $scope.loginModal.hide();
    })
    //日记边框
    var borderT = $('.borderT');
    var randomColor;
    for(var i=0; i<borderT.length; i++){
      randomColor = toolsService.randomColor();
      $(borderT[i]).css('border-top-color' , randomColor);
    }
    $scope.name = $state.current.name;

    $scope.myDiaries = [
      {
        id:1,
        title : '我的标题'
      }
    ];

  });
