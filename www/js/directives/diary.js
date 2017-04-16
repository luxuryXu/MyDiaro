/**
 * Created by Administrator on 2017/4/16.
 */
angular.module('starter.directives')
.directive('diary' , function () {
  return{
    restrict : 'E',
    scope:{
      ngModel : '='
    },
    templateUrl : 'templates/diary.html',
    replace : true
  }
});
