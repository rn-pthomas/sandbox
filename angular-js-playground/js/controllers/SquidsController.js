function SquidsController($scope) {
  $scope.squidCount = 0;

  $scope.incrementSquidCount = function () {
    $scope.squidCount = $scope.squidCount + 1;
  }
}
