var app = require('application');

module.exports = Backbone.Marionette.Layout.extend({
	template: 'views/templates/appLayout',

	el: 'body',

	regions: {
		content: '#content' 
	}
});
