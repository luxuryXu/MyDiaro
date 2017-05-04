/**
 * Created by Administrator on 2017/4/8.
 */
angular.module('starter.controllers')
.controller('LoginCtrl' , function ($scope , loginService , $ionicLoading , $rootScope , $ionicModal , $state) {
    $scope.doLogin = function () {
      loginService.login($scope.loginData)
        .then(function (response) {
          localStorage.user = JSON.stringify(response.data);
          $rootScope.$broadcast('newUser',{});
          $ionicLoading.show({template:'登录成功',duration:1000});
          setTimeout(function () {
            $state.go('app.home');
          },1000);
        },function (err) {
          $ionicLoading.show({template:err.data.message,duration:1000});
        });
    }

    $scope.doRegister = function () {
      loginService.register($scope.register)
        .then(function (response) {
          $ionicLoading.show({template:'注册成功',duration:1000});
          $scope.registerModal.hide();
          loginService.login($scope.register)
            .then(function (response) {
              localStorage.user = JSON.stringify(response.data);
              $ionicLoading.show({template:'登录成功',duration:1000});
              $rootScope.$broadcast('newUser',{});
              setTimeout(function () {
                $state.go('app.home');
              },1000);
            });
        },function (err) {
          $ionicLoading.show({template:err.data.message,duration:1000});
        });
    }

    $scope.openRegister = function(){
      $ionicModal.fromTemplateUrl('templates/registe.html',{
        scope:$scope.$new(),
        animation:'slide-in-up'
      }).then(function (modal) {
        modal.show();
        $scope.registerModal = modal;
      });
    }
    $scope.closeRegister = function () {
      $scope.registerModal.hide();
    }
    $scope.openForgetPassword = function(){
      $ionicModal.fromTemplateUrl('templates/forget-password.html',{
        scope:$scope.$new(),
        animation:'slide-in-up'
      }).then(function (modal) {
        modal.show();
        $scope.forgetPasswordModal = modal;
      });
    }
    $scope.closeForgetPassword = function(){
      $scope.forgetPasswordModal.hide();
    }

});
