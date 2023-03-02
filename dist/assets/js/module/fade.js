function fadeOut(elBtn, elTarget, d = 250){
  return new Promise((resolve, reject) => {
    if(elTarget.getAttribute("aria-hidden") == "true") {
      resolve(elTarget);
      return 1;
    }
    elTarget.style.display = 'inherit';
    elTarget.style.opacity = 1;
    elTarget.style.transition = 'opacity '+d+'ms';
    elTarget.setAttribute("aria-hidden", true);
    setTimeout(()=> {
      elTarget.style.opacity = 0;
    }, 10);

    elTarget.addEventListener('transitionend', (e) => {
      if(e.target.getAttribute("aria-hidden") == "true") {
        elTarget.style.display = 'none';
      }
      resolve(e);
    },
    { once : true});
  });
}

function fadeIn(elBtn, elTarget, d = 250){
  return new Promise((resolve, reject) => {
    elTarget.style.display = 'inherit';
    elTarget.style.opacity = 0;
    elTarget.style.transition = 'opacity '+d+'ms';
    elTarget.style.transition = 'opacity '+d+'ms';
    elTarget.setAttribute("aria-hidden", false);
    setTimeout(()=> {
      elTarget.style.opacity = 1;
    }, 10);

    elTarget.addEventListener('transitionend', (e) => {
      console.log("inherit");
      resolve(e);
    },
    { once : true});
  });
};

const fadeToggle = function(elBtn, elTarget) {
  const compStyles = window.getComputedStyle(elTarget);
  let prm;
  if(compStyles.getPropertyValue('display') == 'none') {
    prm = fadeIn(elBtn, elTarget);
  } else {
    prm = fadeOut(elBtn, elTarget);
  }
  return prm;
};

export {fadeOut, fadeIn, fadeToggle};
