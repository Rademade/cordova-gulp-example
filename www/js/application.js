(function() {
  var hasProp = {}.hasOwnProperty;

  window.app = angular.module('app', ['ui.router', 'multiGallery']).run([
    '$templateFactory', '$templateCache', '$rootScope', function($templateFactory, $templateCache, $rootScope) {
      var templateName, templateSource;
      $templateFactory.fromString = function(name) {
        return Templates[name];
      };
      for (templateName in Templates) {
        if (!hasProp.call(Templates, templateName)) continue;
        templateSource = Templates[templateName];
        $templateCache.put(templateName, templateSource);
      }
      return FastClick.attach(document.body);
    }
  ]);

}).call(this);

(function() {
  app.config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider.state('public', {
        abstract: true,
        url: '/',
        templateUrl: 'layout',
        controller: 'LayoutController'
      }).state('public.index', {
        url: '',
        templateUrl: 'views/index',
        controller: 'IndexController'
      }).state('public.gallery', {
        url: 'gallery',
        templateUrl: 'views/gallery',
        controller: 'GalleryController'
      });
      return $urlRouterProvider.otherwise('/');
    }
  ]);

}).call(this);

(function() {
  app.controller('GalleryController', [
    '$scope', function($scope) {
      return $scope.gallery = [
        {
          text: 'Item 1'
        }, {
          text: 'Item 2'
        }, {
          text: 'Item 3'
        }, {
          text: 'Item 4'
        }, {
          text: 'Item 5'
        }
      ];
    }
  ]);

}).call(this);

(function() {
  app.controller('IndexController', [
    '$scope', function($scope) {
      var i;
      $scope.list = [];
      i = 0;
      return $scope.add = function() {
        $scope.list.push($scope.new_item);
        return $scope.new_item = "";
      };
    }
  ]);

}).call(this);

(function() {
  app.controller('LayoutController', ['$scope', '$rootScope', function($scope, $rootScope) {}]);

}).call(this);
