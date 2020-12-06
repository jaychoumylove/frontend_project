// JavaScript Document
/*水果减肥 start*/
$(".my_matpall").toggle(function(){
	$(".my_matpcont").css({height:"auto"});
	$(this).html("点此收缩全文>>");
},function(){
	$(".my_matpcont").css({height:"90px"});
	$(this).html("点击查看全文>>");
})	
/*水果减肥 end*/

/*会员中心 start*/
$(".floor_cont .floor_box").hover(function(){
	$(this).find(".floor_buy").animate({"bottom":"1px"});
	$(this).find("p").animate({"marginTop":"5px"});

},function(){
	$(this).find(".floor_buy").animate({"bottom":"-30px"});
	$(this).find("p").animate({"marginTop":"30px"});
})
/*会员中心 end*/


/*企业资讯 start*/
 var titH=$(".tit_pos").height();
 $(".tit_slide").toggle(function(){
	  $(this).find("p span").html("展开");
	  $(this).find("p i").addClass("tit_i");
	  $(".tit_pos").animate({"height":"245px"},1000);
 },function(){
	  $(this).find("p span").html("收起");
	  $(this).find("p i").removeClass("tit_i");
	  $(".tit_pos").animate({"height":titH+"px"},1000);
 })
/*企业资讯 end*/

/*弹窗关闭 start*/
$(".floor_close").click(function(){
	 $(".floor_mask").hide();
})
/*弹窗关闭 end*/

