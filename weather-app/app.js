const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const getWeather = (address) => {
	geocode(address , (error , data) => {
		if(error) return console.log(error);
		forecast(data.lat , data.lon , (err , res) => {
			if(error) return console.log(err);
			const data = {
				temp: res.temp,
				feel: res.feels_like,
			};
			console.log(data);
			return data;
		});
	});
};

module.exports = getWeather
