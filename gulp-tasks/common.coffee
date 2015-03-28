file_manager      = require './file_manager.coffee'
gulp              = require 'gulp'
concat            = require 'gulp-concat'
nodemon           = require 'gulp-nodemon'

gulp.task 'default', ->
  gulp.start ['build', 'watch'], ->
    console.log('Run')

gulp.task 'watch', ->
  gulp.watch "#{file_manager.source}/sass/**/*",            ['stylesheets']
  gulp.watch "#{file_manager.source}/js/**/*",              ['javascript:application']
  gulp.watch "#{file_manager.source}/templates/**/*",       ['templates']
  gulp.watch "#{file_manager.source}/views/**/*",           ['layout']