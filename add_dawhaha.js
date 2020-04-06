const mongoose = require('mongoose');
const profsToPickDB = require("./models/db2.js");

const Faculty = require('./models/facultyModel.js');
const User = require('./models/userModel.js');
const Review = require('./models/reviewModel.js');

profsToPickDB.connect();

var review = {
	reviewee_u:"bethlin",
	
	imagePath:"default.jpg",
	reviewer:"Ygg",
	reviewee:"Beth Lin",
	revCourse: "BASMATH",
	revStar: 4.5,
	revDet:"Very lola like, vv caring but at the same time kung matalino class mo GG kasi sasabihin niya 'kaya niyo na yan' sa gitna ng lecture but very fair and understanding na prof. The effort you make = the grade you get."
}
profsToPickDB.insertOne(Review, review);