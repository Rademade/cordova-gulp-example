file_manager      = require './file_manager.coffee'
gulp              = require 'gulp'
rename            = require 'gulp-rename'
preprocess        = require 'gulp-preprocess'
inject            = require 'gulp-inject'
jade              = require 'gulp-jade'
series            = require 'stream-series'

gulp.task 'layout', ->
  vendor_js = gulp.src ["#{file_manager.build}/js/vendor.js"], read: false
  templates_js = gulp.src ["#{file_manager.build}/js/templates.js"], read: false
  application_js = gulp.src ["#{file_manager.build}/js/application.js"], read: false
  styles = gulp.src ["#{file_manager.build}/**/*.css"], read: false
  build(series(styles, vendor_js, templates_js, application_js), file_manager.build)


build = (sources, dir_path)->
  gulp
    .src "#{file_manager.source}/views/index.jade"
    .pipe(jade())
    .pipe preprocess()
    # TODO prettify
    .pipe inject(sources,
      addRootSlash: no # TODO depends on platform (Cordova or WEB)
      ignorePath: dir_path
    )
    .pipe rename('index.html')
    .pipe gulp.dest(dir_path)