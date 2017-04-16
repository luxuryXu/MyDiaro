/**
 * Created by Administrator on 2017/2/18.
 */
angular.module('starter.controllers')
.controller('PassingTravellersCtrl' , function($scope,$state,$ionicSlideBoxDelegate,toolsService){
  var now = new Date().getTime();
  setTimeout(function () {
    var randomColor;
    var d = $('.d');
    for(var i=0; i<d.length; i++){
      randomColor = toolsService.randomColor();
      $(d[i]).css('background',randomColor);
    }
  },100);

  $scope.name = $state.current.name;
  $scope.index = 0;
  $scope.select = function (index) {
      $scope.index = index;
  }
  $scope.slideTo = function (index) {
      $ionicSlideBoxDelegate.$getByHandle('passingSlide').slide(index,400);
  }
  $scope.diaries = [
    {
      id : 1,
      title : '日记标题',
      text : '日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容',
      time : 1492351660320, //创建时间
      stats:{
        loves : 7
      },
      user:{
        id : 1,
        nickName : 'node' ,
        avatarUrl : environment.imagePrefix + 'ionic.png'
      }

    },
    {
      id : 2,
      title : '日记标题2',
      text : '日记内容日22记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容日记内容',
      time : 1492353774394, //创建时间
      stats:{
        loves : 77
      },
      user:{
        id : 2,
        nickName : 'xff' ,
        avatarUrl : environment.imagePrefix + 'ionic.png'
      }

    }
  ];

  $scope.changeTime = function (millions) {
    var str;
    if(millions>31622400*1000){
      millions = Math.round(millions/(31622400*1000));
      str = millions + '年前';
    }else if(millions>31622400*1000/12){
      millions = Math.round(millions/(31622400*1000/12));
      str = millions + '月前';
    }else if(millions>31622400*1000/12/30){
      millions = Math.round(millions/(31622400*1000/12/30));
      str = millions + '天前';
    }else if(millions>31622400*1000/12/30/24){
      millions = Math.round(millions/(31622400*1000/12/30/24));
      str = millions + '小时前';
    }else if(millions>60000){
      millions = Math.round(millions/60000);
      str = millions + '分钟前';
    }else {
      str = '刚刚';
    }
    return str;
  }

  for(var i in $scope.diaries){
    $scope.diaries[i].time = $scope.changeTime(now-$scope.diaries[i].time);
  }




});
