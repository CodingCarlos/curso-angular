angular.module('app').filter('minutes', [minutesFilter]);

function minutesFilter() {
	return function(input) {
        input = Number(input) || 0;

		if (input == 999999) {

            output = '+ 20 min';

        } else if (input < 60) {

            output = input + ' seg';

        } else {

            output = (input/60).toFixed() + ' min';

        }

		return output;
	};
}