(function() {

  'use strict';

  //app constants
  angular.module('app').value('menu', [
    {
        "nav-class": "nav navbar-nav",
        "options": [
            {
                "menu-class": "",
                "menu-label": "Tables",
                "menu-href": "tables"
            }
        ]
    },
    {
        "nav-class": "nav navbar-nav navbar-right",
        "options": [
            {
                "menu-class": "dropdown-toggle",
                "menu-label": "<svg class=\"hidden-xs\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><g id=\"svgApps\" stroke-linecap=\"round\" stroke=\"#fff\" stroke-width=\"1.5\" fill=\"none\"><path d=\"M4.637 4.455h-3.455v-3.455h3.455v3.455z\"></path><path d=\"M4.637 12.227h-3.455v-3.455h3.455v3.455z\"></path><path d=\"M4.637 20h-3.455v-3.455h3.455v3.455z\"></path><path d=\"M12.409 4.455h-3.455v-3.455h3.455v3.455z\"></path><path d=\"M12.409 12.227h-3.455v-3.455h3.455v3.455z\"></path><path d=\"M12.409 20h-3.455v-3.455h3.455v3.455z\"></path><path d=\"M20.182 4.455h-3.455v-3.455h3.455v3.455z\"></path><path d=\"M20.182 12.227h-3.455v-3.455h3.455v3.455z\"></path><path d=\"M20.182 20h-3.455v-3.455h3.455v3.455z\"></path></g></svg><span class=\"visible-xs-inline\"><i class=\"nc-icon-mini ui-2_grid-48\"></i>Applications</span>",
                "menu-href": "",
                "menu-subclass": "dropdown-menu",
                "suboptions": [
                    {
                        "menu-class": "section-head",
                        "menu-label": "Your Apps",
                        "menu-href": ""
                    },
                    {
                        "menu-class": "disabled",
                        "menu-label": "Product",
                        "menu-href": ""
                    },
                    {
                        "menu-class": "",
                        "menu-label": "App 2",
                        "menu-href": ""
                    },
                    {
                        "menu-class": "",
                        "menu-label": "App 3",
                        "menu-href": ""
                    },
                    {
                        "menu-class": "",
                        "menu-label": "App 4",
                        "menu-href": ""
                    }
                ]
            }
        ]
    }
  ]);

})();
