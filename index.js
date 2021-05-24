// import module `express`
const express = require('express');

// import module `hbs`
const hbs = require('hbs');

const routes = require('./routes/routes.js');

const db = require('./models/db.js');
// import module `routes` from `./routes/routes.js`
// const routes = require('./routes/routes.js');

const app = express();
const port = 3000;

// set `hbs` as view engine
app.set('view engine', 'hbs');

// sets `/views/partials` as folder containing partial hbs files
hbs.registerPartials(__dirname + '/views/partials');

// set the folder `public` as folder containing static assets
// such as css, js, and image files
app.use(express.static(__dirname + '/public'));

// define the paths contained in `./routes/routes.js`
// app.use('/', routes);

// binds the server to a specific port
app.listen(port, function () {
    console.log('app listening at port ' + port);
});

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

app.use(function (req, res) {
    res.render('error404');
});

db.connect();