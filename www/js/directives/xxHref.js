/**
 * Created by Administrator on 2017/3/13.
 */
angular.module('starter.directives')
.directive('xxHref',function($location){
    return{
        restrict : 'A',
        priority : 99,
        link : function(scope,element,attr){
            element.on('click' , function () {
                document.location.href = element.attr('xx-href');
            })
        }
    }
});
