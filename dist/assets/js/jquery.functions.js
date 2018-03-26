$(document).ready(function () {

	var _ua = (function(u){
	  return {
	    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
	      || u.indexOf("ipad") != -1
	      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
	      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
	      || u.indexOf("kindle") != -1
	      || u.indexOf("silk") != -1
	      || u.indexOf("playbook") != -1,
	    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
	      || u.indexOf("iphone") != -1
	      || u.indexOf("ipod") != -1
	      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
	      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
	      || u.indexOf("blackberry") != -1
	  }
	})(window.navigator.userAgent.toLowerCase());

	if(!_ua.Mobile){
	    $('a[href^="tel:"]').addClass("reset-a-style").on('click', function(e) {
	        e.preventDefault();
	    });
	}

	if($(window).width() >= 720) {
		$('meta[name="viewport"]').attr('content', 'width=1360');
	}
	
	$('a:not(".no-scroll")').click( function (e) {

		var href = $(this).attr('href');
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