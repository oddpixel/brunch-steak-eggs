App.module('AppLayout.HeaderView', function(HeaderView, App, Backbone, Marionette, $, _){

	var layout = Backbone.Marionette.ItemView.extend({
		id: 'header-view',
		template: 'header'
	});

	HeaderView.display = function(region){
		region.show( new layout() );
	};
	
});