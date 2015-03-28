module.exports = (->

  file_manager      = require './file_manager.coffee'

  manifests = {}

  manifests.vendor = ->
    file_manager.rootify [
      'angular/angular'
      'angular-ui-router/release/angular-ui-router'
      'angular-cycle-gallery/build/angular-cycle-gallery.min'
      'gsap/src/uncompressed/TweenMax'
      'fastclick/lib/fastclick'
    ], "bower_components", 'js'

  manifests.application = ->
    file_manager.rootify [
      "app"
      "router"
      "**/*"
    ], "#{file_manager.source}/js", 'coffee'

  manifests

)()