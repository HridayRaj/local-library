var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.send("home index added to the thing");
});

router.get('/pricing', function(req, res, next) {
  res.send("its all free");
});

module.exports = router;
