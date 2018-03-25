angular.module('time').controller('tiempoController', timeCtrl);

function timeCtrl(listaTiempos) {
	console.log('controlador tiempo');

	var self = this;

	self.tiempos = listaTiempos;
}