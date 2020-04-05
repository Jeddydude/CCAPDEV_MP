const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials/');

const routes = require('./routes/routes.js');

const db = require('./models/db2.js');

app.use(express.urlencoded({extended: true}));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> navigation START
app.use('/', routes);

app.use(function (req, res) {
    console.log('Page Not Found');
    res.render('error');
});
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> navigation END

db.connect();

app.listen(port, function () {
    console.log('app listening at port ' + port);
});
