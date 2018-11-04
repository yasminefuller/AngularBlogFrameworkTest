var express = require('express');
var router = express.Router();
var HelloWorld = require('../models/helloworld.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res) {
  res.send({'data':'Hello World!'});
});

router.get('/api/helloworld', function(req, res){
  HelloWorld.find(function(err, data) {
    if (err) return res.send({'status': 'failed'});
    res.send({'data':data});
  });
});

router.post('/api/helloworld', function(req, res) {
    console.log("Got post")
  new HelloWorld(req.body).save(function(err, data) {
    if (err) {
        return res.send({'status': 'Failed'});
    }
    console.log('Saved some data');
    res.send({'status':'Success'});
  });
});

module.exports = router;
