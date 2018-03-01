var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Goods = new Schema({
    goods_name   : String,
    goods_id	 : String,
    goods_group  : String,
    goods_price  : String,
    imgPath      : String,
    create_date: { type: Date, default: Date.now }
});
// 创建model对象
var GoodsModel = mongoose.model('items', Goods);
// 公开对象，暴露接口
module.exports = GoodsModel;