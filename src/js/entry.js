import umbrella from 'umbrellajs'
import jump from 'jump.js'
import ua from './modules/ua.js'
import sliderToggle from './modules/slideToggle.js'

(function() {
	const u = umbrella.u
	const ajax = umbrella.ajax

	if(u('#container').size().width > 640) {
		u('meta[name="viewport"]').attr('content', 'width=1100')
	}

	if(!ua.Mobile){
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

