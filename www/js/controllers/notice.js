/**
 * Created by Administrator on 2017/4/29.
 */
angular.module('starter.controllers')
.controller('NoticeCtrl' , function($scope){
  $scope.notices = [
    {id:1 , title:'MyDiary1.0发布',date:'1488323623006',content:'\n\nMyDiary1.0发布啦！！！'}
  ];
});
