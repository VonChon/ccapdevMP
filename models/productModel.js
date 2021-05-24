// import module `mongoose`
const mongoose = require('mongoose');

const { Schema } = mongoose;

// defines the schema for collection `products`
const ProductSchema = Schema({
  prodname: {
    type: String,
    required: true,
    unique: true
  },
  pimages: {
    type: [String],
  },
  categories: {
    type: [String]
  },
  priceBefore: {
    type: Schema.Types.Decimal128,
    required: true
  },
  priceNow: {
    type: Schema.Types.Decimal128,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  details: {
      type: [String]
  },
  reviews: {
    type: []
  },
  comments: {
    type: []
  }
});

/*
  exports a mongoose.model object based on `ProductSchema` (defined above)
  when another script exports from this file
  This model executes CRUD operations
  to collection `products` -> plural of the argument `Product`
*/
module.exports = mongoose.model('Product', ProductSchema);