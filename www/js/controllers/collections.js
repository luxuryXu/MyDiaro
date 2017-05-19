angular.module('starter.controllers')
.controller('CollectionsCtrl',function($scope,$http,$ionicLoading){
  $scope.limit = 2;
  var now = new Date().getTime();
  $http.get('/default/diary/newest/list',
    {params:{offset:0,limit:$scope.limit}}
  ).then(function (res) {
    $scope.collections = res.data.resultList;
    for(var i in $scope.collections){
      $scope.collections[i].time = $scope.changeTime(now-$scope.collections[i].time);
    }
  },function (err) {
    $ionicLoading.show({template:err.data.message,duration:1000});
  });

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
})
