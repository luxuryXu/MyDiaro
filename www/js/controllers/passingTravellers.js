/**
 * Created by Administrator on 2017/2/18.
 */
angular.module('starter.controllers')
.controller('PassingTravellersCtrl' , function($scope,$http,$state,$ionicSlideBoxDelegate,$ionicLoading){
  var now = new Date().getTime();
  $scope.name = $state.current.name;
  $scope.limit = 10;
  $scope.index = 0;
  getData($scope.index,$scope.limit);
  $scope.select = function (index) {
      $scope.index = index;
      getData(index);
  }
  $scope.slideTo = function (index) {
      $ionicSlideBoxDelegate.$getByHandle('passingSlide').slide(index,400);
      getData(index);
  };


  function getData(index) {
    switch (index){
      case 0:
        $http.get('/default/diary/newest/list',
          {params:{offset:0,limit:$scope.limit}}
        ).then(function (res) {
          $scope.newDiaries = res.data.resultList;
          for(var i in $scope.newDiaries){
            $scope.newDiaries[i].time = $scope.changeTime(now-$scope.newDiaries[i].time);
          }
          console.log($scope.newDiaries);
        },function (err) {
          $ionicLoading.show({template:err.data.message,duration:1000});
        });
        break;
      case 1:
        $http.get('/default/diary/hot/list',
          {params:{offset:0,limit:$scope.limit}}
        ).then(function (res) {
          $scope.hotDiaries = res.data.resultList;
          for(var i in $scope.hotDiaries){
            $scope.hotDiaries[i].time = $scope.changeTime(now-$scope.hotDiaries[i].time);
          }
          console.log($scope.hotDiaries);
        },function (err) {
          $ionicLoading.show({template:err.data.message,duration:1000});
        });
        break;
      case 2:
        break;
    }
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






});
