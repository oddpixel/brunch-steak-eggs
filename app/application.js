require('lib/view_helper');

var App = Backbone.Marionette.Application.extend({
	initialize: function() {
		var _this = this;
		
		this.on('initialize:after', function(options) {
			Backbone.history.start();
			return typeof Object.freeze === "function" ? Object.freeze(_this) : void 0;
		});
		
		this.addInitializer(function(options){
			var AppLayout = require('views/AppLayout');
			_this.layout = new AppLayout();
			_this.layout.render();
		});
		
		this.addInitializer(function(options){
			var Router = require('lib/router');
			_this.router = new Router();
		});
		
		this.start();
	}
});

module.exports = new App();
