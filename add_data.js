const mongoose = require('mongoose');
const profsToPickDB = require("./models/db2.js");

const Faculty = require('./models/facultyModel.js');
const User = require('./models/userModel.js');
const Review = require('./models/reviewModel.js');

profsToPickDB.connect();

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> faculties START */
var faculty = {
	fuName: "prof0",
	
	dpPath: "antioquia.png",

	name: "Arren Matthew C. Antioquia",
	email: "arren.antioquia@dlsu.edu.ph",
	college: "College of Computer Studies",
	department: "Software Technology",
	oaRating: 5.0,
	
	subjects:[
		{subject:"CCAPDEV", rating: 5.0}
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "prof1",
	
	dpPath: "prof1.jpg",

	name: "John Commons",
	email: "john.commons@dlsu.edu.ph",
	college: "College of Computer Studies",
	department: "Computer Technology",
	oaRating: 5.0,
	
	subjects:[
		{subject:"CCDSALG", rating: 5.0}
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "prof2",
	
	dpPath: "prof2.jpg",

	name: "Anna Commons",
	email: "anna.commons@dlsu.edu.ph",
	college: "College of Business",
	department: "Commercial Law",
	oaRating: 5.0,
	
	subjects:[
		{subject:"BUSLAW", rating: 5.0}
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "bethlin",
	
	dpPath: "bethlin.jpg",

	name: "Beth Lin",
	email: "beth.lin@dlsu.edu.ph",
	college: "College of Science",
	department: "Chemistry Department",
	oaRating: 4.5,
	
	subjects:[
		{subject:"BASMATH", rating: 4.5}
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "mactal",
	
	dpPath: "president.jpg",

	name: "Ronaldo Mactal",
	email: "ronaldo.mactal@dlsu.edu.ph",
	college: "College of Liberal Arts",
	department: "History Department",
	oaRating: 0.5,
	
	subjects:[
		{subject:"GERPHIS", rating: 0.5}
	],
}
profsToPickDB.insertOne(Faculty, faculty);


var faculty = {
	fuName: "unissechua",
	
	dpPath: "Unisse.jpg",

	name: "Unisse Chua",
	email: "Unisse.Chua@dlsu.edu.ph",
	college: "College of Computer Studies",
	department: "Computer Technology",
	oaRating: 5,
	
	subjects:[
		{subject:"CCAPDEV", rating:5.0 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "florantesalvador",
	
	dpPath: "Salvador.jpg",

	name: "Florante Salvador",
	email: "florante.salvador@dlsu.edu.ph",
	college: "College of Computer Studies",
	department: "Computer Technology",
	oaRating: 4.5,
	
	subjects:[
		{subject:"CCPROG2", rating:4.5 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);
var faculty = {
	fuName: "vergelbungay",
	
	dpPath: "vergel.jpg",

	name: "Vergel Bungay",
	email: "Vergel.Bungay@dlsu.edu.ph",
	college: "College of Engineering",
	department: "Math Department",
	oaRating: 4.0,
	
	subjects:[
		{subject:"CALENG1", rating:4.0 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);
var faculty = {
	fuName: "ronaldpascual",
	
	dpPath: "ronald.jpg",

	name: "Ronald Pascual",
	email: "ronald.pascual@dlsu.edu.ph",
	college: "College of Computer Studies",
	department: "Computer Technology",
	oaRating: 3.5,
	
	subjects:[
		{subject:"CSARCH1", rating:3.5 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);
var faculty = {
	fuName: "noelledelacruz",
	
	dpPath: "noelle.jpg",

	name: "Noelle Dela Cruz",
	email: "Noelle.Delacruz@dlsu.edu.ph",
	college: "College of Liberal Arts",
	department: "Philosopy department",
	oaRating: 4.5,
	
	subjects:[
		{subject:"GEETHIC", rating:4.5 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);
var faculty = {
	fuName: "jenniferureta",
	
	dpPath: "jennifer.jpg",

	name: "Jennifer Ureta",
	email: "Jennifer.ureta@dlsu.edu.ph",
	college: "College of Computer Studies",
	department: "Computer Technology",
	oaRating: "2.0",
	
	subjects:[
		{subject:"CCPROG1", rating:2.0 }
	],
}


profsToPickDB.insertOne(Faculty, faculty);
var faculty = {
	fuName: "tessielimoanco",
	
	dpPath: "teresita.jpg",

	name: "Teresita Limoanco",
	email: "teresita.limoanco@dlsu.edu.ph",
	college: "College of Computer Studies",
	department: "Computer Technology",
	oaRating: 4.5,
	
	subjects:[
		{subject:"CSALGCM", rating:4.5 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "ArleneInocencio",
	
	dpPath: "arlene.jpg",

	name: "Arlene Inocencio",
	email: "Arlene.Inocencio@dlsu.edu.ph",
	college: "Brother Andrew Gonzales College of Education",
	department: "Economics Department",
	oaRating: 5.0,
	
	subjects:[
		{subject:"MATECO1", rating:5.0 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "gerardojanairo",
	
	dpPath: "janairo.jpg",

	name: "Gerardo C. Janairo",
	email: "Gerardo.Janairo@dlsu.edu.ph",
	college: "College of Engineering",
	department: "Chemistry Department",
	oaRating: 4.0,
	
	subjects:[
		{subject:"KEMORG1", rating:4.0 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "arlenepascasio",
	
	dpPath: "Pascasio.jpg",

	name: "Arlene Pascasio",
	email: "Arlene.Pascasio@dlsu.edu.ph",
	college: "College of Engineering",
	department: "Chemistry Department",
	oaRating: 4.5,
	
	subjects:[
		{subject:"KEMATH1", rating:4.0 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "leonorruivivar",
	
	dpPath: "leonor.jpg",

	name: "Leonor Ruivivar",
	email: "Leonor.Ruivivar@dlsu.edu.ph",
	college: "School of Economics",
	department: "Math Department",
	oaRating: 2.0,
	
	subjects:[
		{subject:"MTH124A", rating:2.0 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "easteregg",
	
	dpPath: "easterEgg.jpg",

	name: "Thrall,son of Durotan",
	email: "Orcish.Horde@gmail.com",
	college: "THE HORDE",
	department: "Orcish Hordes",
	oaRating: 5.0,
	
	subjects:[
		{subject:"ORCLEC1", rating:5.0 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);

var faculty = {
	fuName: "frumencioco",
	
	dpPath: "co.jpg",

	name: "Frumencio Co",
	email: "Frumencio.Co@dlsu.edu.ph",
	college: "School of Economics",
	department: "Math Department",
	oaRating: 5.0,
	
	subjects:[
		{subject:"STT151A", rating:5.0 }
	],
}
profsToPickDB.insertOne(Faculty, faculty);


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> faculties END */


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> users START */

var user = {
	uuName: "Jeddy the gouf",
	password: "asd",
	
	dpPath: "dp.jpg",
	
	name: "Jedwig Siegfrid Tan",
	id: "11828102",
	email: "jedwig_siegfrid_tan@dlsu.edu.ph",
	course: "BS Computer Science",
}
profsToPickDB.insertOne(User, user);

var user = {
	uuName: "Ygg",
	password: "asd",
	
	dpPath: "default.jpg",
	
	name: "Salvador Tan",
	id: "118",
	email: "salvador_tan@dlsu.edu.ph",
	course: "BS Computer Science",
}
profsToPickDB.insertOne(User, user);


var user = {
	uuName: "silverioalysson",
	password: "aly",
	
	dpPath: "default.jpg",
	
	name: "Alysson Silverio",
	id: "11823432",
	email: "gwyneth__silverio@dlsu.edu.ph",
	course: "BS Computer Science",
}
profsToPickDB.insertOne(User, user);

var user = {
	uuName: "UNLiWINGS",
	password: "LIND",
	
	dpPath: "wings.jpg",
	
	name: "Geryco Dionisio",
	id: "11823881",
	email: "Geryco_Dionisio@dlsu.edu.ph",
	course: "AB Psychology",
}
profsToPickDB.insertOne(User, user);

var user = {
	uuName: "Barley",
	password: "ONWARD",
	
	dpPath: "onward.jpg",
	
	name: "Drake Mackentire",
	id: "11678973",
	email: ":'Drake_Mackentire@dlsu.edu.ph",
	course: "CIV-ENG",
}
profsToPickDB.insertOne(User, user);

var user = {
	uuName: "Whosyourdaddy",
	password: "KARMA",
	
	dpPath: "karma.jpg",
	
	name: "Kenzman Liu",
	id: "118342342",
	email: "Kenzo_Liu@dlsu.edu.ph",
	course: "CHEM-ENG",
}
profsToPickDB.insertOne(User, user);
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> users END */


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> reviews START */
var review = {
	reviewee_u:"prof0",
	
	imagePath:"dp.jpg",
	reviewer:"Jeddy the gouf",
	reviewee:"Arren Matthew C. Antioquia",
	revCourse:"CCAPDEV",
	revStar:5,
	revDet:"Learned a lot from this prof, gave me a 4.0 for all my hardwork. Get this prof at all costs"
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"prof1",
	
	imagePath:"dp.jpg",
	reviewer:"Jeddy the gouf",
	reviewee:"John Commons",
	revCourse: "CCDSALG",
	revStar: 5,
	revDet:"Perfect Teacher! Ez lang requirements kaya di mo na kailangan magDSAL sa end of term"
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"prof2",
	
	imagePath:"dp.jpg",
	reviewer:"Jeddy the gouf",
	reviewee:"Anna Commons",
	revCourse: "BUSLAW",
	revStar: 5,
	revDet:"I CANT BELIV I PASSED THIS SUBJECT!!! LUV U MISS!!!"
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"bethlin",
	
	imagePath:"dp.jpg",
	reviewer:"Jeddy the gouf",
	reviewee:"Beth Lin",
	revCourse: "BASMATH",
	revStar: 4.5,
	revDet:"Very lola like, vv caring but at the same time kung matalino class mo GG kasi sasabihin niya 'kaya niyo na yan' sa gitna ng lecture but very fair and understanding na prof. The effort you make = the grade you get."
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"mactal",
	
	imagePath:"dp.jpg",
	reviewer:"Jeddy the gouf",
	reviewee:"Ronaldo Mactal",
	revCourse: "GERPHIS",
	revStar: 0.5,
	revDet:"He knows his stuff but teaches everything but the subject itself. also very hassle and belittles students. also gave me a death threat"
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"prof0",
	
	imagePath:"default.jpg",
	reviewer:"Ygg",
	reviewee:"Arren Matthew C. Antioquia",
	revCourse: "CCAPDEV",
	revStar: 5.0,
	revDet:"Very calming teaching style, you'll learn a lot!!"
}
profsToPickDB.insertOne(Review, review);


var review = {
	reviewee_u:"arlenepascasio",
	
	imagePath:"karma.jpg",
	reviewer:"Whosyourdaddy",
	reviewee:"Arlene Pascasio",
	revCourse: "KEMATH1",
	revStar:4.5,
	revDet:"FUN AND ENGAGING PROF! one of the best there is!",
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"vergelbungay",
	
	imagePath:"karma.jpg",
	reviewer:"Whosyourdaddy",
	reviewee:"Vergel Bungay",
	revCourse: "CALENG1",
	revStar:4.5,
	revDet:"solid netong prof super, korean speaking pa siya noice!",
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"leonorruivivar",
	
	imagePath:"karma.jpg",
	reviewer:"Whosyourdaddy",
	reviewee:"Leonor Ruivivar",
	revCourse: "MTH124A",
	revStar:2.5,
	revDet:"Mukhang hindi mabait sa mga estudyante niya, might be wrong tho",
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"vergelbungay",
	
	imagePath:"wings.jpg",
	reviewer:"UNLiWINGS",
	reviewee:"Vergel Bungay",
	revCourse: "CALENG1",
	revStar:4.5,
	revDet:"masaya siya maging prof!",
}
profsToPickDB.insertOne(Review, review);

var review = {
	reviewee_u:"leonorruivivar",
	
	imagePath:"wings.jpg",
	reviewer:"UNLiWINGS",
	reviewee:"Leonor Ruivivar",
	revCourse: "MTH124A",
	revStar:2.0,
	revDet:"Sakto lang naman, you get something i guess",
}
profsToPickDB.insertOne(Review, review);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> reviews END */