const request = require('request');

const key = '76bb4f85a8a16691dd9cd391e9114e68';
const city = 'Amman';
const url = 'https://api.openweathermap.org/data/2.5/find?q='+ city +'&units=metric&appid=' + key;

request({ url: url , json: true } , (err , res) => {
	if(err) {
		console.log('Unable to connect to the service');
	} else if(res.body.error) {
		console.log('Something went wrong');
	} else {
		const data = res.body.list[0].main;
		console.log('It is currently ' + data.temp + 'C and feels like ' + data.feels_like + 'C in ' + city);	
	}
});
