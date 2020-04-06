const db = require('../models/db2.js');

const Faculty = require('../models/facultyModel.js');
const Review = require('../models/reviewModel.js');

const facultyController = {

    getFaculty: function (req, res) {
		
        var u = req.params.fuName;
		
		var query1 = {fuName: u};
		db.findOne(Faculty, query1, null, function(x) {
			
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
			
        });
		
	},

	postReview: function (req, res) {
		
	}
}


module.exports = facultyController;
