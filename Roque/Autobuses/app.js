angular.module('app', [
    'ui.router',
    'ngAnimate'
])

.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: "views/buscador.html"
            })
            .state('parada', {
                url: "/parada/:id",
                templateUrl: "views/parada.html"
            })
            .state('favoritos', {
                url: "/favoritos",
                templateUrl: "views/favoritos.html"
            })
    }
]);