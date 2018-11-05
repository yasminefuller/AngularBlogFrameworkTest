var express = require('express');
var router = express.Router();
var Post = require('../models/post.model')


router.get('/post', function(req, res) {
  Post.find(function (err, data) {
    if (err) return res.status(404).send({'failed'});
    res.send({'data' :data});
})});

router.post("/post", function(req, res) {
  res.send('')});


module.exports = router;
