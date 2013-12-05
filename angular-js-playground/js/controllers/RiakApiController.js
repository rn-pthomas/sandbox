function RiakApiController($scope, $http, Riak) {
  $scope.createNewBucket = function () {
    Riak.save({bucketName: $scope.newBucketName});
  }
}
