var goloc = angular.module('goloc', []);

//BUSCADOR
goloc.controller('BuscadorController', function() {

        var self = this;

        //metodos
        self.terminobuscado = "";
        self.buscar = buscar;


        //propiedades


        //servicios


        //funciones
        function buscar() {
                alert(self.terminobuscado);
        }

});


//FAVORITOS
goloc.controller('FavoritosController', function() {

    var self = this;

    //metodos



    //propiedades


    //servicios


    //funciones


});


//MOSTRAR LINEA
goloc.controller('LineaController', function() {

    var self = this;

    //metodos
    self.numerolinea = "?";
    self.tiempo = "?";



    //propiedades


    //servicios


    //funciones


});