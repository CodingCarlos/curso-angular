angular.module('app').controller('paradaCtrl', paradaCtrl);

function paradaCtrl(paradas, callEMT, $http, $stateParams) {
    var self = this;
    self.loading = true;
    self.stops = [];

    self.paradas = paradas;
    self.paradaNumber = $stateParams.id;   

    callEMT.getStops(self.paradaNumber).then(function(){
        self.loading = false;
        self.stops = apiResponse.data
    });    
    
}