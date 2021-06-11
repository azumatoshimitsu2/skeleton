function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .06) < 0) {
      el.style.display = "none";
      el.classList.remove('is-processing');
    } else {
			el.classList.remove('is-show');
      requestAnimationFrame(fade);
    }
  })();
};

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";
	setTimeout(function() {
		if(!el.classList.contains('is-show')) {
			el.classList.add('is-show');
		}
	}, 20);

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .06) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    } else {
		  el.classList.remove('is-processing');
    }
  })();
};

const fadeToggle = function(elBtn, el) {
	if(el.classList.contains('is-processing')) {
		return;
	} else {
		el.classList.add('is-processing');
	}
  const compStyles = window.getComputedStyle(el);
  if(compStyles.getPropertyValue('display') == 'none') {
    fadeIn(el);
  } else {
    fadeOut(el);
  }
};

export {fadeOut, fadeIn, fadeToggle};
