var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

/* GET users listing. */
router.get('/', function(req, res) {
  Product.find({}, function(error,  models){
    res.send(models);  
  });
});

router.get('/:id', function(req, res) {
  Product.findOne({"_id": req.params.id}, function(error,  model){
    res.send(model);  
  });
});

module.exports = router;
