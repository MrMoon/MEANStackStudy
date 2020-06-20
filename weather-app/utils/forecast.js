const request = require('request');
const key = '76bb4f85a8a16691dd9cd391e9114e68';

const forecast = (lat , lon , callback) => {
	const url = 'https://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon  + '&units=metric&cnt=1&appid=' + key;
	request({ url , json: true } , (err , { body }) => {
		if(err) callback('Unable to connect to the service');
		else if(body.error) callback('Something went wrong');
		else callback(undefined , body.list[0].main);
	});
};

module.exports = forecast
