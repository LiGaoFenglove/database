var express = require('express');
var router = express.Router();
var md5 = require("md5");
var UserModel = require("../model/UserModel");
var GoodsModel = require("../model/user");
var multiparty = require("multiparty");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
//登录页面
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
//后台主页面
router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Express'  });
});
//session验证
router.get('/main', function(req, res, next) {	
  	if(req.session == null || req.session.username == null) {
		// res.render('login', { title: '登录页面' });
		console.log(req.session);
		res.redirect("/login"); // 重定向
		return;
	}
		res.render('', {});
});


//登录验证
router.get("/loginAction",function(req,res){
	var result = {
				code : 1,
				message : "登录成功"
		};
	if(req.query.username == "lgf" && req.query.pwd == "1234"){

//			result.code = 1;
//			res.send(result.message);
//			登录成功生成session		
				req.session.username = req.query.username;
				res.json(result);
				
			
	}else{
				result.code = -101;
				result.message = "您的用户名密码错误！重新输入"	
//				res.send(result.message);
				res.json(result);
	}
	
})






//添加商品路由
// router.get('/addlist', function(req, res, next) {
// 	res.render('addlist', { title: 'Express' });
// });




// //分页
// router.post('/api/return', function(req, res, next) {
// 	var now = req.body.now || 1;
// 	var jige = req.body.jige || 7;
// 	var mohu = null ;
// 	if(req.body.mohu){
// 		mohu = {"goods_name":{$regex : req.body.mohu}}
// 	}else{
// 		mohu = {};
// 	}
	
// 	console.log(req.body);
// //	var condition = req.query.condition;	
// 	now = parseInt(now);	
// 	jige = parseInt(jige);
// 	GoodsModel.count({}, function(err, count){
// 		//后台拿到前端传过来的参数进行分页
// 		var query = GoodsModel.find(mohu).skip((now-1)*jige).limit(jige);

// 		query.exec(function(err, docs){
// 			var result = {
// 				total: count,
// 				data: docs,
// 				pageNO: now,
// 				jige  : jige,
// 				mohu  : mohu
// 			}
// 			res.json(result);
// 		});
// 	})	
// });
module.exports = router;
