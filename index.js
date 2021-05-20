// import module `express`
const express = require('express');

// import module `express-handlebars`
const exphbs = require('express-handlebars');

// import module `routes` from `./routes/routes.js`
// const routes = require('./routes/routes.js');

const app = express();
const port = 3000;

// set `hbs` as view engine
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({extname: 'hbs'}));

// set the folder `public` as folder containing static assets
// such as css, js, and image files
app.use(express.static(__dirname + '/public'));

// define the paths contained in `./routes/routes.js`
// app.use('/', routes);

// binds the server to a specific port
app.listen(port, function () {
    console.log('app listening at port ' + port);
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/main', function(req, res) {
    var path = './public/HTML/Site.html';
    res.send(path);
});