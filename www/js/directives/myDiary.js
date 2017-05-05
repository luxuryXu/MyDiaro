/**
 * Created by Administrator on 2017/4/16.
 */
angular.module('starter.directives')
.directive('myDiary' , function () {
  return{
    restrict : 'E',
    scope : {
      ngModel : '='
    },
    templateUrl : 'templates/myDiary.html',
    controller:function ($scope) {
      var now = new Date($scope.ngModel.time);
      var week = now.getDay();
      $scope.date = checkTime(now.getDate());
      $scope.specific = checkTime(now.getHours()) + ':' + checkTime(now.getMinutes());
      switch (week){
        case 0:
          week = '周日';
          break;
        case 1:
          week = '周一';
          break;
        case 2:
          week = '周二';
          break;
        case 3:
          week = '周三';
          break;
        case 4:
          week = '周四';
          break;
        case 5:
          week = '周五';
          break;
        case 6:
          week = '周六';
          break;
      }
      $scope.week = week;
      function checkTime(n) {
        return n>10?n:'0'+n;
      }
    },
    replace : true
  }
});
