App.module('AppLayout.ContactView', function(ContactView, App, Backbone, Marionette, $, _){

	var layout = Backbone.Marionette.ItemView.extend({
		id: 'contact-view',
		template: 'contact'
	});

	ContactView.display = function(region){
		region.show( new layout() );
	};
	
});