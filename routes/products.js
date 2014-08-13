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

router.post('/', function(req, res){
  product = new Product(req.body);
  product.save(function(err, post){
    if(err)
      res.send(err);
    else 
      res.send(post);

  });
});

router.put('/:id', function(req, res){
  Product.findOne({"_id": req.params.id}, function(error, model){
    product  = new Product(req.body);
    product.save(function(err,prod){
    if(err)
      res.send(err);
    else
      res.send(prod);
  });
  });
});

router.delete('/:id', function(req, res){
  Product.findByIdAndRemove(req.params.id, function(err){
    if(err)
      res.send("Could not find..." + err);
    else
      res.send({message: "Product with ID " + req.params.id + " was deleted"});

  });
});



module.exports = router;
