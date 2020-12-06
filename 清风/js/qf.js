// JavaScript Document

/*公共文件*/
$(function(){
	$.get('head.html',function(data){
		$('#head').before(data);
	});
	$.get('foot.html',function(data){
		$('#foot').after(data);
	});
})

//返回顶部 
//检测页面加载事件，意思是等网页加载完后，再执行这里的代码
		var scrollTopObj = document.getElementById('floatPanel');
		//检测页面滚动事件
		window.onscroll = function(){		
			//Firefox只能通过document.documentElement.scrollTop获取滚动顶部距离
			var top = document.documentElement.scrollTop||document.body.scrollTop;
			if(top>300){
				scrollTopObj.style.display = 'block';
			}else{
				scrollTopObj.style.display = 'none';
			}
		}
		scrollTopObj.onclick = function(){
			$("html,body").animate({scrollTop :0}, 300); //第4章BOM中window对象的方法，翻书看看
		}

//视频 start
/*选项卡切换*/
$(function(){
    function tabs(tabTit,on,tabCon){
        $(tabTit).children().click(function(){
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
           	$(tabCon).children().eq(index).show().siblings().hide();
    	});
	};
    tabs(".video_ctop ul","active",".video_cbtm");
});
/*选项卡切换end*/

//杂志 书画院 start
function Hcount(i){
	$(i).each(function(){
		var marginH=$(this).height()/2;
		$(this).css("marginTop","-"+marginH+"px");
	})
}
  Hcount(".zzsy_box .zzsy_div p");
  Hcount(".case_box .case_div p");


$(".zzsy_box .zzsy_div").each(function(){
	$(this).hover(function(){
		$(this).find("span.f_more02s1,span.f_more02s2").stop().animate({"height":"50%"});
		$(this).find("p").show();
	},function(){
		$(this).find("span.f_more02s1,span.f_more02s2").stop().animate({"height":"0"});
		$(this).find("p").hide();
	})
})

//案件聚焦 start
$(".case_box .case_div").each(function(){
	$(this).hover(function(){
		$(this).find("p").show();
		$(this).find("span.f_more03s1,span.f_more03s2").stop().animate({"height":"50%","width":"50%"});
		$(this).find("span.f_more03s3,span.f_more03s4").stop().animate({"height":"50%","width":"50%"});
	},function(){
		$(this).find("p").hide();
		$(this).find("span.f_more03s1,span.f_more03s2").stop().animate({"height":"0","width":"0"});
		$(this).find("span.f_more03s3,span.f_more03s4").stop().animate({"height":"0","width":"0"});
	})
})

//廉洁时评
$('.ljsp_img').hover(function(){
	$(this).find('p').stop().animate({'bottom':'0'},500);
},function(){
	$(this).find('p').stop().animate({'bottom':'-100px'},500);
});

