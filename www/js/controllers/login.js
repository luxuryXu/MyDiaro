/**
 * Created by Administrator on 2017/4/8.
 */
angular.module('starter.controllers')
.controller('LoginCtrl' , function ($scope , loginService , $ionicLoading , $rootScope) {
    $scope.loginData = {
      userName:null,
      password:null
    };
    $scope.doLogin = function () {
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
});
