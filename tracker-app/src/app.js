//Modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/track.js');

//path
const publicDirPath = path.join(__dirname , '../public');
const templatesDirPath = path.join(__dirname , '../templates/views');
const partialsDirPath = path.join(__dirname , '../templates/partials');

//Express Configuration
const app = express();
app.use(express.static(publicDirPath));
const port = process.env.PORT || 3000;

//Handlebars
app.set('view engine' , 'hbs');
app.set('views' , templatesDirPath);
hbs.registerPartials(partialsDirPath);

//Routes
app.get('' , (req , res) => {
	res.render('index' , {
		name: 'Home',
		version: '0.0'
	});
});

app.get('/test' , (req , res) => {
	const query = req.query.country;
	if(!query) return res.send('Error');
	forecast((err , data) => {
		if(err) return res.send(err);
		res.send(data);
	} , req.query.country);
});

app.get('/help' , (req , res) => {
	res.render('help' , {
		name: 'Help',
		version: '0.0'
	});
});

app.get('/about' , (req , res) => {
	res.render('about' , {
		name: 'About',
		version: '0.0'
	});
});

app.get('/help/*' , (req , res) => {
	res.render('error' , {
		name: '404 Page',
		version: '0.0',
		err: 'No help page exists :('
	});
});

app.get('*' , (req , res) => {
	res.render('error' , {
		name: '404 Page',
		version: '0.0',
		err: 'No such page exists :D'
	});
});

//Port listen
app.listen(port , () => {
	console.log('Server is up in port 3000');
});
