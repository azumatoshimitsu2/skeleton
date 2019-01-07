import ua from './modules/ua.js';

var _ua = ua();

(function($) {
	$(document).ready(function () {

		if(!_ua.Mobile){
		    $('a[href^="tel:"]').addClass('reset-a-style').on('click', function(e) {
		        e.preventDefault();
		    });
		}
		if(_ua.Mobile || _ua.Tablet){
			$('.hover').removeClass('hover');
		}

		if($(window).width() > 750) {
			$('meta[name="viewport"]').attr('content', 'width=1360');
		}
		
		$('a:not(".no-scroll")').click( function (e) {
			let href = $(this).attr('href');
			if(href.match(/^#/) && $(href).length > 0) {
				e.preventDefault();
				$('html, body').animate({ scrollTop: $(href).offset().top }, 'fast');
			}
		});

		$('.button--toggle').click(function(e) {
			e.preventDefault();
			$(".button--toggle").toggleClass("button--toggle--open");
			$(".nav-main").fadeToggle(250);
		});
	});
})(jQuery);

