(function() {

  'use strict';

  angular.module('app').service('sessionData', function(userInfoService, $cookies, $rootScope, $window) {
    var session = {
      get: function() {
        var userInfo = $cookies.get('userInfo');


        var returnResult = function(data) {
          return data;
        }

        //if user is alreaady stored, return
        if (userInfo) {
          console.log('get userInfo', userInfo);
          var user = JSON.parse(userInfo);

          return user;
        }
        //if user is not stored, go look up via token
        else {
          var oktaIdToken = $cookies.get('token');

          if (oktaIdToken) {
            userInfoService.get({oktaIdToken: oktaIdToken}).$promise.then(function(resp) {
              session.set(resp);
              //tell header controller that data is now available
              $rootScope.$emit('gotUserInfo', resp);
              return;
            });
          }
        }
      },
      set: function(data) {
        console.log('set userInfo', userInfo);
        $cookies.put('userInfo', JSON.stringify(data));
      }
    }

    return session;

  });


})();
