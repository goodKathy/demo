//替换图片函数
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
	    var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
	    var description=document.getElementById("description");
	    if(description.firstChild.nodeType==3){
	    description.firstChild.nodeValue=text;
	    }
    }
    return true;
}

 //addLoadEvent函数，可在页面加载完毕时执行多个函数
 function addLoadEvent(func){
 	var oldonload=window.onload;
 	if(typeof window.onload!="function"){
 		window.onload=func;
 	}else{
 		window.onload=function(){
 			oldonload();
 			func();
 		}
 	}
 }
//分离JavaScript,最优版本
function prepareGallery(){
 	if(!document.getElementsByTagName||!document.getElementById) return false;
 	if(!document.getElementById("imagegallery")) return false;
 	var gallery=document.getElementById("imagegallery");
 	var links=document.getElementsByTagName("a");
 	for(var i=0;i<links.length;i++){
 		links[i].onclick=function(){
 			return showPic(this)?false:true;
 		}
 	}
}

addLoadEvent(prepareGallery);

