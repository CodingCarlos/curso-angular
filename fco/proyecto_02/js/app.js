angular.module('time', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', 

		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('home', {
					url: "/",
					views: {
						menu: {
							templateUrl: "views/menu.html"
						},
						contenido: {
							templateUrl: "views/contenido.html"
						},
						footer: {
							templateUrl: "views/footer.html"
						}
					}
				})
		}
	]);