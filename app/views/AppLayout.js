App.module('AppLayout', function(AppLayout, App, Backbone, Marionette, $, _){

	AppLayout.Router = Marionette.AppRouter.extend({
		appRoutes: {
			'home': 'showHome',
			'about': 'showAbout',
			'contact': 'showContact'
		}
	});

	var API = {
		showHome: function(){
			console.log('Home shown');
			App.AppLayout.HomeView.display(App.mainRegion.currentView.contentRegion);
			// AppLayout.execute('set:active:header', 'about');
		},
		showAbout: function(){
			console.log('About shown');
			App.AppLayout.AboutView.display(App.mainRegion.currentView.contentRegion);
		},
		showContact: function(){
			console.log('Contact shown');
			App.AppLayout.ContactView.display(App.mainRegion.currentView.contentRegion);
		}
	};

	App.on('home:show', function(){
		AppLayout.navigate('home');
		API.showHome();
	});
	App.on('about:show', function(){
		AppLayout.navigate('about');
		API.showAbout();
	});
	App.on('contact:show', function(){
		AppLayout.navigate('contact');
		API.showContact();
	});

	App.addInitializer(function(){
		new AppLayout.Router({
			controller: API
		});
	});


	// View
	var layout = Backbone.Marionette.LayoutView.extend({
		template: 'appLayout',

		regions: {
			headerRegion: '#header',
			contentRegion: '#content'
		},

		onShow: function(){
			App.AppLayout.HeaderView.display(App.mainRegion.currentView.headerRegion);
			App.AppLayout.HomeView.display(App.mainRegion.currentView.contentRegion);
		}
	});

	AppLayout.display = function(region){
		region.show( new layout() );
	};
  
});