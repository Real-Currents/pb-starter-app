(function() {

  'use strict';

  angular.module('pb.ds.tables').config(function($stateProvider) {
    $stateProvider.state('tables', {
      url: '/tables',
      templateUrl: 'modules/tables/tables.html',
      controller: 'TablesController as tables',
      data: {
        pageTitle: 'Tables',
        access: 'private',
        bodyClass: 'tables'
      }
    });
  });

})();
