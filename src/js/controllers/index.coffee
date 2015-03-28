app.controller 'IndexController', ['$scope', ($scope) ->

  $scope.list = []

  i = 0

  $scope.add = ->
    $scope.list.push $scope.new_item
    $scope.new_item = ""

]