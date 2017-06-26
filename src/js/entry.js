import $ from 'jquery/dist/jquery.min.js'

$(document).ready(function () {

	var es6_test = (x, y, z) => { console.log(x, y, z); };
	es6_test('a', 'b', 'c');

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
		smoothScroll();
		toggleNav();
	}

	initialize();

});
