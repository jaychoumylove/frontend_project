
/*zt start*/
$('.select').on('click', '.placeholder', function(e) {
	var parent = $(this).closest('.select');
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.select.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
	}
	e.stopPropagation();
}).on('click', 'ul>li', function() {
	var parent = $(this).closest('.select');
	parent.removeClass('is-open').find('.placeholder').text($(this).text());
});

$('body').on('click', function() {
	$('.select.is-open').removeClass('is-open');
});

/*个人设置-个人资料 03-08*/
$(window).load(function(){
  $(".gz-h6h textarea").val("请输入详细地址")
})


/*修改头像 03-08*/
  $("#ft").change(function () {
      var file = this.files[0];
      if (this.files && file) {
          var hz = file.name.substring(file.name.lastIndexOf(".") + 1).toLowerCase();
          //alert(file.href);
          if (hz != "jpg" && hz != "png" && hz != "gif") {
              $(this).val("");
              if ($(this).val()) //处理兼容性,防止value因格式错误文本未清空（IE）.
              {
                  var f = document.getElementById("ft");
                  var form = document.createElement("form");
                  var ref = f.nextSibling;
                  var p = f.parentNode;
                  form.appendChild(f);
                  form.reset();
                  p.insertBefore(f, ref);
              }
              //$("#m").attr("src", "")
              alert("图片格式错误！");
          } else {
              var reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function (e) {
                  $("#ms").attr("src", e.target.result);
              }
          }
      }
  })
  

/*zt end*/



/*预订详情 选项卡*/
function tabs(tabTit,on,tabCon){
    $(tabTit).children().click(function(){
        $(this).addClass(on).siblings().removeClass(on);
        var index = $(tabTit).children().index(this);
       	$(tabCon).children().eq(index).show().siblings().hide();
       	$(tabCon).children().eq(index).addClass('act').siblings().removeClass('act');
	});
};
tabs(".rz_yxxq_sec4_nav","act",".rz_yxxq_sec4_box");
tabs(".rz_shaixuan_left","act",".rz_shaixuan_right");
tabs(".f_tit04","f_tit04link",".yudbox");  /*首页预订类型*/

/*日期弹出*/
$('.rz_yxxq_date').click(function(){
	$('.mask').show();
	$('.account-box').show();
});
$('.mask').click(function(){
	$('.mask').hide();
	$('.account-box').hide();
});

/*酒店导航条件滑出*/
$('.rz_jd_list_body li').click(function(){
	$(this).toggleClass('act');
	$(this).find('.rz_jd_list_p').slideToggle();
	$(this).siblings().find('.rz_jd_list_p').slideUp();
});

/*筛选条件   单选*/
$('.rz_shaixuan_ul li').click(function(){
	$(this).addClass('act').siblings().removeClass('act');
});

/*筛选条件   复选*/
$('.rz_shaixuan_ul2 li').click(function(){
	$(this).toggleClass('act');
});

/*重置所有条件*/
$('#reset_sx').click(function(){
	$('.rz_shaixuan_box li').removeClass('act')
});
$('.sx_sub_btn').click(function(){
	var str='';
	$('.rz_shaixuan_ul li.act').each(function(){
		 str += $(this).text()+'/';
	});
	var str2 = str.substring(0,str.length-1);
	$('.yudivi02sx').text(str2);
	$('.rz_shaixuan_wrap.act').removeClass('act')
});



/*lyh个人设置---手机修改*/
$(function(){
  $(".trip_main_a li").click(function(){
    $(this).addClass("background").siblings().removeClass("background")
  })
})


/*lyh新增地址*/
  $(".adddiv .address .a1").click(function(){
      $(this).find("span").addClass("a1_span");
      $(this).parents(".address").siblings(".address").find(".a1 span").removeClass("a1_span");
      $(this).find("i").css("visibility","visible")
    })
  $(".del").click(function(){
    if(confirm("确定要删除此收货地址吗？"))
    {
      $(this).parents(".address").remove();
    }  
  })
  
  
  /*lyh省市区三级联动*/
  $("#city").click(function (e) {
	SelCity(this,e);
    console.log("inout",$(this).val(),new Date())
  });


/*订单填写 start*/
$(".hotr05").click(function(){
	$(this).toggleClass("hotr055");
	
})
function Addmsg(a,b){
	$(a).click(function(){
		$(".mask").show();
		$(b).animate({"bottom":"0"});
	})
	$(".mask").click(function(){
		$(this).hide();
		$(b).animate({"bottom":"-1.8rem"});
	})
	$(b).click(function(){
		$(".mask").hide();
		$(b).animate({"bottom":"-1.8rem"});
	})
};
Addmsg(".hotr01",".shadow01");
Addmsg(".hotr02",".shadow02");
Addmsg(".hotr04 i",".shadow03");
Addmsg(".yudate02p1",".shadow04");  /*首页预订类型*/
Addmsg(".yudate02p2",".shadow05");  /*首页预订类型*/

function Addhtml(a,c){
	$(c).find("ul li").click(function(){
		var bHtml=$(this).html();
		$(this).css("color","#94c417").siblings("li").css("color","#333");
		$(a).find("span").html(bHtml);
	})
};
Addhtml(".hotr01",".shadow01");
Addhtml(".hotr02",".shadow02");

$(".shadow03").find("ul li").click(function(){
	var bHtml=$(this).find("i").html();
	$(this).css("color","#94c417").siblings("li").css("color","#333");
	$(".hotr04").find("font").html(bHtml);
})

/*订单填写 end*/

/*结算 start*/
$(".hotdiv04 ul li").click(function(){
  $(this).addClass("hotdivli").siblings("li").removeClass("hotdivli");
})
/*结算 end*/

/*菜单 start*/
$(function(){
	/*右侧菜单JS*/
//	$('#menu').click(function(){
//		$('.left_content').toggleClass('menu_open');
//		$('.right_content').toggleClass('right_open')
//	});
	
	/*右侧菜单中的子菜单展开*/
	$('.right_content li').live('click',function(){
		if(!$(this).is('.rt_nav_li_op')){
			$(this).addClass('rt_nav_li_op');
			$(this).find('.rt_nav_li_op_span').stop(true,false).slideDown(300);
			$(this).siblings().find('.rt_nav_li_op_span').stop(true,false).slideUp(300);
			$(this).siblings().removeClass('rt_nav_li_op');
		}else{
			$(this).find('.rt_nav_li_op_span').stop(true,false).slideUp(300);
			$(this).removeClass('rt_nav_li_op');
			
		}
	});
});
/*菜单 end*/

/*弹窗 start*/
$(".maskbg,.close_btn").click(function(){
  $(".maskbg,.comm_div").hide();
})
/*弹窗 end*/

/*公共菜单 start*/
$(".idx_lspan").toggle(function(){
   $(".f_tit01,.trip_main,.hotdiv05").animate({"left":"-70%"});
   $(".right_content").animate({"right":"-30%"});
   $(this).addClass("idx_lspan01");
},function(){
   $(".f_tit01,.trip_main,.hotdiv05").animate({"left":"0"});
   $(".right_content").animate({"right":"-100%"});
   $(this).removeClass("idx_lspan01");
})
/*公共菜单 end*/

/*创业中心轮播 start*/
var idxbSwiper = new Swiper('.idx_ban.swiper-container',{
		    effect :'coverflow',
			pagination : '.swiper-pagination',
			autoplay : 4000,
			autoplayDisableOnInteraction : false,
			paginationClickable :true,
		})
/*创业中心轮播 end*/

/*滑动导航 start*/
// var mySwiper = new Swiper('.g2_ctit.swiper-container',{
//			width :90,
//			spaceBetween:10,
//			vis:3
//		})
 $(document).ready(function(e) {
     var mySwiper = new Swiper ('.g2_ctit.swiper-container', {
		loop: false,
		slidesPerView : 4
	});
	//mySwiper4.slideTo(3);
	$(function(){
		var inde = 0;
		$('.g2_ctit .swiper-slide').each(function() {
			if($(this).is('.g2_ctit_link')){
				inde = $(this).index();
				mySwiper.slideTo(inde);
				
			}
		});	
	})
	
});
/*滑动导航 end*/
/*加载更多 start*/
/*加载更多*/
function loadmove(i){
	var starty;
	var endy;
	document.getElementById(i).addEventListener("touchstart",function(e)
	  {
	      starty=e.touches[0].pageY;
	  })
	 document.getElementById(i).addEventListener("touchend",function(e)
	 {
	     endy=e.changedTouches[0].pageY;
	 });
	document.getElementById(i).addEventListener("touchmove",function(e)
	  {
	    yidong();
	 })
	function yidong(){
		 if(starty>endy){
		 	document.getElementById(i).setAttribute("class", "more moreload"); 
		 }else{
		 	document.getElementById(i).setAttribute("class", "more"); 
		 }
	}
}

/*加载更多 end*/

/*回到顶部 start*/
window.onscroll = function(){		
	//Firefox只能通过document.documentElement.scrollTop获取滚动顶部距离
	var top=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	if(top>1){
		$(".idx_top").css("display","block");
	}else{
		$(".idx_top").css("display","none");
	}
}
$(".idx_top").click(function(){
	$("html,body").animate({scrollTop :0}, 500);
})
/*回到顶部 end*/

/*调用内页公共菜单 start*/
$(function(){
	$.get('menu.html',function(data){
		$('#menu').after(data);
	});
})
/*调用内页公共菜单 end*/


/*2017-03-08rz*/
$(document).ready(function(){
	
/*酒店附近选择JS*/
$('.date_right input,.yudivi01sx').click(function(){
	$('.rz_hot_near').addClass('act')
});
$('.rz_hot_near_close').click(function(){
	$('.rz_hot_near').removeClass('act')
});
$('.rz_hot_near dd span').click(function(){
	var near_addr = $(this).text();
	$('.date_right input').val(near_addr);
	$('.yudiv.act .yudivi01sx').text(near_addr);
	$('.rz_hot_near').removeClass('act')
});

/*筛选模块JS*/
$('#sx_btn,.yudivi02sx').click(function(){
	$('.rz_shaixuan_wrap').addClass('act')
});
$('#sx_back').click(function(){
	$('.rz_shaixuan_wrap').removeClass('act')
});




/*城市选择选择*/
$('body').on('click','.city-picker li',function(){
	var _thistext = $(this).text();
	$('.rz_city').find('em').text(_thistext);
	$('.yudiv.act .yudivi_city').find('font').text(_thistext);
});


/*日期选择*/
var night_cont = "";
var jd_data ="";
var jd_data2 =""; 
$('.date_left,.yudate_p').click(function(){
	var _this = $(this);
	$('.account-box').show();
	$('.mask').show();
	_this.addClass('act').siblings().removeClass('act');
});
$('.yudate_p').click(function(){
	$('.yudate_p').removeClass('act')
	$(this).addClass('act');
});
$('.f-tbody').on('click','.f-number',function(){
	jd_data = $('.f-month').text();
	jd_data +='-';
	jd_data += $(this).find('.f-day').text();
	jd_data2 = $('.f-month').text()+'月';
	var datei  =$(this).index()%7;
	switch (datei){
		case 0:
			$('.yudate_p.act').find('span').text('周日');
			break;
		case 1:
			$('.yudate_p.act').find('span').text('周一');
			break;
		case 2:
			$('.yudate_p.act').find('span').text('周二');
			break;
		case 3:
			$('.yudate_p.act').find('span').text('周三');
			break;
		case 4:
			$('.yudate_p.act').find('span').text('周四');
			break;
		case 5:
			$('.yudate_p.act').find('span').text('周五');
			break;
		case 6:
			$('.yudate_p.act').find('span').text('周六');
			break;
		default:
			break;
	} 
	var ye = $('.f-year').text();
	var da = $(this).find('.f-day');
	jd_data2 += $(this).find('.f-day').text()+'日';
	$('.date_left.act').find('span').text(jd_data);
	$('.yudate_p.act').find('font').text(jd_data2);
	$('.account-box').hide();
	$('.mask').hide();
	var startday = $('.start_date').text();
	var endday = $('.end_date').text();
	startday = $('.f-year').text()+'-' + startday;
	endday = $('.f-year').text()+'-' + endday;
	
	diy_time(CutChr(startday),CutChr(endday));
});
function CutChr(datea){
	while(/[\u4E00-\u9FA5]+/.test(datea)){
	datea=datea.replace(/[\u4E00-\u9FA5]+/,"-"); 
	var str2 = datea.substring(0,datea.length-1);
	return str2;
	}
}
var night = document.getElementById('night');
function diy_time(time1,time2){
    time1 = Date.parse(new Date(time1));
    time2 = Date.parse(new Date(time2));
    if(time1-time2 < 0){
    	night.innerHTML='共'+Math.abs(parseInt((time2 - time1)/1000/3600/24))+'晚';
    }else{
    	night.innerHTML='时间有误';
    }
}


/*搜索事件触发*/
$('.rz_seac').click(function(){
	alert('进行搜索');
});

/*获取当前日期并赋值到列表*/
var today = new Date();
var mon = today.getMonth()+1;
var tday = today.getDate();
$('.date_left span').text(mon+'-'+tday)

});

