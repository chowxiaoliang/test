//share小图标切换
$(function(){
	$(".share").find("a").mouseover(function(){
		var _index=$(this).index();
		if(_index==0){
			$(this).css({
				"background-color":"#666"
			})
		}
		if(_index==1){
			$(this).css({
				"background-color":"#0e71b7"
			})
		}
		if(_index==2){
			$(this).css({
				"background-color":"#f75454"
			})
		}
		$(this).find("span").stop();
		$(this).find("span").animate({
			"top":"-49px"
		},300)
	}).mouseout(function(){
			$(this).find("span").animate({
				"top":0
			},300,function(){
					$(this).parent("a").css("background","none");
					$(this).stop();
				})
		})
})
//banner切换
$(function(){
	var index=0;
	//自动切换
	var timer=setInterval(function(){
		index++;
		if(index==3){
			index=0;
		}
		$(".banner .ban_pic").find("li").eq(index).show().siblings().hide();
		$(".banner .ban_btn").find("li").eq(index).addClass("sel").siblings().removeClass("sel");
	},2000)
		//鼠标移动上去切换
	$(".banner .ban_btn li").hover(function(){
		index=$(this).index();
		$(".banner .ban_pic").find("li").eq(index).show().siblings().hide();
		$(this).addClass("sel").siblings().removeClass("sel");
	})
})
//选项卡切换
$(function(){
	$(".course .c_left .c_nav").find("li").hover(function(){
		$(this).addClass("sel").siblings().removeClass("sel");
		var index=$(this).index();
		$(".course .c_left .c_all").find("ul").eq(index).show().siblings().hide();
	})
})