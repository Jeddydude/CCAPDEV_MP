const db = require('../models/db2.js');

const User = require('../models/userModel.js');

const signupController = {

    getSignUp: function (req, res) {
        res.render('signup');
    },

    postSignUp: function (req, res) {
        console.log('far as this');
		var email = req.body.email;
		var name = req.body.name;
		var uuName = req.body.uuName;
		var course = req.body.course;
		var id = req.body.id;
        var pass = req.body.pass + "";
        console.log('far as this' + pass);
		
        db.insertOne(User, {
            uuName: uuName,
			password: pass,
			
            dpPath:'dp.jpg',
            
			name: name,
            id: id,
            email: email,
			course: course
        });

        console.log('Created account of' + id);
        res.redirect('/user/' + uuName);
    }

}

module.exports = signupController;
