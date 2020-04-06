const db = require('../models/db2.js');

const User = require('../models/userModel.js');
const Instance = require('../models/instanceModel.js');

const loginController = {

    getLogin: function (req, res) {
        res.render('login',{error:"hidden"});
    },

    postLogin: function (req, res) {
		
        var u = req.body.uuName;
        var p = req.body.password;

        var query1 = {uuName: u, password: p};
		db.findOne(User, query1, null, function(x) {
            console.log(query1);
            if(x != null){
                db.insertOne(Instance,{
                    uuName: u
                });
                console.log(u + ' successfully logged in');

                res.redirect('/user/');
            }
            else{
                res.render('login');
            }
			
        });
    }
}

module.exports = loginController;