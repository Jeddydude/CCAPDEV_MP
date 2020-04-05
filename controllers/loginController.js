const express = require('express');
const app = express();

const userController = require('./userController.js');

const db = require('../models/db2.js');

const User = require('../models/userModel.js');

const loginController = {

    getLogin: function (req, res) {
        res.render('login');
    },

    postLogin: function (req, res) {
		
        var u = req.body.uuName;
        var p = req.body.password;

        var query1 = {uuName: u, password: p};
		db.findOne(User, query1, null, function(x) {
            console.log(query1);
            if(x != null){
                console.log("success");
                res.redirect('/user/' + x.uuName);
            }
            else{
                res.render('login');
            }
			
        });
    }
}

module.exports = loginController;