const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials/');

app.get('/', function(req, res){
	res.render('login');
});

app.get('/login', function(req, res){
	res.render('login');
});

app.get('/signup', function(req, res){
	res.render('signup');
});

app.get('/logout', function(req, res){
	res.render('logout');
});

app.get('/home', function(req, res){
	res.render('home', {
		thisHome: "this",
		
		revEntries: [
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Beth Lin",
				revTag:"BASMATH ✯4.5",
				revDet:"Very lola like, vv caring but at the same time kung matalino class mo GG kasi sasabihin niya 'kaya niyo na yan' sa gitna ng lecture but very fair and understanding na prof. The effort you make = the grade you get."
			},
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Arren Antioquia",
				revTag:"CCAPDEV ✯5",
				revDet:"Learned a lot from this prof, gave me a 4.0 for all my hardwork. Get this prof at all costs"
			}
		],
		
		topImagePath: "antioquia.png",
		topProfs: [
			{link: "/prof0", top: "1. Arren Antioquia"},
			{link: "/prof2", top: "2. Anna Commons"},
			{link: "/prof1", top: "3. John Commons"}
		]
	});
});

app.get('/profile', function(req, res){
	res.render('profile', {
		thisProfile: "this",
		
		dpPath: "dp.jpg",
		
		uName: "Jeddy the gouf",
		name: "Jedwig Siegfrid Tan",
		id: "11828102",
		email: "jedwig_siegfrid_tan@dlsu.edu.ph",
		course: "BS Computer Science",
		
		revEntries: [
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Beth Lin",
				revTag:"BASMATH ✯4.5",
				revDet:"Very lola like, vv caring but at the same time kung matalino class mo GG kasi sasabihin niya 'kaya niyo na yan' sa gitna ng lecture but very fair and understanding na prof. The effort you make = the grade you get."
			},
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Ronaldo Mactal",
				revTag:"GERPHIS ✯0.5",
				revDet:"He knows his stuff but teaches everything but the subject itself. also very hassle and belittles students. also gave me a death threat"
			},
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Arren Antioquia",
				revTag:"CCAPDEV ✯5",
				revDet:"Learned a lot from this prof, gave me a 4.0 for all my hardwork. Get this prof at all costs"
			}
		]
		
	});
});

app.get('/view', function(req, res){
	res.render('view', {
		thisView: "this",
		
		CCSprofs: [
			{link:"/prof0", prof:"Arren Antioquia"},
			{link:"/prof1", prof:"John Commons"}
		], 
		
		COSprofs: [
			{link:"/bethlin", prof:"Beth Lin"}
		],
		
		COBprofs: [
			{link:"/prof2", prof:"Anna Commons"}
		],
		
		CLAprofs: [
			{link:"/mactal", prof:"Ronaldo Mactal"}
		]
	});
});

app.get('/result', function(req, res){
	res.render('result', {
		thisSearch: "this",
		
		searchKey: "Arren",
		
		results: [
			{link:"/prof0", result: "Arren Antioquia"},
		]
	});
});

app.get('/prof0', function(req, res){
	res.render('faculty', {
		
		dpPath: "antioquia.png",
		
		name: "Arren Matthew C. Antioquia",
		email: "arren.antioquia@dlsu.edu.ph",
		college: "College of Computer Studies",
		department: "Software Technology",
		oaRating: "5.0",
		
		subjects:[
			{subject:"CCAPDEV", rating: "5.0"},
		],
		
		imagePath:"dp.jpg",
		link:"/profile",
		reviewer:"Jeddy the gouf",
		reviewee:"Arren Antioquia",
		
		revEntries: [
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Arren Antioquia",
				revTag:"CCAPDEV ✯5",
				revDet:"Learned a lot from this prof, gave me a 4.0 for all my hardwork. Get this prof at all costs"
			}
		]
		
	});
});

app.get('/prof1', function(req, res){
	res.render('faculty', {
		
		dpPath: "prof1.jpg",
		
		name: "John Commons",
		email: "john.commons@dlsu.edu.ph",
		college: "College of Computer Studies",
		department: "Computer Technology",
		oaRating: "5.0",
		
		subjects:[
			{subject:"CCDSALG", rating: "5.0"},
		],
		
		imagePath:"dp.jpg",
		link:"/profile",
		reviewer:"Jeddy the gouf",
		reviewee:"John Commons",
		
		revEntries: [
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"John Commons",
				revTag:"CCDSALG ✯5",
				revDet:"Perfect Teacher! Ez lang requirements kaya di mo na kailangan magDSAL sa end of term"
			}
		]
		
	});
});

app.get('/prof2', function(req, res){
	res.render('faculty', {
		
		dpPath: "prof2.jpg",
		
		name: "Anna Commons",
		email: "anna.commons@dlsu.edu.ph",
		college: "College of Business",
		department: "Commercial Law",
		oaRating: "5.0",
		
		subjects:[
			{subject:"BUSLAW", rating: "5.0"},
		],
		
		imagePath:"dp.jpg",
		link:"/profile",
		reviewer:"Jeddy the gouf",
		reviewee:"Anna Commons",
		
		revEntries: [
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Anna Commons",
				revTag:"BUSLAW ✯5",
				revDet:"I CANT BELIV I PASSED THIS SUBJECT!!! LUV U MISS!!!"
			}
		]
		
	});
});

app.get('/bethlin', function(req, res){
	res.render('faculty', {
		
		dpPath: "bethlin.jpg",
		
		name: "Beth Lin",
		email: "Beth.Lin@dlsu.edu.ph",
		college: "College of Science",
		department: "Chemistry Department",
		oaRating: "4.5",
		
		subjects:[
			{subject:"BASMATH", rating: "4.5"},
		],
		
		imagePath:"dp.jpg",
		link:"/profile",
		reviewer:"Jeddy the gouf",
		reviewee:"Beth Lin",
		
		revEntries: [
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Beth Lin",
				revTag:"BASMATH ✯4.5",
				revDet:"Very lola like, vv caring but at the same time kung matalino class mo GG kasi sasabihin niya 'kaya niyo na yan' sa gitna ng lecture but very fair and understanding na prof. The effort you make = the grade you get."
			}
		]
		
	});
});

app.get('/mactal', function(req, res){
	res.render('faculty', {
		
		dpPath: "president.jpg",
		
		name: "Ronaldo Mactal",
		email: "Ronaldo.Mactal@dlsu.edu.ph",
		college: "College of Literature and Arts",
		department: "History Department",
		oaRating: "0.5",
		
		subjects:[
			{subject:"GERPHIS", rating: "0.5"},
		],
		
		imagePath:"president.jpg",
		link:"/profile",
		reviewer:"Jeddy the gouf",
		reviewee:"Ronaldo Mactal",
		
		revEntries: [
			{
				imagePath:"dp.jpg",
				link:"/profile",
				reviewer:"Jeddy the gouf",
				reviewee:"Ronaldo Mactal",
				revTag:"GERPHIS ✯0.5",
				revDet:"He knows his stuff but teaches everything but the subject itself. also very hassle and belittles students. also gave me a death threat"
			}
		]
		
	});
});

app.listen(port, function(){
	console.log('App Listening at port ' + port);
});