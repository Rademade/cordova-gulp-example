(function() {
  var hasProp = {}.hasOwnProperty;

  window.app = angular.module('app', ['ui.router']).run([
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
      });
      $urlRouterProvider.otherwise('/');
      return $locationProvider.html5Mode({
        enabled: false,
        requireBase: false,
        html5Mode: false
      });
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
