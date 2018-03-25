angular.module('app').controller('buscadorCtrl', buscadorCtrl)

function buscadorCtrl (paradas) {

    var self = this;
    self.paradas = paradas;
    self.busqueda = {parada:""};

    self.buscar = function() {
        console.log(self.busqueda);
    }

}