Ext.application({
    name: 'myapp',

    controllers: ['Tasks'],
    views: ['Main'],


    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('myapp.view.Main'));
    },

});
