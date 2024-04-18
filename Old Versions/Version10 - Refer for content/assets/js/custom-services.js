(function($) {
	'use strict';
	// Navbar Menu JS
	$('.scroll-btn, .navbar .navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 65
		}, 1000);
		e.preventDefault();
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	// Menu Icon JS
	$(".menu-icon").on('click', function(){
		$(".menu-icon").toggleClass("active")
	})
	$(".menu-icon").on('click', function(){
		$(".sidebar").toggleClass("active")
	})
	
	// Preloader JS
	$(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	};
	
	$(function() {
		var header = $(".header");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
			if (scroll >= 100) {
				header.addClass("scrolled");
				$("body").addClass('set');
			} else {
				header.removeClass("scrolled");
				$("body").removeClass('set');
			}
		});
    });
})(jQuery);
