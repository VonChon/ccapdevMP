// import module from `../models/db.js`
const db = require('../models/db.js');

db.connect();

db.dropCollection('users', function() { console.log('') });
db.dropCollection('products', function() { console.log('') });

// TODO:
// - Link Index page to product page
// - Search functionality