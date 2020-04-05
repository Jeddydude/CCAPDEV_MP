const db = require('../models/db2.js');

const User = require('../models/userModel.js');
const Review = require('../models/reviewModel.js');

const userController = {

    getUser: function (req, res) {
		
        var u = req.params.uuName;

        var query1 = {uuName: u};
		db.findOne(User, query1, null, function(x) {
			
			var query2 = {reviewer: u};
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
}

module.exports = userController;
