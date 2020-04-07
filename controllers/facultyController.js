const db = require('../models/db2.js');

const Faculty = require('../models/facultyModel.js');
const Review = require('../models/reviewModel.js');
const Instance = require('../models/instanceModel.js');

const facultyController = {

    getFaculty: function (req, res) {
		

		db.findMany(Instance, null, {_id:-1}, null, 1, function(i){

			if(i[0] != null){
				var u = req.params.fuName;
				
				var query1 = {fuName: u};
				db.findOne(Faculty, query1, null, function(x) {
					
					if(x != null){
						var query2 = {reviewee_u: u};
						db.findMany(Review, query2, {reviewee:1}, null, 0, function(y){
							
							res.render('faculty', {
								fuName: x.fuName,
				
								dpPath: x.dpPath,

								name: x.name,
								email: x.email,
								college: x.college,
								department: x.department,
								oaRating: x.oaRating,
								
								subjects: x.subjects,
								
								revEntries: y
							});
						});
					}
					else{
						console.log('Faculty Not Found');
						res.render('error');
					}
					
				});
			}
			else{
				console.log('You are not logged in');
				res.render('error', {extra: '<br>Please try logging in.'});
			}

		});
		
	},

	postReview: function (req, res) {
		
	}
}


module.exports = facultyController;
