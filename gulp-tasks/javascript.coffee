file_manager      = require './file_manager.coffee'
gulp              = require 'gulp'
concat            = require 'gulp-concat'
manifests         = require './javascript-manifests.coffee'
coffee            = require 'gulp-coffee'
plumber           = require 'gulp-plumber'
Q                 = require 'q'

###
  JavaScript tasks
###

gulp.task 'javascript:application', ->
  collectJavaScript manifests.application(), 'application.js', file_manager.build_js, coffee: yes

gulp.task 'javascript:vendor', ->
  collectJavaScript manifests.vendor(), 'vendor.js', file_manager.build_js, coffee: no

gulp.task 'javascript', [
  'javascript:vendor'
  'javascript:application'
  'templates'
]


###
  JavaScript private methods
###

collectJavaScript = (source, name, destination, opts = {}) ->
  stream = gulp.src source
  stream = stream.pipe plumber()

  stream = stream.pipe coffee(bare: no) if opts.coffee
  stream = stream.pipe uglify() if opts.compress

  stream = stream.pipe(concat(name))
  stream = stream.pipe(gulp.dest(destination))