// import module from `../models/db.js`
const db = require('../models/db.js');

// defines an object which contains functions executed as callback
// when a client requests for a certain path in the server
const controller = {


    getFaculty: function (req, res) {

        // gets the parameter `username` from the URL
        var u = req.params.uName;

        // creates an object `query`
        // which assigns the value of the variable `u` to field `username`
        var query = {uName: u};

        // calls the function findOne()
        // defined in the `database` object in `../models/db.js`
        // this function searches the collection `profiles`
        // based on the value set in object `query`
        // the third parameter is a callback function
        // this called when the database returns a value
        // saved in variable `result`
        db.findOne(Faculty, query, function (result) {

            // renders `../views/profile.hbs`
            // with the values in variable `results`
            res.render('faculty', result);
        });
    }
}

// exports the object `controller` (defined above)
// when another script exports from this file
module.exports = controller;
