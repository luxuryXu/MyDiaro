/**
 * Created by Administrator on 2017/5/4.
 */
angular.module('starter.directives')
  .directive('commentCard' , function () {
    return{
      restrict : 'E',
      scope:{
        ngModel : '='
      },
      templateUrl : 'templates/comment-card.html',
      replace : true
    }
  });
