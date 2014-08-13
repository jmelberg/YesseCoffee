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

  it('POST /products should create a product with passed json attributes', function(done) {
    request(app).post("/products").send({name:"Jet Fuel Coffee"}).expect(200, function(err, res) {
      res.body.should.include({name:"Jet Fuel Coffee"});
      res.body.should.have.property("_id");
      done();
    });
  });

  it('PUT /product/:id should update a product with id :id', function(done) {
    product = new Product({name: 'black coffee'});
    product.save(function(err, prod) {
      productId = prod._id;
      request(app).put('/products/' + productId).send({name: 'new name'}).expect(200, function(err, res) {
        res.body.name.should.eql('new name');
        done();
      });
    });
    // body...
  });

  it('/DELETE /products/:id should delete product with id', function(done) {
    product = new Product({name: 'black coffee'});
    product.save(function(err, prod) {
      productId = prod._id;
      request(app).delete('/products/' + productId).expect(200, function(err, res) {
        res.body.message.should.eql("Product with ID " + productId + " was deleted");
        done();
      });
    });


    // body...
  })

});


