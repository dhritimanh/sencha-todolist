Ext.define('myapp.store.Tasks', {
    extend: 'Ext.data.Store',

    config: {
        model: 'myapp.model.Task',
        proxy: {
            type: 'localstorage',
            id: 'my-tasks',
            uniqueId: 'my-tasks'
        },
        autoLoad: true
    }
});