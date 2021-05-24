// import module from `../models/db.js`
const db = require('../models/db.js');

// import ProductSchema from `../models/ProductModel.js`
const Product = require('../models/productModel');

/*
    defines an object which contains functions executed as callback
    when a client requests for a certain path in the server
*/
const controller = {
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {  
        db.findMany(Product, null, null, function(result) {
            // render `../views/index.hbs`
            res.render('index', {products: result});
        });
    }
}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = controller;