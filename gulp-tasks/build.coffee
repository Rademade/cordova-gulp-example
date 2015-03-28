gulp              = require 'gulp'

gulp.task 'build', ['clean'], ->
  gulp.start ['javascript'], ->
    gulp.start ['stylesheets'], ->
      gulp.start ['layout'], ->
        console.log('Build finished')
