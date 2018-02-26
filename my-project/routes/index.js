var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//登录页面
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

module.exports = router;
