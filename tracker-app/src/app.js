//Modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');

//path
const publicDirPath = path.join(__dirname , '../public');
const templatesDirPath = path.join(__dirname , '../templates/views');
const partialsDirPath = path.join(__dirname , '../templates/partials');

//Express Configuration
const app = express();
app.use(express.static(publicDirPath));

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
app.listen(3000 , () => {
	console.log('Server is up in port 3000');
});
