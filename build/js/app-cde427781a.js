!function(){"use strict";angular.module("app",["pb.core","pb.ds.home","pb.ds.tables"]);angular.module("app").config(["$logProvider","config",function(e,t){e.debugEnabled(t.debug)}]),angular.module("app").config(["$compileProvider","config",function(e,t){e.debugInfoEnabled(t.debug)}]),angular.module("app").config(["$uibTooltipProvider",function(e){e.options({appendToBody:!0})}]),angular.module("app").config(["$stateProvider",function(e){e.state("otherwise",{url:"*path",template:"",controller:["$state",function(e){e.go("home")}]})}]),angular.module("app").run(["$log","$rootScope","$document","$timeout","$location","$state",function(e,t,o,n,a,r){t.$on("$stateChangeStart",function(t,o,n,a,r){e.debug("To State:",o,"From state:",a),!o||!o.data}),t.$on("$stateChangeError",function(t,o,n,a,r,l){e.debug("$stateChangeError: ",l)}),t.$on("$stateNotFound",function(t){e.debug("$stateNotFound: ",t)}),t.$on("$routeChangeSuccess",function(e,t){}),t.$on("$routeChangeStart",function(e,t){}),t.$on("$stateChangeSuccess",function(e,t,o,n,a){}),t.$on("$viewContentLoading",function(e){}),t.$on("$viewContentLoaded",function(e){})}])}(),function(){"use strict";angular.module("app").constant("config",{debug:!1})}(),function(){"use strict";angular.module("app").controller("AppController",["$rootScope","$state",function(e,t){e.$state=t,e.sessionData={},e.sessionData.tokenInvalid=!1}])}(),function(){"use strict";angular.module("app").controller("HeaderController",["$log",function(e){}])}(),function(){"use strict";angular.module("app").directive("pbdsHeader",function(){return{restrict:"A",templateUrl:"modules/main/templates/header.html",controller:"HeaderController as header"}})}(),function(){"use strict";angular.module("app").directive("pbdsFooter",function(){return{restrict:"A",templateUrl:"modules/main/templates/footer.html"}})}(),function(){"use strict";angular.module("pb.core",["ngCookies","ngAnimate","ngResource","ngSanitize","ui.router","angular-loading-bar","toastr","ui.bootstrap","pb.ds.components"])}(),function(){"use strict";angular.module("app").factory("MockDataFactory",["$resource",function(e){return e("core/data/:filename.json",{filename:"@filename"})}])}(),function(){"use strict";angular.module("pb.ds.home",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.home").config(["$stateProvider",function(e){e.state("home",{url:"/home",templateUrl:"modules/home/templates/home.html",controller:"HomeController as home",resolve:{MockData:["MockDataFactory",function(e){return e.query({filename:"data"})}]},data:{pageTitle:"Home",access:"private",bodyClass:"home"}})}])}(),function(){"use strict";angular.module("pb.ds.home").controller("HomeController",["$log","MockData","$uibModal",function(e,t,o){var n=this;n.data=t,n.open=function(e){o.open({templateUrl:"modules/home/templates/modal.html",controller:"ModalController as modal",size:"md",resolve:{itemResolve:function(){return e}}})}}])}(),function(){"use strict";angular.module("pb.ds.home").controller("ModalController",["$log","$uibModalInstance","itemResolve",function(e,t,o){var n=this;n.item=o,n.close=function(){t.close()},e.debug(n.item)}])}(),function(){"use strict";angular.module("pb.ds.tables",["ui.router"])}(),function(){"use strict";angular.module("pb.ds.tables").config(["$stateProvider",function(e){e.state("tables",{url:"/tables",templateUrl:"modules/tables/tables.html",controller:"TablesController as tables",data:{pageTitle:"Tables",access:"private",bodyClass:"tables"}})}])}(),function(){"use strict";angular.module("pb.ds.tables").controller("TablesController",["$log",function(e){var t=this;t.rowdata=[{date:"04/15/2016",recipient:"Sara Shiner",carrier:"USPS",shipping:"Priority Mail",tracking:"1890K81923J",status:"Shipped",amount:"$10.45"},{date:"04/15/2016",recipient:"Andrew Backmand",carrier:"FedEx",shipping:"Priority Ground",tracking:"JJHSK980802K",status:"In transit",amount:"$18.90"},{date:"04/15/2016",recipient:"Rich Drew",carrier:"UPS",shipping:"Overnight",tracking:"JJHSK980802K",status:"Delivered",amount:"$38.90"}]}])}();