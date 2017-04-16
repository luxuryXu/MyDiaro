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
    replace : true
  }
});
