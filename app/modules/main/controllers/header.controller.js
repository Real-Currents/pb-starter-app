(function () {

  'use strict';

  angular.module('app').controller('HeaderController', function($log, $rootScope, $scope, $window, sessionData) {
    var _this = this;

    _this.user = sessionData.get();

    $rootScope.$on('gotUserInfo', function(event, data) {
      _this.user = data;
    });

    this.isNavCollapsed = true;
    this.isCollapsed = false;
    this.isCollapsedHorizontal = false;
    this.apply = function (event) { $scope.$apply(); };
    this.close = function (event) { _this.isNavCollapsed = true; };
    $window.addEventListener('resize', function (event) {
        _this.close(event);
        _this.apply(event);
    });
    return this;
  });

})();
