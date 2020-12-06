function banner(){	
	var bn_id = 0;
	var bn_id2= 1;
	var speed33=3000;
	var qhjg = 1;
    var MyMar33;
	$("#banner .d1").hide();
	$("#banner .d1").eq(0).fadeIn("slow");
	if($("#banner .d1").length>1)
	{
		$("#banner_id li").eq(0).addClass("nuw");
		function Marquee33(){
			bn_id2 = bn_id+1;
			if(bn_id2>$("#banner .d1").length-1)
			{
				bn_id2 = 0;
			}
			$("#banner .d1").eq(bn_id).css("z-index","2");
			$("#banner .d1").eq(bn_id2).css("z-index","1");
			$("#banner .d1").eq(bn_id2).show();
			$("#banner .d1").eq(bn_id).fadeOut("slow");
			$("#banner_id li").removeClass("nuw");
			$("#banner_id li").eq(bn_id2).addClass("nuw");
			bn_id=bn_id2;
		};
	
		MyMar33=setInterval(Marquee33,speed33);
		
		$("#banner_id li").click(function(){
			var bn_id3 = $("#banner_id li").index(this);
			if(bn_id3!=bn_id&&qhjg==1)
			{
				qhjg = 0;
				$("#banner .d1").eq(bn_id).css("z-index","2");
				$("#banner .d1").eq(bn_id3).css("z-index","1");
				$("#banner .d1").eq(bn_id3).show();
				$("#banner .d1").eq(bn_id).fadeOut("slow",function(){qhjg = 1;});
				$("#banner_id li").removeClass("nuw");
				$("#banner_id li").eq(bn_id3).addClass("nuw");
				bn_id=bn_id3;
			}
		})
		$("#banner_id").hover(
			function(){
				clearInterval(MyMar33);
			}
			,
			function(){
				MyMar33=setInterval(Marquee33,speed33);
			}
		)	
	}
	else
	{
		$("#banner_id").hide();
	}
}

var n=count=0;
      var t=null;
      $(function(){
        $("#slide >#slide1_d:gt(0)").hide();
        count=$("#slide >#slide1_d").length;
        autoPlay();
        $("#slide").hover(function(){
          clearInterval(t);
        },function(){
          autoPlay();
        });
        $("#slide_p >span").each(function(index){
          $(this).mouseover(function(){
            play(index);
          });
        });
      });     
      function play(num){
        n=num;
        $("#slide >#slide1_d").fadeOut(500);
        $("#slide >#slide1_d").eq(n).fadeIn(1000);
        $("#slide_p >span").removeClass('cur');
        $("#slide_p >span").eq(n).addClass('cur');
      }
      function autoPlay(){
        t=setInterval(function(){
          n++;
          if(n>=count) n=0;
          play(n);
        },5000);
      }