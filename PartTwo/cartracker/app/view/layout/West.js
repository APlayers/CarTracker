Ext.define('CarTracker.view.layout.West', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.west',
    region: 'west',
    title: 'Menu',
    split: true,
    width: 200,
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{
            
        });
        me.callParent( arguments );
    } 
});
