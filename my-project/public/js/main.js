$(function(){


$(".lis-1").click(function(){
	if($(".lis-ul").css("display") ==  "none"){
		$(".lis-ul").show();
		$(".lis-1").css("background"," #454545 url(../../images/main/menu1_1.png) 9px 0 no-repeat")
	}else{
		$(".lis-ul").hide();
		$(".lis-1").css("background"," #454545 url(../../images/main/menu_1.png) 9px 0 no-repeat")
	}
})

//按钮事件
var toggle = false;
$("#zoom").click(function(){
	if(toggle == false){
		$("#left").css("width","55px");
		$("#tabbar-div").css("display","none");
		$("#tabbar-div li").css("display","none");
		$("#zoom a img").attr("src","../../images/main/arrow_left.gif")
		toggle = true;
	}
	else if(toggle == true){
		$("#left").css("width","180px");
		$("#tabbar-div").css("display","block");
		$("#zoom a img").attr("src","../../images/main/arrow_right.gif")
		toggle = false;
		$("#tabbar-div li").css("display","block");
	}
	
})
//
$(".lis-ul li").click(function(e){
		e.stopPropagation();
		
	})

})