const https = require('https');

const url = 'https://samples.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=0&appid=439';

const request = https.request(url , (res) => {
	let data = '';

	res.on('data' , ( chunk ) => {
		data += data + chunk.toString();
	});

	res.on('end' , () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on('error' , (err) => {
	console.log(err);
});

request.end();

