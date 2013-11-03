// Create a module for core services.
var appServices = angular.module('MyApp', []);

// Set up our mappings between URLs, templates, and controllers.
function appRouteConfig($routeProvider) {
	$routeProvider.
		when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		}).
		when('/riak', {
			controller: 'RiakApiController',
			templateUrl: 'views/riak-api.html'
		}).
		when('/squids', {
			controller: 'SquidsController',
			templateUrl: 'views/squids.html'
		}).
		otherwise({
			templateUrl: 'views/not-found.html'
		});
}

// Set up our route so the MyApp service can find it
appServices.config(appRouteConfig);

// Frontend <-> server functions for Riak api.
appServices.factory('Riak', ['$http', function ($http) {
  var baseUrl = '/api/buckets';
  return {
    get: function () {
      console.log('not implemented yet');
    },
    save: function (bucket) {
      return $http.post(baseUrl, bucket);
    }
  }
}]);
