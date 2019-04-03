$(function(){
	$('.header-tap-ul li').click(function(){
		// console.log(1)
		$(this).addClass("active").siblings().removeClass("active");
		var index =$(this).index();
		$("#main div").eq(index).show().siblings().hide();
	})
})