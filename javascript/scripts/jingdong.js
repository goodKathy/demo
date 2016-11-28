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

//点击浮动搜索框，提示文字消失
$(function(){
	var a=$("#floatsearch .floatbox input");
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

//右侧信息栏公告tab切换 
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

//随页面内容滚动自动选中左侧对应浮动导航条menu 
$(function(){
	//点击左侧浮动导航条，变换导航样式
	$("#sidebar_l .sidebar_list li a").click(function(){
	     $(this).addClass("active").parents().siblings().find("a").removeClass("active");
	})
	//随页面内容滚动自动选中左侧对应浮动导航条menu
	$(window).scroll(function(){
		var link=$("#sidebar_l .sidebar_list li a");
		var top=$(document).scrollTop()+50;
		var top1=$("#anchor1").offset().top;
		var top2=$("#anchor2").offset().top;
		var top3=$("#anchor3").offset().top;
		var top4=$("#anchor4").offset().top;
		var top5=$("#anchor5").offset().top;
		var top6=$("#anchor6").offset().top;
		var top7=$("#anchor7").offset().top;
		var top8=$("#anchor8").offset().top;
		var top9=$("#anchor9").offset().top;
		var top10=$("#anchor10").offset().top;
		if(top>=top1&&top<=top2){
            link.removeClass("active").eq(0).addClass("active");
		}else if(top>=top2&&top<=top3){
			link.removeClass("active").eq(1).addClass("active");
		}else if(top>=top3&&top<=top4){
			link.removeClass("active").eq(2).addClass("active");
		}else if(top>=top4&&top<=top5){
			link.removeClass("active").eq(3).addClass("active");
		}else if(top>=top5&&top<=top6){
			link.removeClass("active").eq(4).addClass("active");
		}else if(top>=top6&&top<=top7){
			link.removeClass("active").eq(5).addClass("active");
		}else if(top>=top7&&top<=top8){
			link.removeClass("active").eq(6).addClass("active");
		}else if(top>=top8&&top<=top9){
			link.removeClass("active").eq(7).addClass("active");
		}else if(top>=top9&&top<=top10){
			link.removeClass("active").eq(8).addClass("active");
		}else if(top>=top10){
			link.removeClass("active").eq(9).addClass("active");
		}
	});
    //点击左侧导航条，页面滑动到对应内容
    $("#link1").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor1").offset().top},500);

	})
	$("#link2").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor2").offset().top},500);

	})
	$("#link3").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor3").offset().top},500);

	})
	$("#link4").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor4").offset().top},500);

	})
	$("#link5").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor5").offset().top},500);

	})
	$("#link6").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor6").offset().top},500);

	})
	$("#link7").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor7").offset().top},500);

	})
	$("#link8").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor8").offset().top},500);

	})
	$("#link9").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor9").offset().top},500);

	})
	$("#link10").click(function(){
	   $("html,body").animate({scrollTop:$("#anchor10").offset().top},500);

	})	
});

//倒计时 ->待完成
$(function(){
	var h=20;
	var m=59;
	var s=59;
	setInterval(function(){
        if(s<10){
        	$("#second").html("0"+s);
        }else{
        	$("#second").html(s);
        }
        s--;
        if(s<0){
        	s=59;
        	m--;
        }
        if(m<10){
        	$("#minute").html("0"+m);
        }else{
        	$("#minute").html(m);
        }
        if(m<0){
        	m=59;
        	h--;
        }
        if(h<10){
        	$("#hour").html("0"+h);
        }else{
        	$("#hour").html(h);
        }
        if(h<0){
        	h=21;
        }
	},1000)
})

//小图标左右滑动 ->待完成
$(function(){
	$(".dress").hover(function(){
		$(".dress .dress_foot .toLeft").show();
		$(".dress .dress_foot .toRight").show();
		var rolllist=$(".dress .dress_foot .foot_container ul");
		$(".dress .dress_foot .toLeft").click(function(){
			if(rolllist.position().left==0){
				rolllist.css("left","-570px");
			}else{
				rolllist.css("left",0);
			}
		})
		$(".dress .dress_foot .toRight").click(function(){
			if(rolllist.position().left==0){
				rolllist.css("left","-570px");
			}else{
				rolllist.css("left",0);
			}
		})
	},function(){
		$(".dress .dress_foot .toLeft").hide();
		$(".dress .dress_foot .toRight").hide();
	})
})