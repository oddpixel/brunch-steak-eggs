// Put your handlebars.js helpers here.

Handlebars.registerHelper('pick', function(val, options) {
	return options.hash[val];
});
