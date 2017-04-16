/**
 * Created by Administrator on 2017/4/8.
 */
angular.module('starter.services')
.service('loginService' , function ($http,urlService) {
  return{
    login: function (loginData) {
      return $http({
        method:'post',
        url:'/default/userLogin',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data:$.param(loginData)
      })
    }
  }
});
