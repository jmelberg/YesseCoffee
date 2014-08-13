process.env.NODE_ENV = "testing";

request = require('supertest');
app = require('../app');
should = require('should');
Product = require('../models/Product');

describe('Product Model', function() {
  
  it('should have a name attribute', function(){
      //do something with product, * make an instance of
      var product = new Product({name: 'Jordan'});
      product.name.should.eql('Jordan');
  });

  it('should query the database', function(){
    Product.find({}, function(err, res){
      res.length.should.be.above(2);
    });
  });

  it('should query the database by id', function(){
    product = new Product({name: 'test product'})
    product.save(function(error, product){
      productId = product._id;
      Product.findOne(productId, function(err, res){
        res.name.should.eql('test product');
      });

     
    });
  
  });

});