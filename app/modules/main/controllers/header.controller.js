(function () {

  'use strict';

  angular.module('app').controller('HeaderController', function($log, $scope, $window) {
    var menu = this;

    this.isNavCollapsed = true;
    this.isCollapsed = false;
    this.isCollapsedHorizontal = false;
    this.apply = function (event) { $scope.$apply(); };
    this.close = function (event) { menu.isNavCollapsed = true; };
    $window.addEventListener('resize', function (event) {
        menu.close(event);
        menu.apply(event);
    });
    return this;
  });

})();
