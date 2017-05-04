angular.module('starter.controllers')
  .controller('HomeCtrl',function($scope,$state,$ionicLoading,$http,toolsService,$rootScope,$ionicModal){
    if(!localStorage.user){
      $state.go('app.login');
    }
    $scope.name = $state.current.name;
    $scope.myDiaries = [];
    $scope.currentPage = 1;
    $scope.limit = 5;
    $scope.user = JSON.parse(localStorage.user);
    $rootScope.$on('newUser',function () {
      $scope.user = JSON.parse(localStorage.user);
      $scope.myDiaries = [];
      $scope.currentPage = 1;
      getDiaries($scope.currentPage);
    });
    getDiaries($scope.currentPage);

    function getDiaries(currentPage) {
      $http.get('/default/diary/list/',{params:{
        id:$scope.user.id,
        offset:(currentPage-1)*$scope.limit,
        limit:$scope.limit
      }}).then(function (res) {
        var newDiaries = res.data.resultList;
        for(var i=0; i<newDiaries.length; i++){
          $scope.myDiaries.push(newDiaries[i]);
        }
        $scope.totalCount = res.data.totalCount;
        $scope.totalPages = $scope.totalCount/$scope.limit==0?$scope.totalCount/$scope.limit:Math.floor($scope.totalCount/$scope.limit)+1;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
    }

    $scope.more = function () {
      $scope.currentPage = $scope.currentPage+1;
      getDiaries($scope.currentPage);
    }

    $rootScope.$on('getDiaries' , function () {
      $scope.myDiaries = [];
      $scope.currentPage = 1;
      getDiaries($scope.currentPage);
    });

    //日记边框
    setTimeout(function () {
      var borderT = $('.borderT');
      var randomColor;
      for(var i=0; i<borderT.length; i++){
        randomColor = toolsService.randomColor();
        $(borderT[i]).css('border-top-color' , randomColor);
      }
    },0);
  });
