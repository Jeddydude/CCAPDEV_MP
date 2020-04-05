const express = require('express');
const app = express();

const controller = require('../controllers/controller.js');
const facultyController = require('../controllers/facultyController.js');
const userController = require('../controllers/userController.js');
const viewController = require('../controllers/viewController.js');
const loginController = require('../controllers/loginController.js');

app.get('/', loginController.getLogin);

app.post('/', loginController.postLogin);

app.get('/login', loginController.getLogin);

app.post('/login', loginController.postLogin);

app.get('/signup', function(req, res){
	res.render('signup');
});

app.get('/logout', function(req, res){
	res.render('logout');
});

app.get('/user/:uuName', userController.getUser);

app.get('/view', viewController.getFaculties);

app.get('/faculty/:fuName', facultyController.getFaculty);

module.exports = app;
