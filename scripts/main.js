$(document).ready(function() {
		// Xo menu con o man hinh di dong
		if($(window).width()< 576){
			console.log('111');
			$('.topheader ul.nav.navbar-nav li.nav-item ul').slideUp();
			$('.topheader ul.nav.navbar-nav li.nav-item').bind('touchstart',function(){
				$(this).children('ul').slideToggle(300);
			})
		}
		$('.menu_list li b').on('click',function(){
			$('.menu_list li b').removeClass('active');
			$(this).addClass('active');
			var chiso = $(this).parent().index()+1;
			console.log(chiso);
			$('.menu_product li .product_item').removeClass('appear');
			$('.menu_product li:nth-child(' + chiso +") .product_item").addClass('appear');
		})
	new WOW().init();
})

