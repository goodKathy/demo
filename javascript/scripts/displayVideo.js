$(function(){
var page=1;
//每版放四张视频图片
var i=4;
$("span.next").click(function(){
	var $parent=$(this).parents("div.show");
	var $show=$parent.find("div.content_list");
	var $content=$parent.find("div.content");
	var width=$content.width();
	//总的视频图片数
	var len=$show.find("li").length;
	//总版面数，向上取整
	var page_count=Math.ceil(len/i);
	//判断“视频展示区域”是否正处于动画
	if(!$show.is(":animated")){
	//通过改变left值每次换一个版面；当到达最后一个版面时，点“下一页”跳转到第1个版面
	if(page==page_count){
		$show.animate({left: "0px"},"slow");
		page=1;
	}else{
		$show.animate({left: "-="+width},"slow");
        page++;
	}
	$parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
    }
});
$("span.prev").click(function(){
	var $parent=$(this).parents("div.show");
	var $show=$parent.find("div.content_list");
	var $content=$parent.find("div.content");
	var width=$content.width();
	var len=$show.find("li").length;
	var page_count=Math.ceil(len/i);
	if(!$show.is(":animated")){
		//当到达第1个版面时，点“上一页”跳转到最后一个版面
		if(page==1){
			$show.animate({left:"-="+width*(page_count-1)},"slow");
			page=page_count;
		}else{
			$show.animate({left:"+="+width},"slow");
			page--;
		}
		$parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
	}
});
})