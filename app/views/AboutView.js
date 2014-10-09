App.module('AppLayout.AboutView', function(AboutView, App, Backbone, Marionette, $, _){

	var layout = Backbone.Marionette.ItemView.extend({
		id: 'about-view',
		template: 'about'
	});

	AboutView.display = function(region){
		region.show( new layout() );
	};
	
});