/**
 * Created by 30613 on 2017/3/27.
 */
angular.module('starter.services')
  .service('Camera' , function($q,$cordovaCamera,$ionicLoading,$file){
    return{
        takePhoto:function(){
          var options = {
            quality: 100,
            allowEdit: true,
            sourceType: PHOTOLIBRARY=1,
            targetWidth: 100,
            targetHeight: 100,
            mediaType:0,
            cameraDirection:0,
            saveToPhotoAlbum: true
          };
          $cordovaCamera.getPicture(options).then(function(imageUrl) {
            //window.resolveLocalFileSystemURL(imageUrl, function (entry) {
            //  md5chksum.file(entry, function (md5) {
            //    CordovaExif.readData(imageUrl, function (exif) {
            //      $file.getSize(imageUrl).then(function (size) {
            //        $scope.$emit('photo', {
            //          name: name,
            //          url: imageUrl,
            //          md5: md5,
            //          size: size
            //        });
            //      });
            //    });
            //  }, function (e) {
            //    console.log(JSON.stringify(e));
            //  });
            //});
          }, function(err) {
            $ionicLoading.show({template:"您已取消相机使用！",duration:2000});
          });
      },
      getPhoto:function(name){
        var options = {
          quality: 100,
          allowEdit: false,
          sourceType: PHOTOLIBRARY=0,
          targetWidth: 100,
          targetHeight: 100,
          mediaType:0,
          cameraDirection:0,
          saveToPhotoAlbum: true
        };
        $cordovaCamera.getPicture(options).then(function(imageUrl) {
          //window.resolveLocalFileSystemURL(imageUrl, function (entry) {
          //  md5chksum.file(entry, function (md5) {
          //    CordovaExif.readData(imageUrl, function (exif) {
          //      $file.getSize(imageUrl).then(function (size) {
          //        $scope.$emit('photo', {
          //          name: name,
          //          url: imageUrl,
          //          md5: md5,
          //          size: size
          //        });
          //      });
          //    });
          //  }, function (e) {
          //    console.log(JSON.stringify(e));
          //  });
          //});
        }, function(err) {
          $ionicLoading.show({template:"您已取消图片选择！",duration:2000});
        });
      }
    }
  });
