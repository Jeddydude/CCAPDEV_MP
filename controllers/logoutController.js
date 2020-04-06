const db = require('../models/db2.js');

const Instance = require('../models/instanceModel.js');

const logoutController = {

    getLogout: function (req, res) {

        db.findMany(Instance, null, {_id:-1}, null, 0, function(u){
            
			var condition = {uuName: u[0].uuName};
			db.deleteOne(Instance, condition, function(x) {
            });
            
            console.log(u[0].uuName + ' successfully logged out');
            res.render('logout');
		});
    }
}

module.exports = logoutController;
