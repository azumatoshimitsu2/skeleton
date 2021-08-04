function fadeOut(el, d = 250){
  el.style.display = 'inherit';
  el.style.opacity = 1;
  el.style.transition = 'opacity '+d+'ms';
  setTimeout(()=> {
    el.style.opacity = 0;
  }, 10);

  el.addEventListener('transitionend', (e) => {
    el.style.display = 'none';
  },
  { once : true});
}

function fadeIn(el, d = 250){
  el.style.display = 'inherit';
  el.style.opacity = 0;
  el.style.transition = 'opacity '+d+'ms';
  setTimeout(()=> {
    el.style.opacity = 1;
  }, 10);
};

const fadeToggle = function(elBtn, el) {
  const compStyles = window.getComputedStyle(el);
  if(compStyles.getPropertyValue('display') == 'none') {
    fadeIn(el);
  } else {
    fadeOut(el);
  }
};

export {fadeOut, fadeIn, fadeToggle};
