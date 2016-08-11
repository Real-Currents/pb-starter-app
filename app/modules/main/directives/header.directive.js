(function() {

  'use strict';

  angular.module('app').directive('pbDsHeader', function() {
    return {
      restrict: 'A',
      templateUrl: 'modules/main/templates/header.html',
      controller: 'HeaderController as header'
    };
  });

})();
