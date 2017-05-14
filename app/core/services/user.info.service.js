(function() {

  'use strict';

  angular.module('app').factory('userInfoService', function($log, $resource) {

    return $resource('core/data/user.json', {});

  });

})();
