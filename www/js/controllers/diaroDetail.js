/**
 * Created by 30613 on 2017/3/27.
 */
angular.module('starter.controllers')
  .controller('DiaroCtrl' , function($scope,$stateParams,$http,$ionicLoading){
    $scope.user = JSON.parse(localStorage.user);
    var now = new Date().getTime();
    $http.get('/default/diary/info/' + $stateParams.id)
      .then(function (res) {
        $scope.diary = res.data;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });

    $http.get('/default/comment/list?diaryId=' + $stateParams.id)
      .then(function (res) {
        $scope.comments = res.data;
        for(var i in $scope.comments){
          $scope.comments[i].time = $scope.changeTime(now-$scope.comments[i].time);
        }
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
    // $scope.$on('$ionicView.enter' , function () {
    //   setTimeout(function () {
    //     var params = {
    //       diaryId:$scope.diary.id
    //     }
    //     if($scope.diary.user.id != $scope.user.id){
    //       $http({
    //         method:'POST',
    //         url:'/default/diary/views/update',
    //         headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    //         data:$.param(params)
    //       }).then(function (res) {
    //         console.log(res);
    //       },function (err) {
    //         $ionicLoading.show({template:err.data.message,duration:1000});
    //       });
    //     }
    //   },100);
    // })

    $scope.send = function () {
      var comment = {
        content:$scope.newComment.content,
        time:new Date().getTime(),
        diaryId:$stateParams.id,
        userId:$scope.user.id
      };
      $http({
        method:'POST',
        url:'/default/comment/save',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data:$.param(comment)
      }).then(function (res) {
        $scope.newComment.content = '';
        $('.comment-input input').blur();
        $scope.comments.unshift();
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
    };

    $http.get('/default/diary/loves/yet',{params:{
      diaryId:$stateParams.id,
      userId:$scope.user.id
    }}).then(function (res) {
      $scope.currentLoved = res.data;
    },function (err) {
      $ionicLoading({template:err.data.message,duration:1000});
    });


    $http.get('/default/diary/collects/yet',{params:{
      diaryId:$stateParams.id,
      userId:$scope.user.id
    }}).then(function (res) {
      $scope.currentCollected = res.data;
    },function (err) {
      $ionicLoading.show({template:err.data.message,duration:1000});
    });

    $scope.doLove = function () {
      var params = {
        diaryId:$stateParams.id,
        userId:$scope.user.id
      };
      $http({
        method:'POST',
        url:'/default/diary/loves/update',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data:$.param(params)
      }).then(function (res) {
        $scope.currentLoved = true;
        $scope.diary.loves = $scope.diary.loves + 1;
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
    };

    $scope.loved = function () {
      $ionicLoading.show({template:'您已顶过~',duration:1000});
    };

    $scope.doCollect = function (type) {
      var params = {
        diaryId:$stateParams.id,
        userId:$scope.user.id,
        type:type
      };
      $http({
        method:'POST',
        url:'/default/diary/collects/update',
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        data:$.param(params)
      }).then(function (res) {
        var message = type==0?'取消收藏成功':'收藏成功~';
        $scope.currentCollected = !$scope.currentCollected;
        $ionicLoading.show({template:message,duration:1000});
        console.log(res);
      },function (err) {
        $ionicLoading.show({template:err.data.message,duration:1000});
      });
    };

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
