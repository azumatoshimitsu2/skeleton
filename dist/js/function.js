$(document).ready(function () {

	var rollover = function () {
		$('img').mouseover( function () {
			var src = $(this).attr('src').replace('-off.', '-on.');
			$(this).attr('src', src);
		});

		$('img').mouseout( function () {
			var src = $(this).attr('src').replace('-on.', '-off.');
			$(this).attr('src', src);
		});
	}

	var smoothScroll = function () {
		$('a').click( function (e) {

			var href = $(this).attr('href');
			if(href.match(/^#/) && $(href).length > 0) {
				e.preventDefault();
				$('html, body').animate({ scrollTop: $(href).offset().top }, 'fast');
			}
		});
	}

	var toggleNav = function() {

		$(".toggle-nav").click(function(e) {
			e.preventDefault();
			$(".toggle-nav").toggleClass("open");
			$(".nav-main").slideToggle(250);

		});
	}

	function initialize () {
		rollover();
		smoothScroll();
		toggleNav();
	}

	initialize();

});
