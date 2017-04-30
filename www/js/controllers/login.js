/**
 * Created by Administrator on 2017/4/8.
 */
angular.module('starter.controllers')
.controller('LoginCtrl' , function ($scope , loginService , $ionicLoading , $rootScope , $ionicModal) {
    $scope.loginData = {
      username:null,
      password:null
    };
    $scope.doLogin = function () {
      var color = '000000';
      var $css = $('.style');
      $css.attr('href' , 'css/style-'+color+'.css');
      $rootScope.loginModal.hide();
      loginService.login($scope.loginData)
        .then(function (response) {
          if(response.data != 0){
              localStorage.user = response.data;
              $rootScope.$broadcast('closeLogin',{});
              window.location.href = '#/app/home';
          }else{
              $ionicLoading.show({template:'用户名或密码错误',duration:2000});
          }
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
