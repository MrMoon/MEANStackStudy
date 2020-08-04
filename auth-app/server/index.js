const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./models/users');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/users').then((err) => { console.log('Mongo is Up'); });

app.use(bodyParser.json());
app.use(session({
	secret: 'iubguebgr9bewuigwyb9gtuageb' ,
	saveUninitialized: false ,
	resave: false
}));

app.post('/api/login' , async (request , response) => {
	const { email , password } = request.body;

	const result = await User.findOne({ email , password });
	if(!result) {
		response.json({
			success: false ,
			message: "Incorrect Details"
		});
	} else {
		request.session.user = email;
		request.session.save();
		response.json({
			success: true ,
			message: "Welcome"
		});
	}
});

app.post('/api/register' , async (request , response) => {
	console.log(request.body);
	const { name , email , password } = request.body;
	const existingUser = await User.findOne({email});

	if(existingUser) {
		response.json({
			success: false ,
			message: "E-Mail is Already in use"
		});
		return;
	}
	const user = new User({
		name , email , password
	});
	const result = await user.save();
	console.log(result);
	response.json({
		success: true ,
		message: "Welcome!!"
	});
});

app.post('/api/isloggedin' , (request , response) => {
	response.json({
		status: request.session.user
	});
});


app.get('/api/data' , async (request , response) => {
	const user = await User.findOne({email: request.session.user});

	if(!user) {
		response.json({
			status: false ,
			message: 'User Not Found'
		});
		return;
	}

	response.json({
		message: user.name ,
		success: true
	});
});

app.get('/api/logout' , (request , response) => {
	request.session.destroy();
	response.json({
		status: true
	})
});

app.listen(8080 , () => console.log('Server listening at port 8080'));
