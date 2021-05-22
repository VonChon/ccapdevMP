// import module from `../models/db.js`
const db = require('../models/db.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for a certain path in the server
*/
const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {

        // render `../views/index.hbs`
        res.render('index');
    }

}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = controller;