angular.module('app').service('paradas', paradaService);

function paradaService() {
    
    var toggleFav = function(index) {
        paradas.lista[index].isFav = !paradas.lista[index].isFav 
    }

    var paradas = {
        lista: [
            {
                parada: "123",
                buses: [
                    234,
                    12,
                    323
                ],
                isFav: true
            },
            {
                parada: "234",
                buses: [
                    1,
                    12,
                    45
                ],
                isFav: false
            },
            {
                parada: "434",
                buses: [
                    45,
                    123,
                    54
                ],
                isFav: true
            },
            {
                parada: "523",
                buses: [
                    132,
                    433,
                    123
                ],
                isFav: false
            }
        ],
        toggleFav: toggleFav
    }

    return paradas;
}
