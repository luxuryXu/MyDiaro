angular.module('starter.controllers')
  .controller('HomeCtrl',function($scope,$state,$ionicLoading,$http,toolsService,$rootScope,$ionicModal){
    if(!localStorage.user){
      $state.go('app.login');
    }
    var $css = $('.style');
    $scope.name = $state.current.name;
    $scope.myDiaries = [];
    $scope.currentPage = 1;
    $scope.limit = 10;
    $scope.user = JSON.parse(localStorage.user);

    $rootScope.$on('newUser',function () {
      checkLock();
      $scope.user = JSON.parse(localStorage.user);
      $scope.user.style = !$scope.user.style?'337ab7':$scope.user.style;
      $css.attr('href' , 'css/style-'+$scope.user.style+'.css');
      $scope.myDiaries = [];
      $scope.currentPage = 1;
      getDiaries($scope.currentPage);
    });

    $scope.$on('ok' , function () {
      $scope.lockModal.hide();
    });

    $scope.user.style = !$scope.user.style?'337ab7':$scope.user.style;
    $css.attr('href' , 'css/style-'+$scope.user.style+'.css');
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

    function checkLock() {
      if($scope.user.lockCode){
        $ionicModal.fromTemplateUrl('templates/lockCode.html' , {
          scope:$scope.$new(),
          animation:'slide-in-up'
        }).then(function (modal) {
          $scope.lockModal = modal;
          modal.show();
        });
      }
    }
  });
