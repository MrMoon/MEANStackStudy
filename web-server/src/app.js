//Modules
const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Paths
const assetsPath = path.join(__dirname , '../assets/public/');
const templatePath = path.join(__dirname , '../templates/');
const viewsPath = path.join(templatePath , '/views/');
const paritalPath = path.join(templatePath , '/partials/');

const app = express();

//Handle bar views
app.set('view engine' , 'hbs');
app.set('views' , viewsPath);
hbs.registerPartials(paritalPath);

//Rounting
app.get('' , (req , res) => {
	res.render('index' , {
		title: 'Testing Expree.js',
		name: 'Mohammad'
	});
});

app.get('/about' , (req , res) => {
	res.render('about' , {
		title: 'About Page',
		name: 'Test'
	});
});

app.get('/help' , (req , res) => {
	res.render('help' , {
		title: 'Help Page'
	});
});

app.get('/help/*' , (req , res) => {
	res.render('notfound' , {
		title: '404 Not found',
		error: 'Help not found'
	});
});

//404
app.get('*' , (req , res) => {
	res.render('notfound' , {
		title: '404 Not found Error',
		error: 'Page Not found'
	});
});

app.listen(3000 , () => {
	console.log('Server is up on port 3000');
});
