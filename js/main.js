//控制二维码显示
$(function(){
	$(".banner .b_focus .b_tools .code_qq").find("i").mouseover(function(){
		$(this).next().fadeIn();
	}).mouseout(function(){
			$(this).next().fadeOut();
		});
})
//控制banner轮播
$(function(){
	//鼠标移动到小圆圈上触发事件
	var _index=0;
	$(".banner .b_focus .b_bg .b_btn").find("li").hover(function(){
		_index=$(this).index();
		$(".banner .b_focus .b_bg .b_img").find("li").eq(_index).show().siblings().hide();
		//切换背景色
		var background=$(this).attr("data-color");
		$(this).parents(".b_focus").css("background",background);
		//联动小圆圈一起动
		$(this).addClass("sel").siblings().removeClass("sel");
	})
	
	//点击前进后退按钮触发事件
	//点击下一个
	$(".next").click(function(){
		_index++;
		if(_index>4){
			_index=0
		}
		$(".banner .b_focus .b_bg .b_img").find("li").eq(_index).show().siblings().hide();
		//切换背景色
		var background=$(".banner .b_focus .b_bg .b_btn").find("li").eq(_index).attr("data-color");
		$(".b_focus").css("background",background);
		//联动小圆圈一起动
		$(".banner .b_focus .b_bg .b_btn").find("li").eq(_index).addClass("sel").siblings().removeClass("sel");
	})
	//点击上一个
	$(".pre").click(function(){
		_index--;
		if(_index<0){
			_index=4;
		}
		$(".banner .b_focus .b_bg .b_img").find("li").eq(_index).show().siblings().hide();
		//切换背景色
		var background=$(".banner .b_focus .b_bg .b_btn").find("li").eq(_index).attr("data-color");
		$(".b_focus").css("background",background);
		//联动小圆圈一起动
		$(".banner .b_focus .b_bg .b_btn").find("li").eq(_index).addClass("sel").siblings().removeClass("sel");
	})
	//定时切换
	timer=setInterval(function(){
		_index++;
		if(_index>4){
			_index=0;
		}
		$(".banner .b_focus .b_bg .b_img").find("li").eq(_index).show().siblings().hide();
		//切换背景色
		var background=$(".banner .b_focus .b_bg .b_btn").find("li").eq(_index).attr("data-color");
		$(".b_focus").css("background",background);
		//联动小圆圈一起动
		$(".banner .b_focus .b_bg .b_btn").find("li").eq(_index).addClass("sel").siblings().removeClass("sel");
	},1000)
})
//控制热播课堂滑动
$(function(){
		$(".live").find("li").hover(function(){
			$(this).addClass("l_sel").siblings().removeClass("l_sel");
			var _index = $(this).index();
			$(".h_all").find("ul").hide().eq(_index).fadeTo(300,1);
		});
})