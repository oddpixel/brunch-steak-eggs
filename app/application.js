// Create new app
var App = new Backbone.Marionette.Application();

// Add Regions
App.addRegions({
	mainRegion: '#app'
});

// Init Layout
App.addInitializer(function(options){
	App.AppLayout.display(App.mainRegion);
});


App.navigate = function(route,  options){
	options || (options = {});
	Backbone.history.navigate(route, options);
};

App.getCurrentRoute = function(){
	return Backbone.history.fragment
};

App.on('start', function() {
	if(Backbone.history){
		Backbone.history.start();

		if(this.getCurrentRoute() === ""){
			App.trigger("home");
		}
	}
});