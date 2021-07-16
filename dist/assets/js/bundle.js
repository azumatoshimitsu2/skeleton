function addARIACurrent () {
  //.nav 内の現在のページリンクに @aria-current を追加　.js-throwgh があるものは除く
  var path = location.pathname;
  var mainLink = document.querySelectorAll('.nav a');
  mainLink.forEach(function (v, i) {
    if (v.getAttribute('href') == path) {
      if (!v.classList.contains('js-throwgh')) {
        v.setAttribute('aria-current', 'page');
      }
    }
  });
}

var BREAK_POINTS = {
  "ltSP": 767,
  "gtTAB": 768,
  "ltTAB": 992,
  "gtPC": 992
};

function pcViewportFixed () {
  // PC のブレイクポイント以上ではビューポート を固定
  if (window.innerWidth >= BREAK_POINTS.gtTAB) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1200');
  }
}

function fadeOut(el) {
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
}

;

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  setTimeout(function () {
    if (!el.classList.contains('is-show')) {
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
}

;

var fadeToggle = function fadeToggle(elBtn, el) {
  if (el.classList.contains('is-processing')) {
    return;
  } else {
    el.classList.add('is-processing');
  }

  var compStyles = window.getComputedStyle(el);

  if (compStyles.getPropertyValue('display') == 'none') {
    fadeIn(el);
  } else {
    fadeOut(el);
  }
};

function slideToggle () {
  var unitEl = document.querySelectorAll('.js-slide-unit'); //要素の高さを変化させながら表示切り替え

  var slideUp = function slideUp(el, duration) {
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
    setTimeout(function () {
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
  }; // slideDown


  var slideDown = function slideDown(el, duration) {
    el.style.removeProperty("display");
    var display = window.getComputedStyle(el).display;

    if (display === "none") {
      display = "block";
    }

    el.style.display = display;
    var height = el.offsetHeight;
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
    setTimeout(function () {
      el.style.removeProperty("height");
      el.style.removeProperty("overflow");
      el.style.removeProperty("transition-duration");
      el.style.removeProperty("transition-property");
      el.style.removeProperty("transition-timing-function");
      el.classList.remove('is-processing');
    }, duration);
  };

  var slideToggle = function slideToggle(elBtn, el) {
    if (el.classList.contains('is-processing')) {
      return;
    } else {
      el.classList.add('is-processing');
      elBtn.querySelector('.icon').classList.toggle("is");
    }

    if (window.getComputedStyle(el).display === "none") {
      return slideDown(el, 400);
    } else {
      return slideUp(el, 400);
    }
  };

  [].forEach.call(unitEl, function (el) {
    var btn = el.querySelector('.js-slide-switch');
    var elTarget = el.querySelector('.js-slide-target');
    btn.addEventListener('click', function (e) {
      slideToggle(e.currentTarget, elTarget);
    });
  });
}

function uajs () {
  var u = window.navigator.userAgent.toLowerCase();
  return {
    Tablet: u.indexOf("windows") != -1 && u.indexOf("touch") != -1 || u.indexOf("ipad") != -1 || u.indexOf("android") != -1 && u.indexOf("mobile") == -1 || u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1 || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
    Mobile: u.indexOf("windows") != -1 && u.indexOf("phone") != -1 || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || u.indexOf("android") != -1 && u.indexOf("mobile") != -1 || u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1 || u.indexOf("blackberry") != -1
  };
}
;

function pcAddIshover () {
  // スマホタブレットでなければロールオーバーで使用する（二回タップ対策用）クラスを追加
  var ua = uajs();

  if (ua.Mobile || ua.Tablet) {} else {
    var hoverItems = document.querySelectorAll('a');
    hoverItems.forEach(function (v, i) {
      v.classList.add('is-hover');
    });
  }
}

function trigger (element, event, obj) {
  if (!obj) {
    obj = {};
  }

  element.dispatchEvent(new CustomEvent(event, {
    detail: obj
  }));
}

function scroll2AddClass () {
  //自身の位置までウィンドウスクロールされると、クラスを追加
  var wel = document.querySelectorAll('.js-scroll-points');
  var el = document.querySelectorAll('.js-scroll-point');
  var elpos = [];
  var welpos = [];
  var winH, docH;

  function setPos() {
    winH = window.innerHeight;
    docH = document.body.clientHeight;
    elpos = [];
    welpos = [];
    var scTop = window.pageYOffset || document.documentElement.scrollTop;
    [].forEach.call(el, function (el) {
      var rect = el.getBoundingClientRect();
      elpos.push([el, rect.top + scTop - winH * .7]);
    });
    [].forEach.call(wel, function (el) {
      var rect = el.getBoundingClientRect();
      welpos.push([el, rect.top + scTop - winH * .7]);
    });
  }

  setPos();
  window.addEventListener('scroll', function (e) {
    var scTop = window.pageYOffset || document.documentElement.scrollTop; //一番下までスクロールされていれば全て処理

    if (scTop + winH >= docH) {
      elpos.forEach(function (v, i) {
        v[0].classList.add('is-fire');
      });
      welpos.forEach(function (v, i) {
        var innerEl = v[0].querySelectorAll('.js-tran');
        [].forEach.call(innerEl, function (el, i) {
          setTimeout(function () {
            el.classList.add('is-fire');
          }, 200 * i);
        });
      });
    } else {
      elpos.forEach(function (v, i) {
        if (scTop >= v[1]) {
          v[0].classList.add('is-fire');
        }
      });
      welpos.forEach(function (v, i) {
        if (scTop >= v[1]) {
          var innerEl = v[0].querySelectorAll('.js-tran');
          [].forEach.call(innerEl, function (el, i) {
            setTimeout(function () {
              el.classList.add('is-fire');
            }, 180 * i);
          });
        }
      });
    }
  });
  window.addEventListener('resize', setPos);
  trigger(window, 'scroll');
}

function accessibleGnavToggle () {
  //ハンバーガーメニュークリックと画面サイズに応じて aria 属性とクラス名の切り替え
  //メニューが開いている状態 aria-expanded: true, aria-hidden: false, .is-active 追加
  //メニューが閉じている状態 aria-expanded: false, aria-hidden: true, .is-active 削除
  var elWrapper, elBtns, elTarget;

  function init() {
    elWrapper = document.querySelector('.js-gnav-wrapper');
    elBtns = document.querySelectorAll('.js-gnav-toggle');
    elTarget = document.querySelector('.js-gnav-target');

    if (window.innerWidth > BREAK_POINTS.ltHbgMenu) {
      elTarget.classList.add('is-active');
    } else {
      elTarget.classList.remove('is-active');
    }

    toggleAtributes(elTarget);
    [].forEach.call(elBtns, function (el) {
      el.addEventListener('click', clickHandle);
    });
  }

  function toggleAtributes(el) {
    if (el.classList.contains('is-active')) {
      elWrapper.setAttribute("aria-expanded", true);
      elTarget.setAttribute("aria-hidden", false);
      [].forEach.call(elBtns, function (el) {
        el.classList.add('is-active');
      });
    } else {
      elWrapper.setAttribute("aria-expanded", false);
      elTarget.setAttribute("aria-hidden", true);
      [].forEach.call(elBtns, function (el) {
        el.classList.remove('is-active');
      });
    }
  }

  function clickHandle(e) {
    e.preventDefault();
    elTarget.classList.toggle('is-active');
    toggleAtributes(elTarget);
  }

  window.addEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', init);
}

(function () {
  window.addEventListener('DOMContentLoaded', function (e) {
    addARIACurrent();
    pcViewportFixed();
    slideToggle();
    pcAddIshover();
    scroll2AddClass();
    var unitEl = document.querySelectorAll('.js-fade-unit');
    [].forEach.call(unitEl, function (el) {
      var btn = el.querySelector('.js-fade-switch');
      var elTarget = el.querySelector('.js-fade-target');
      btn.addEventListener('click', function (e) {
        fadeToggle(e.currentTarget, elTarget);
      });
    });
  });
  accessibleGnavToggle();
})();
//# sourceMappingURL=bundle.js.map
