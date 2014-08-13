process.env.NODE_ENV = "testing";

request = require('supertest');
app = require('../app');
should = require('should');

describe('First Test', function() {
  it('should query for users', function(){
    request(app).get("/users").expect(200, function(err, resp) {
      resp.text.should.eql('respond with a resource');
    });
  });
});