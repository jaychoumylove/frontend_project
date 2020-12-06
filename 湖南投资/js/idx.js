/**
 * Created by Administrator on 2017/1/24.
 */
<!--微信鼠标指入-->
$(document).ready(function(){


$(".wx").mouseenter(function(){
    $('.ew').show("normal")
});
$(".wx").mouseleave(function(){
    $('.ew').hide("normal")
});
//选项卡
    jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:false});

    jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,scroll:1,vis:1,easing:"swing"});
<!--上方下拉框-->
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
//内容左
    $(" .idx-h5-la a").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    })
//内容右
    $(" .idx-h5-rb a").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    })

    jQuery(".slideGroup").slide({titCell:".parHd li",mainCell:".parBd",trigger:"click"});

//动态发布右移
    $(".zx_list").hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    })
});



