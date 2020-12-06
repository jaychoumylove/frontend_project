$(function(){
	$.get('head.html',function(data){
		$('#head').before(data);
	});
	$.get('foot.html',function(data){
		$('#foot').after(data);
	});
	
	//选项卡
	function tabs(tabTit,on,tabCon,event){
        $(tabTit).children().on(event,function(){
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
           	$(tabCon).children().eq(index).show().siblings().hide();
    	});
	};
	
	
})

