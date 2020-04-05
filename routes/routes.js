const express = require('express');
const app = express();

const controller = require('../controllers/controller.js');
const facultyController = require('../controllers/facultyController.js');
const userController = require('../controllers/userController.js');
const viewController = require('../controllers/viewController.js');
const loginController = require('../controllers/loginController.js');
const homeController = require('../controllers/homeController.js');
const signupController = require('../controllers/signupController.js')

app.get('/', loginController.getLogin);

app.post('/', loginController.postLogin);

app.get('/login', loginController.getLogin);

app.post('/login', loginController.postLogin);


app.get('/signup', signupController.getSignUp);

app.post('/signup', signupController.postSignUp);


app.get('/logout', function(req, res){
	res.render('logout');
});

app.get('/home', homeController.getHome);

app.get('/user/:uuName', userController.getUser);

app.get('/user/', userController.getLoggedUser);

app.get('/view', viewController.getFaculties);

app.get('/faculty/:fuName', facultyController.getFaculty);

module.exports = app;
