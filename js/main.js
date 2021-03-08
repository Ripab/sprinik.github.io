(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.menu-area').meanmenu();
    });
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
	// END PRELOADER JS CODE
	
	
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.main-menu').addClass('menu-shrink animated slideInDown');
			} else {
				$('.main-menu').removeClass('menu-shrink animated slideInUp');
			}
		});	
		
		$('.menu li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
        });
		
		$('.navbar-nav>li>a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
        });



		(function() {

			var parent = document.querySelector(".range-slider");
			if(!parent) return;
		  
			var
			  rangeS = parent.querySelectorAll("input[type=range]"),
			  numberS = parent.querySelectorAll("input[type=number]");
		  
			rangeS.forEach(function(el) {
			  el.oninput = function() {
				var slide1 = parseFloat(rangeS[0].value),
					  slide2 = parseFloat(rangeS[1].value);
		  
				if (slide1 > slide2) {
						  [slide1, slide2] = [slide2, slide1];
				  // var tmp = slide2;
				  // slide2 = slide1;
				  // slide1 = tmp;
				}
		  
				numberS[0].value = slide1;
				numberS[1].value = slide2;
			  }
			});
		  
			numberS.forEach(function(el) {
			  el.oninput = function() {
					  var number1 = parseFloat(numberS[0].value),
							  number2 = parseFloat(numberS[1].value);
					  
				if (number1 > number2) {
				  var tmp = number1;
				  numberS[0].value = number2;
				  numberS[1].value = tmp;
				}
		  
				rangeS[0].value = number1;
				rangeS[1].value = number2;
		  
			  }
			});
		  
		  })();


		
		 

		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="icofont-swoosh-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});


    
}(jQuery));
