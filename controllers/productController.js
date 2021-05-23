// import module from `../models/database.js`
const db = require('../models/db.js');

// import ProductSchema from `../models/ProductModel.js`
const Product = require('../models/productModel');


const productController = {
  getAllProducts: function (req, res) {
    db.findMany(Product, null, (result) => defaultCallback(res, result));
  },
  getProduct: function (req, res) {
    const { pname } = req.params;

    // finds the product which matches the pname
    db.findOne(Product, { pname }, (result) => defaultCallback(res, result));
  },
  addProduct: function (req, res) {
      db.insertOne(Product, req.body, (result) => defaultCallback(res, result))
  }
}
//    deleteProduct: (req, res) => {
//      const { slug } = req.params;
    
//      db.deleteOne(Product, { slug }, (result) => defaultCallback(res, result))
//    }
// };
/*
    exports the object `ProductController` (defined above)
    when another script exports from this file
*/
module.exports = productController;