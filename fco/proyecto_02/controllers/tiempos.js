angular.module('time').controller('tiempoController', ['listaTiempos', timeCtrl]);

function timeCtrl(listaTiempos) {
	console.log('controlador tiempo');

	var self = this;

	self.tiempos = listaTiempos;

	self.tiempos.get('2645');
}