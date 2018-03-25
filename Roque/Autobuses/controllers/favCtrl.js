angular.module('app').controller('favCtrl', favCtrl)

function favCtrl (paradas) {

    var self = this;
    self.paradas = paradas;

}