var App = angular.module("App", []);

App.IndexCtrl = function ($scope) {
	
};

App.AboutCtrl = function ($scope) {
	
};

App.FavoritesCtrl = function ($scope) {
	
};

// configure the app, injecting the Route Provider
App.config(function ($routeProvider) {
	$routeProvider
	.when("/about", {
		templateUrl: "about.html",
		controller:  "App.aboutctrl"
	})
	.when("/favorites", {
		templateurl: "favorites.html",
		controller:  "app.favoritesctrl"
	})
});
