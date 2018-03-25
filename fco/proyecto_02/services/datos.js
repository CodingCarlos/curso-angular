angular.module('time').service('listaTiempos', ['$http', listadoTiempos]);

	function listadoTiempos($http) {
		console.log('Serviciooooooo!!!');

		var tiempos = {
			list : [],
			get : get
		}


		//var tiempos = {"arrives":[{"stopId":2645,"lineId":"65","isHead":"False","destination":"BENAVENTE","busId":"4174","busTimeLeft":796,"busDistance":1624,"longitude":-3.7766621418659,"latitude":40.394612372636,"busPositionType":1},{"stopId":2645,"lineId":"65","isHead":"False","destination":"BENAVENTE","busId":"4175","busTimeLeft":999999,"busDistance":6194,"longitude":-3.7539975651861,"latitude":40.404268047256,"busPositionType":1}]}






		return tiempos;

		function get(parada) {
			$http.get('http://192.168.1.20:3000/stop/'+parada)
				.then(function(response) {
					console.log(response);
					tiempos.list = response.data.arrives;
				});
		}
	}