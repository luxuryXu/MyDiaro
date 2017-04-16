/**
 * Created by Administrator on 2017/4/16.
 */
angular.module('starter.services')
.service('shareService' , function ($q) {
  this.shareToQQ = function () {
    var args = {
      url : 'http://localhost:8100/#/app/mine',
      title: 'Mydiaro',
      description: '简单精致，记录生活',
      appName: "MyDiaro"
    };
    return $q(function (resolve, reject) {
      YCQQ.shareToQQ(function () {
        resolve(1);
      }, function (reason) {
        reject(reason);
      }, args);
    });
  }
});
