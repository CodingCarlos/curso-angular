angular.module('time').service('listaTiempos', listadoTiempos);

	function listadoTiempos() {
		console.log('Serviciooooooo!!!');

		var tiempos = [
			{
				numParada: 789,
				nombre: "Paseo de Extremadura, 54",
				tiempo: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 365,
				nombre: "Av. de la Aviación, 3",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 164,
				nombre: "Calle Illescas, 76",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 359,
				nombre: "Calle Villacarriedo, 1",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 996,
				nombre: "Gran Vía, 32",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 461,
				nombre: "Calle Fuencarral, 4",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 123,
				nombre: "Gran Avenida, 65",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 593,
				nombre: "Plaza de Colón",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 476,
				nombre: "Plaza Mayor, s/n",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
			{
				numParada: 249,
				nombre: "Calle Carretas, 4",
				lineas: [
					{
						linea: 65,
						mins: 8
					},
					{
						linea: 39,
						mins: 6
					},
					{
						linea: 31,
						mins: 5
					}
				]
			},
		];

		return tiempos;
	}