angular.module('time', ['ngRoute']).config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "index.html"
			})
			.when("/favoritos", {
				templateUrl : "views/favoritos.html"
			})
			.when("/contacto", {
				templateUrl : "views/contacto.htm"
			});
});