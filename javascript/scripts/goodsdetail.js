//搜索框文字效果
$(function(){
	$("#inputSearch").focus(function(){
		$(this).addClass("focus");
		if($(this).val()==this.defaultValue){
		    $(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if($(this).val()==""){
		    $(this).val(this.defaultValue);
		}
	}).keyup(function(e){
		if(e.which==13){
			alert("回车提交表单！");
		}
	})
})

//切换皮肤
$(function(){
	var $li=$("#skin li");
	$li.click(function(){
		switchSkin(this.id);
	});
	var cookie_skin=$.cookie("MyCssSkin");
	if(cookie_skin){
		switchSkin(cookie_skin);
	}
});
function switchSkin(skinName){
	$("#"+skinName).addClass("selected")
	               .siblings().removeClass("selected");
	$("#cssfile").attr("href","styles/skin/"+skinName+".css");//设置不同皮肤
	$.cookie("MyCssSkin",skinName,{path:'/',expires:10});
}

//导航样式
$(function(){
	$(".nav li").hover(function(){
		$(this).find(".jnNav").show();
	},function(){
		$(this).find(".jnNav").hide();
	});
})

//左侧商品分类热销效果
$(function(){
	$(".jnCatainfo .promoted").append("<span class='hot'></span>");
})

//产品图片放大镜效果(使用了jqzoom插件)
$(function(){
	$('.jqzoom').jqzoom({
		zoomType: 'standard',
		lens:true,
		preloadImages: false,
		alwaysOn:false,
		zoomWidth: 340,
		zoomHeight: 340,
		xOffset:10,
		yOffset:0,
		position:'right'
    });
});

//产品图片遮罩层效果(使用thickbox插件，引入相应的jquery和css文件)

//单击产品小图片切换大图
$(function(){
	$("jnProitem ul.imgList li a").bind("click",function(){
		var imgSrc=$(this).find("img").attr("src");
		var i=imgSrc.lastIndexOf(".");
		var unit=imgSrc.substring(i);
		imgSrc=imgSrc.substring(0,i);
		$("#thickImg").attr("href",imgSrc+"_big"+unit);
	})
})

//产品属性选项卡切换效果
$(function(){
	var $div_li=$("div.tab_menu ul li");
	$div_li.click(function(){
		$(this).addClass("selected")
		       .siblings().removeClass("selected");
		var index=$div_li.index(this);
		$("div.tab_box > div")
			.eq(index).show()
			.siblings().hide();
	}).hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
})

//右侧产品颜色切换
$(function(){
	$(".color_change ul li img").click(function(){
		$(this).addClass("hover")
		       .parent().siblings().find("img").removeClass("hover");
		var imgSrc=$(this).attr("src");
		var i=imgSrc.lastIndexOf(".");
		var unit=imgSrc.substring(i);
		imgSrc=imgSrc.substring(0,i);
		var imgSrc_small=imgSrc+"_one_small"+unit;
		var imgSrc_big=imgSrc+"_one_big"+unit;
		$("#bigImg").attr("src",imgSrc_small);
		$("#thickImg").attr("href",imgSrc_big);
		var alt=$(this).attr("alt");
		$(".color_change strong").text(alt);
		var newImgSrc=imgSrc.replace("images/shop/pro_img/","");
		$("#jnProitem .imgList li").hide();
		$("#jnProitem .imgList").find(".imgList_"+newImgSrc).show();
		$("#jnProitem .imgList").find(".imgList_"+newImgSrc)
		                        .eq(0).find("a").click();
	});
});

//右侧产品尺寸切换
$(function(){
	$(".pro_size ul li").click(function(){
		$(this).addClass("cur")
		       .siblings().removeClass("cur");
		var alt=$(this).text();
		$(".pro_size strong").text(alt);
	})
})

//右侧产品数量和价格联动
$(function(){
	$("#num_sort").change(function(){
		var num=$(this).val();
		var price=$(".tbDetailPrice strong").text();
		$(".pro_price strong").text(num*price);
	}).change();
})

//右侧给产品评分效果
$(function(){
	$("ul.rating li a").click(function(){
		var title=$(this).attr("title");
		alert("您给此商品的评分是："+title);
		var newClass=$(this).parent().attr("class");
		$(this).parent().parent().removeClass()
		                         .addClass("rating "+newClass+"star");
		return false;
	})
})

//右侧放入购物车(利用SimpleModal显示弹出框)
$(function(){
    var $product = $(".jnProDetail");
	$("#cart a").click(function (e) {        
		var pro_name = $product.find("h4:first").text();
		var pro_size = $product.find(".pro_size strong").text();
		var pro_color =  $(".color_change strong").text();
		var pro_num = $product.find("#num_sort").val();
	    var pro_price = $product.find(".pro_price strong").text();
		var dialog = "感谢您的购买！<div style='font-size:12px;font-weight:400;'>您购买的产品是："+pro_name+"；"+
				"尺寸是："+pro_size+"；"+
				"颜色是："+pro_color+"；"+
				"数量是："+pro_num+"；"+
				"总价是："+pro_price +"元。</div>";
		$("#jnDialogContent").html(dialog);
		$('#basic-dialog-ok').modal();
		return false;//避免页面跳转
	});
})