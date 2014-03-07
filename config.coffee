exports.config =
  
  framework: 'backbone'
  
  paths:
    public: 'public'
  
  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^(vendor|bower_components)/
        'test/js/test.js': /^test[\\/](?!vendor)/
        'test/js/test-vendor.js': /^test[\\/](?=vendor)/
      order:
        after: [
          # popover requires tooltip
          'vendor/js/bootstrap/tooltip.js'
          'vendor/js/bootstrap/popover.js'
          
          # collapse requires transitions
          'vendor/js/bootstrap/collapse.js'
          'vendor/js/bootstrap/transition.js'
          
          'test/vendor/js/test-helper.js'
        ]
         
    stylesheets:
      defaultExtension: 'less'
      joinTo: 
        'css/app.css': /^(app|vendor)/
        'test/css/test.css': /^test/
      
    templates:
      defaultExtension: 'hbs'
      joinTo: 'js/app.js'
