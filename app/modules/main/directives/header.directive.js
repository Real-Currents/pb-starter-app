(function() {

  'use strict';

  angular.module('app').directive('pbdsHeader', function() {
    return {
      restrict: 'A',
      templateUrl: 'modules/main/templates/header.html',
      controller: 'HeaderController as header'
    };
  });

})();
