$(function(){
	$("#main .content").eq(0).show().siblings().hide();
	$('.header-tap-ul li').click(function(){
		console.log(1)
		$(this).addClass("active").siblings().removeClass("active");
		var index =$(this).index();
		var flag 
		if (index==0||index==1 ) {
			flag =true
			if (flag) {
			$("#bg .earth").addClass('animate').removeClass('animate')
				flag = false
			}else{
				$("#bg .earth").removeClass('animate')
				flag =true
			}
		}
		
		$("#main .content").eq(index).show().siblings().hide();
	})
})