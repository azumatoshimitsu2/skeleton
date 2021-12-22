
export default function () {
	const unitEl = document.querySelectorAll('.js-slide-unit')

	//要素の高さを変化させながら表示切り替え
	const slideUp = function(el, duration){
			el.style.height = el.offsetHeight + "px";
			el.offsetHeight;
			el.style.transitionProperty = "height, margin, padding";
			el.style.transitionDuration = duration + "ms";
			el.style.transitionTimingFunction = "ease";
			el.style.overflow = "hidden";
			el.style.height = 0;
			el.style.paddingTop = 0;
			el.style.paddingBottom = 0;
			el.style.marginTop = 0;
			el.style.marginBottom = 0;
			setTimeout(function() {
				el.style.display = "none";
				el.style.removeProperty("height");
				el.style.removeProperty("padding-top");
				el.style.removeProperty("padding-bottom");
				el.style.removeProperty("margin-top");
				el.style.removeProperty("margin-bottom");
				el.style.removeProperty("overflow");
				el.style.removeProperty("transition-duration");
				el.style.removeProperty("transition-property");
				el.style.removeProperty("transition-timing-function");
				el.classList.remove('is-processing');
			}, duration);
	};
	// slideDown
	const slideDown = function(el, duration) {
		el.style.removeProperty("display");
		let display = window.getComputedStyle(el).display;
		if (display === "none") {
			display = "block";
		}
		el.style.display = display;
		let height = el.offsetHeight;
		el.style.overflow = "hidden";
		el.style.height = 0;
		el.style.paddingTop = 0;
		el.style.paddingBottom = 0;
		el.style.marginTop = 0;
		el.style.marginBottom = 0;
		el.offsetHeight;
		el.style.transitionProperty = "height, margin, padding";
		el.style.transitionDuration = duration + "ms";
		el.style.transitionTimingFunction = "ease";
		el.style.height = height + "px";
		el.style.removeProperty("padding-top");
		el.style.removeProperty("padding-bottom");
		el.style.removeProperty("margin-top");
		el.style.removeProperty("margin-bottom");
		setTimeout(function() {
			el.style.removeProperty("height");
			el.style.removeProperty("overflow");
			el.style.removeProperty("transition-duration");
			el.style.removeProperty("transition-property");
			el.style.removeProperty("transition-timing-function");
			el.classList.remove('is-processing');
		}, duration);

	};

	const slideToggle = function(elBtn, el) {
		if(el.classList.contains('is-processing')) {
			return;
		} else {
			el.classList.add('is-processing');
			elBtn.querySelector('.c-icon').classList.toggle("is");
		}
		if (window.getComputedStyle(el).display === "none") {
			return slideDown(el, 400);
		} else {
			return slideUp(el, 400);
		}
	};

	[].forEach.call(unitEl, function (el) {
		const btn = el.querySelector('.js-slide-switch')
    const elTarget = el.querySelector('.js-slide-target');
		btn.addEventListener('click', function(e) {
			slideToggle(e.currentTarget, elTarget);
		});
	});
}
