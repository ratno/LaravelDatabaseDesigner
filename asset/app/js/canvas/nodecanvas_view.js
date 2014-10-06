DesignerApp.module("NodeCanvas.Views", function(Views, DesignerApp, Backbone, Marionette, $, _) {

    Views.NodeCanvas = Backbone.Marionette.CompositeView.extend({
        id: "container",
        template: "#nodecanvas-template",
        childView: DesignerApp.NodeModule.Views.NodeContainer,
        triggers: {
            "dblclick": "canvas:createcontainer"
        },
    });

    Views.MenuView = Marionette.ItemView.extend({
    template: "#menu-template",
            triggers: {
            "click .addcontainer": "canvas:createcontainer",
            "click .open": "canvas:open",
            "click .save": "canvas:save",
            "click .saveas": "canvas:saveas",
            "click .generate": "canvas:generate",
            "click .clearcanvas": "canvas:clearcanvas",
            "click .loadexample": "canvas:loadexample",
            "click .opengist": "canvas:opengist",
            "click .opengistid": "canvas:opengistid",
            "click .savecurrentgis": "canvas:savecurrentgis",
            "click .saveasgist": "canvas:saveasgist",
            "dblclick": "canvas:createcontainer"
        },
        events: {
            "loaded" : "loaded"
        },initialize: function()
        {
                        this.$(".savecurrentgis").hide();

        },
        loaded: function(){
            this.$(".savecurrentgis").show();
        }

    });


});