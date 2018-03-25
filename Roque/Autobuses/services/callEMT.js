angular.module('app').service('callEMT', EMTService);

function EMTService($http) {

    apiResponse = {
        data: [],
        getStops: apiCall
    }

    function apiCall(paradaID){
        return $http.get('http://192.168.1.20:3000/stop/' + paradaID)
        .then(function(data, status, headers, config) {
            apiResponse.data  = data.data.arrives;
        }, function(data, status, headers, config) {
            console.log("ERROR");
        });
    }

    return apiResponse;
}