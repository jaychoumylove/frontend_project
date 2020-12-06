/*此段js  适配手机端最大800px、设计图为640px*/
/*按照宽为640px的设计图，样式里面比例为 1rem=200px*/
$(window).resize(function() {
	var width = document.documentElement.clientWidth/3.2;
	if(document.documentElement.clientWidth<=800){
	document.getElementsByTagName('html')[0].style.fontSize = width + 'px';
	}else{
	document.getElementsByTagName('html')[0].style.fontSize = 250 + 'px';
	}
}).resize();

