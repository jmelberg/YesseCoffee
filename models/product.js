var mongoose = require('mongoose');

var Product = new mongoose.Schema({
  "name": String,
  "price": Number,
  "onSale": Boolean 
});

module.exports = mongoose.model('Product', Product);