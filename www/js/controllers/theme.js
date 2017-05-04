/**
 * Created by Administrator on 2017/4/22.
 */
angular.module('starter.controllers')
.controller('ThemeCtrl' , function ($scope,$rootScope,$http,$ionicLoading,$ionicHistory) {
  $scope.user = JSON.parse(localStorage.user);
  $scope.themes = [
    {color : '337ab7'},
    {color : '5cb85c'},
    {color : '5bc0de'},
    {color : 'f0ad4e'},
    {color : 'd9534f'},
    {color : '696969'},
    {color : '000000'},
    {color : 'B8860B'},
    {color : '8B4513'},
    {color : '00FF7F'}
  ];

  var $css = $('.style');
  $scope.changeTheme = function (color) {
    var info = {
      userId:$scope.user.id,
      style:color
    };
    $http({
      method:'POST',
      url:'/default/user/info',
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      data:$.param(info)
    }).then(function (res) {
      $css.attr('href' , 'css/style-'+color+'.css');
      $ionicLoading.show({template:'修改成功',duration:1000});
      setTimeout(function () {
        $ionicHistory.goBack();
      },1000);
      $http.get('/default/user/info/'+$scope.user.id)
        .then(function (res) {
          localStorage.user = JSON.stringify(res.data);
        },function (err) {
          $ionicLoading.show({template:err.data.message,duration:1000});
        });

    },function (err) {
      $ionicLoading.show({template:err.data.message,duration:1000});
      setTimeout(function () {
        $ionicHistory.goBack();
      },1000);
    });

  }
})
