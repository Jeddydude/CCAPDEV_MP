const db = require('../models/db2.js');

const Instance = require('../models/instanceModel.js');

const logoutController = {

    getLogout: function (req, res) {

        db.findMany(Instance, null, {_id:-1}, null, 0, function(u){
            
            db.deleteMany(Instance, null, function(y){
               
            });
            console.log(u[0].uuName + ' Successfully Logged Out');
            res.render('logout');
            
		});

        
    }
}

module.exports = logoutController;
