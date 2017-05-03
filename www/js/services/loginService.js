/**
 * Created by Administrator on 2017/4/8.
 */
angular.module('starter.services')
.service('loginService' , function ($http) {
  return{
    login: function (loginData) {
      return $http({
        method:'post',
        url:'/default/root/login',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data: $.param(loginData)
      })
    },
    register: function (registerData) {
      return $http({
        method:'POST',
        url: '/default/root/register',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data: $.param(registerData)
      })
    }
  }
});
