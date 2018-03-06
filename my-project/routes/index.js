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
router.get('/addlist', function(req, res, next) {
	res.render('addlist', { title: 'Express' });
});


//添加商品
router.post('/api/goods-upload', function(req, res, next) {
	
	var form = new multiparty.Form({
		uploadDir: "public/images"
	});
	var result = {
		code: 1,
		message: "商品信息保存成功"
	};
	form.parse(req, function(err, body, files){
		if(err) {
			console.log(err);
		}
		console.log(body);
		var goods_name = body.goods_name[0];
		var price = body.goods_price[0];
		var goods_id = body.goods_id[0];
		var group = body.goods_group[0];
		var imgPath = files["img"][0].path.replace("public\\", "");
		var gm = new GoodsModel();
		gm.goods_name = goods_name;
		gm.goods_price = price;
		gm.goods_id = goods_id;
		gm.goods_group = group;
		gm.imgPath = imgPath;
		gm.save(function(err){
			if(err) {
				result.code = -99;
				result.message = "商品保存失败";
			}
			res.json(result);
		})
	})
});

//分页
router.post('/api/return', function(req, res, next) {
	var now = req.body.now || 1;
	var jige = req.body.jige || 7;
	var mohu = null ;
	if(req.body.mohu){
		mohu = {"goods_name":{$regex : req.body.mohu}}
	}else{
		mohu = {};
	}
	
	console.log(req.body);
//	var condition = req.query.condition;	
	now = parseInt(now);	
	jige = parseInt(jige);
	GoodsModel.count({}, function(err, count){
		//后台拿到前端传过来的参数进行分页
		var query = GoodsModel.find(mohu).skip((now-1)*jige).limit(jige);

		query.exec(function(err, docs){
			var result = {
				total: count,
				data: docs,
				pageNO: now,
				jige  : jige,
				mohu  : mohu
			}
			res.json(result);
		});
	})	
});

router.get('/api/return', function(req, res) {
GoodsModel.findByIdAndRemove({_id:req.query.gid},function(err){
	var result={
			code:1,
			message:"商品删除成功"
		};
		if(err){
			result.code=-119;
			result.message="商品删除失败";
		}
		res.send(result);
	})
})

module.exports = router;
