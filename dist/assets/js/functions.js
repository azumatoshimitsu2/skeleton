;(function() {
	var ua_type = ua()

	if(u('#container').size().width > 720) {
		u('meta[name="viewport"]').attr('content', 'width=1100')
	}
	
	if(!ua_type.Mobile){
	    u('a[href^="tel:"]').addClass('reset-a-style').on('click', function(e) {
	        e.preventDefault()
	    })
	}

	u('a[href^="#"]').handle('click', function(e) {
		jump(u(this).attr('href'), {
			duration: 400
		})
	})

	u(".button--toggle").handle('click', function(e) {
		u(this).toggleClass('button--toggle--open')
		u('.nav-main').toggleClass('nav-main--show')
	})

	u('.compo-toggle').each(function(v, i) {
		sliderToggle(v)
	})
})()

