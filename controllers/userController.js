const db = require('../models/db2.js');

const User = require('../models/userModel.js');
const Review = require('../models/reviewModel.js');
const Instance = require('../models/instanceModel.js');

const userController = {

    getUser: function (req, res) {

		var u = req.params.uuName;

		var query1 = {uuName: u};
		db.findOne(User, query1, null, function(x) {

			var query2 = {reviewer: u};
			db.findMany(Review, query2, {reviewee:1}, null, 0, function(y){
				
				res.render('profile', {
					uuName: x.uuName,
	
					dpPath: x.dpPath,

					name: x.name,
					id: x.id,
					email: x.email,
					course: x.course,
					
					revEntries: y
				});
			});
			
        });
	},
	
	getLoggedUser: function (req, res) {

		db.findMany(Instance, null, {_id:-1}, null, 1, function(u){
			
			var query1 = {uuName: u[0].uuName};
			db.findOne(User, query1, null, function(x) {

				var query2 = {reviewer: u[0].uuName};
				db.findMany(Review, query2, {reviewee:1}, null, 0, function(y){
					
					res.render('profile', {
						thisProfile: "this",

						uuName: x.uuName,
		
						dpPath: x.dpPath,

						name: x.name,
						id: x.id,
						email: x.email,
						course: x.course,
						
						revEntries: y
					});
				});
				
			});
		});
	}
}

module.exports = userController;
