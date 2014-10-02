var app = require('application');
var HomeView = require('views/HomeView');

module.exports = Backbone.Marionette.LayoutView.extend({
	template: 'views/templates/appLayout',

	el: 'body',

	regions: {
		contentRegion: '#content'
	},

	onShow: function(){
		var homeView = new HomeView();
		this.contentRegion.show(homeView);
	},

	initialize: function(options){
		_this = this;
	}
});
