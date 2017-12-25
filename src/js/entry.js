import $ from 'jquery'

$(document).ready(function () {
	
	$('a:not(".no-scroll")').click( function (e) {

		let href = $(this).attr('href');
		if(href.match(/^#/) && $(href).length > 0) {
			e.preventDefault()
			$('html, body').animate({ scrollTop: $(href).offset().top }, 'fast')
		}
	})

	$(".toggle-nav").click(function(e) {
		e.preventDefault()
		$(".toggle-nav").toggleClass("open")
		$(".nav-main").slideToggle(250)
	})

});
