//主导航菜单
//“切换城市”鼠标悬停效果
$(function(){
	$(".location a").hover(function(){
		$(".location_change").show();
	},function(){
		$(".location_change").hide();
	})
	$(".location_change").hover(function(){
		$(this).show();
		$(".location a").addClass("hover");
	},function(){
		$(this).hide();
		$(".location a").removeClass("hover");
	})
})
//“我的京东”鼠标悬停效果
$(function(){
	$(".mainNav li .myJDtab").hover(function(){
		$(".myJD").show();
	},function(){
		$(".myJD").hide();
	})
	$(".myJD").hover(function(){
		$(this).show();
		$(".mainNav li .myJDtab").addClass("hover");
	},function(){
		$(this).hide();
		$(".mainNav li .myJDtab").removeClass("hover");
	})
})
//”我的购物车“鼠标悬停效果
$(function(){
	$(".cart a img").hover(function(){
		$(".cart .floatcart").show();
	},function(){
		$(".cart .floatcart").hide();
	})
	$(".cart .floatcart").hover(function(){
		$(this).show();
		$(".cart a img").addClass("hover");
	},function(){
		$(this).hide();
		$(".cart a img").removeClass("hover");
	})
})

//点击搜索框，提示文字消失
$(function(){
	var a=$(".search .searchBox .searchBox_u input");
	var default_value=a.val();
	a.focus(function(){
		if(a.val()==default_value){
            a.val("");
		}
	});
    a.blur(function(){
		if(a.val()==""){
            a.val(default_value);
		}
	});
})

//左侧导航鼠标悬停效果
$(function(){
	$(".leftNav .horiz").hover(function(){
		$(".detailNav").show();
		$(this).addClass("hover");
	},function(){
		if($(".detailNav").is(":hover")){
			$(this).addClass("hover")
			       .siblings().removeClass("hover");
		}else{
			$(".detailNav").hide();
			$(this).removeClass("hover");
		}	
	})
	$(".detailNav").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
		$(".leftNav .horiz").removeClass("hover");
	})
})

//右侧信息栏公告tab切换 ->待完成
$(function(){
	var a=$(".notice .tab li a.first");
	var b=$(".notice .tab li a.last");
	var change1=$(".info .notice .content #change1");
	var change2=$(".info .notice .content #change2");
	a.mouseover(function(){
		change1.show();
		change2.hide();
	    $(this).addClass("active");
	    b.removeClass("active");
	});
	b.mouseover(function(){
		change2.show();
		change1.hide();
	    $(this).addClass("active");
	    a.removeClass("active");
	});
})


//滚动到一定高度，顶部搜索框出现并固定
$(window).scroll(function(){
	if($(document).scrollTop()>=522){
		$("#floatsearch").show();
	}else{
		$("#floatsearch").hide();
	}
})

//广告轮播效果 
$(function(){
	var index=0;
	var adTimer=null;
	var $rolls=$(".ads .bigAds .rollbar a");
	var len=$rolls.length;
	$rolls.mouseover(function(){
		index=$rolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	//滑入停止动画，滑出开始动画
	$(".bigAds").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer=setInterval(function(){
			showImg(index);
			index++;
			if(index==len){
				index=0;
			}
		},3000);
	}).trigger("mouseleave");
})
//变换图像
function showImg(index){
	var $rolllist=$(".bigAds").find("div a");
	var newhref=$rolllist.eq(index).attr("href");
	$("#imgList").attr("href",newhref)
	             .find("img").eq(index).stop(true,true).fadeIn()
	             .siblings().fadeOut();
	$rolllist.removeClass("active")
	         .eq(index).addClass("active");          
}





//左侧爱生活导航条
//滚动到一定高度，左侧爱生活导航条出现并固定
$(window).scroll(function(){
	if($(document).scrollTop()>=1588){
		$("#sidebar_l").show();
	}else{
		$("#sidebar_l").hide();
	}
})

//点击导航切换a的class  active ->待完成
//随滚动自动切换a的class  active ->待完成
//计时器 ->待完成

