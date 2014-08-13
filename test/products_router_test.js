process.env.NODE_ENV = "testing";

request = require('supertest');
app = require('../app');
should = require('should');
Product = require('../models/Product');

describe('Product Routes', function() {
  
  it('should have a name attribute', function(done){
    request(app).get("/products").expect(200, function(err, res) {
      res.body.length.should.be.above(2);
      res.body[0].name.should.match(/Coffee/);
      done();
    });    
  });

  it('GET /products/:id should retrieve product with id of :id', function(done){
    product = new Product({name:"Jet Fuel Coffee"});
    product.save(function(error, product){
      productId = product._id;
      request(app).get("/products/" + productId).expect(200, function(err, res) {
        res.body._id.should.eql(productId.toString());
        res.body.name.should.eql("Jet Fuel Coffee");
        done();
      });
    });
    
  });


});


