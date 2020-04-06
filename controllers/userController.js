const db = require('../models/db2.js');

const User = require('../models/userModel.js');
const Review = require('../models/reviewModel.js');
const Instance = require('../models/instanceModel.js');

const userController = {

    getUser: function (req, res) {

		var u = req.params.uuName;

		db.findMany(Instance, null, {_id:-1}, null, 1, function(i){

			if(i[0] != null){
				var query1 = {uuName: u};
				db.findOne(User, query1, null, function(x) {
					
					if(x != null){
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
					}
					else{
						console.log('User Not Found');
						res.render('error');
					}
					
				});
			}
			else{
				console.log('No User Logged In');
				res.render('error');
			}
		});
	},
	
	getLoggedUser: function (req, res) {

		db.findMany(Instance, null, {_id:-1}, null, 1, function(u){
			
			if(u[0] != null){
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
			}
			else{
				console.log('No User Logged In');
				res.render('error');
			}
		});
	},

	checkAuthority: function (req, res) {
		var uuName = req.query.uuName;

		db.findOne(Instance, {uuName:uuName}, {uuName:1}, function (result) {
			console.log('authority checked');
			res.send(result);
		});
		
	},

	deleteReview: function(req, res) {
		var conditions = {reviewer:req.query.reviewer, reviewee:req.query.reviewee};

		db.deleteOne(Review, conditions, function(x){

		});
	}

}

module.exports = userController;
