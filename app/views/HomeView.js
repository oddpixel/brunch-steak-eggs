App.module('AppLayout.HomeView', function(HomeView, App, Backbone, Marionette, $, _){

	var layout = Backbone.Marionette.ItemView.extend({
		id: 'home-view',
		template: 'home'
	});

	HomeView.display = function(region){
		region.show( new layout() );
	};
	
});
