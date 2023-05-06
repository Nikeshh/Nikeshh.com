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
		setTimeout(function() {
			$('.preloader').fadeOut();
		}, 1000);
	});	

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	};

	$('.slider').owlCarousel({
		loop:true,
		items:1,
		margin:0,
		nav:true,
		autoplay:true,
		center:true,
		stagePadding:0,
		nav:false
	});
	

	$('.projects').owlCarousel({
		loop:true,
		margin:40,
		autoplay:false,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1.3
			},
			1000:{
				items:2.5
			},
			1400:{
				items:3.5
			}
		}
	});

	$('.guided').owlCarousel({
		loop:true,
		margin:40,
		autoplay:false,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			},
			1400:{
				items:1
			}
		}
	});
	
	$(function() {
	var header = $(".header");
  
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 73) {
			header.addClass("scrolled");
		} else {
			header.removeClass("scrolled");
		}
	});
});	
	
})(jQuery);
