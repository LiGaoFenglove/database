$(function(){
	// $rand = $(".yz");
	// $yangzheng = $("#yanzheng");
	// $but = $("#but");
	
	
	function rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	function checkNumber() {
		var arr = []; //存放验证码

		for(var i = 0; i < 4; i++) {
			var code = rand(48, 122);
			//如果验证码不符合条件
			if(code >= 58 && code <= 64 || code >= 91 && code <= 96) {
				//重抽
				i--;
			} else {
				//将符合条件的code值  转成对应的字符存入到一个数组中
				arr.push(String.fromCharCode(code));
			}
		}
		return arr.join("");
	}
	$(".yz").html(checkNumber());
	$(".yz").click(function(){
		$(".yz").html( checkNumber()) ;
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
})
