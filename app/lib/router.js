var app = require('application');
var HomeView = require('views/HomeView');

module.exports = Backbone.Router.extend({
	routes: {
		'': 'home'
	},
		
	home: function() {
		homeView = new HomeView();
		app.layout.content.show(homeView);
	}
});
