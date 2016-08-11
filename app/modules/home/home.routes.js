(function() {

  'use strict';

  angular.module('pb.ds.home').config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'modules/home/templates/home.html',
      controller: 'HomeController as home',
      resolve: {
        MockData: function(MockDataFactory) {
          return MockDataFactory.query({filename:'data'});
        }
      },
      data: {
        pageTitle: 'Home',
        access: 'private',
        bodyClass: 'home'
      }
    });
  });

})();
