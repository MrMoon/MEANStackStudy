const request = require('request');
const key = 'pk.eyJ1IjoibXJtb29uMTYiLCJhIjoiY2tibWdhcm83MG1pZTJ1cXR6M3hsZWloYyJ9.IW0bX0rmhG6AgFelj_yaPA';

const geocode = (city , callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ city + '.json?access_token=' + key + '&limit=1';
	request({ url , json: true} , (error , { body }) => {
		if(error) calback('Unable to connect');
		else if(body.features.length === 0) callback('Unable to find ' + city); 
		else {
			const data = body.features[0];
			callback(undefined , {
				lat: data.center[0],
				lon: data.center[1],
				loc: data.place_name
			});
		}
	});
};

module.exports = geocode;
