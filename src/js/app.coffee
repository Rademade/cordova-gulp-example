window.app = angular.module('app', [
  'ui.router'
  'multiGallery'
]).run([
  '$templateFactory', '$templateCache','$rootScope',
  ($templateFactory, $templateCache, $rootScope)->

    $templateFactory.fromString = (name)-> Templates[name]

    for own templateName, templateSource of Templates
      $templateCache.put templateName, templateSource

    FastClick.attach(document.body)
])