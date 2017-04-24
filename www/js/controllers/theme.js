/**
 * Created by Administrator on 2017/4/22.
 */
angular.module('starter.controllers')
.controller('ThemeCtrl' , function ($scope,$rootScope) {
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
    $css.attr('href' , 'css/style-'+color+'.css');
    //修改user的主题
  }
})
