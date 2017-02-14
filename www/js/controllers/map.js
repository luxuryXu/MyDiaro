/**
 * Created by 30613 on 2017/2/14.
 */
angular.module('starter.controllers')
  .controller('MapCtrl' , function($scope){
      var map = new BMap.Map($('#map-container'));
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
  });
