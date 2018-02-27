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
//后台页面
router.get('/main', function(req, res, next) {
  res.render('main', { title: 'main' });
});

module.exports = router;
