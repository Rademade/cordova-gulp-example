app.config [
  '$stateProvider', '$urlRouterProvider', '$locationProvider'
  ($stateProvider, $urlRouterProvider, $locationProvider) ->

    $stateProvider
      .state 'public',
        abstract : true
        url : '/'
        templateUrl : 'layout'
        controller : 'LayoutController'

      .state 'public.index',
        url : ''
        templateUrl : 'views/index'
        controller : 'IndexController'

      .state 'public.gallery',
        url : 'gallery'
        templateUrl : 'views/gallery'
        controller : 'GalleryController'

    $urlRouterProvider.otherwise '/'

#    $locationProvider.html5Mode #TODO need params in web version
#      enabled : false
#      requireBase : false
#      html5Mode : false

]