exports.config = {

	paths: {
		public: 'public',
		watched: ['app', 'test', 'vendor']
	},
	conventions: {
		assets: /(assets|test(\/|\\)assets)/
	},
	modules: {
		wrapper: 'commonjs',
		definition: 'commonjs'
	},
	files: {
		javascripts: {
			joinTo: {
				'js/app.js': /^app/,
				'js/vendor.js': /^(vendor|bower_components)/,
        'test/js/test.js': /^test[\\/](?!vendor)/,
        'test/js/test-vendor.js': /^test[\\/](?=vendor)/
			},
			order: {
				before: [
					'bower_components/console-polyfill/index.js',
					'bower_components/jquery/dist/jquery.js',
				],
				after: [
          'vendor/js/bootstrap/tooltip.js',
          'vendor/js/bootstrap/popover.js',
          'vendor/js/bootstrap/collapse.js',
          'vendor/js/bootstrap/transition.js',          
          'test/vendor/js/test-helper.js'
				]
			}
		},
		stylesheets: {
			defaultExtension: 'less',
			joinTo: {
				'css/app.css': /^(app|vendor|bower_components)/,
				'test/css/test.css': /^test/
			},
			order: {
				before: ['vendor/css/bootstrap']
			}
		},
		templates: {
			defaultExtension: 'hbs',
			joinTo: 'js/app.js'
		}
	},
  sourceMaps: true
};