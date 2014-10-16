(function(){
  'use strict';
  var main = angular.module('nss-ball');

  main.controller('MainCtrl', ['$scope', function($scope){
    $scope.title = 'NSS-Ball';
    /*function onSuccess(orientation){
      console.log(orientation.alpha);
      console.log(orientation.beta);
      console.log(orientation.gamma);
      $scope.orientation = orientation;
      $scope.$digest();
    }

function onError(){
  console.log(onError);
  }

var options = {frequency: 3000};// Update every 3 seconds

  $scope.start= function(){
    navigator.gyroscope.watchGyroscope(onSuccess, onError, options);
    console.log(onSuccess);
  };*/

  window.addEventListener('deviceorientation', function(data){
    $scope.data = data;
    $scope.$digest();

  });

  }]);
})();
