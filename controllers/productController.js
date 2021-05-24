// import module from `../models/database.js`
const db = require('../models/db.js');

// import ProductSchema from `../models/ProductModel.js`
const Product = require('../models/productModel');

const productController = {
  getAllProducts: function (req, res) {
    db.findMany(Product, null, null, function(result){ res.status(200).json(result) });
  },
  getProduct: function (req, res) {
    const { pname } = req.params;

    // finds the product which matches the pname
    db.findOne(Product, { 'prodname': pname }, null, function(result){ 
      result['onlyOnePrice'] = parseFloat(result['priceBefore']) == parseFloat(result['priceNow'])
      result['mainimage'] = result['pimages'][0]
      result['pimages'] = result['pimages'].slice(1)
      res.render('product', result)
    });
  },
  addProduct: function (req, res) {
    db.insertOne(Product, req.body, function(result){ res.status(200).json(result) })
  },
   deleteProduct: function (req, res) {
     const { prodid } = req.params;
    
     db.deleteOne(Product, { prodid }, function(result){ res.status(200).json(result) })
   }
};
/*
    exports the object `ProductController` (defined above)
    when another script exports from this file
*/
module.exports = productController;