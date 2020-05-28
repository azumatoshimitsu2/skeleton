function uajs () {
  var u = window.navigator.userAgent.toLowerCase();
  return {
    Tablet: u.indexOf("windows") != -1 && u.indexOf("touch") != -1 || u.indexOf("ipad") != -1 || u.indexOf("android") != -1 && u.indexOf("mobile") == -1 || u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1 || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
    Mobile: u.indexOf("windows") != -1 && u.indexOf("phone") != -1 || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || u.indexOf("android") != -1 && u.indexOf("mobile") != -1 || u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1 || u.indexOf("blackberry") != -1
  };
}
;var BREAK_POINTS = {
  "ltSP": 767,
  "gtTAB": 768,
  "ltTAB": 992,
  "gtPC": 992
};function accessibleGnavToggle () {
  //ハンバーガーメニュークリックと画面サイズに応じて aria 属性とクラス名の切り替え
  //メニューが開いている状態 aria-expanded: true, aria-hidden: false, .is-active 追加
  //メニューが閉じている状態 aria-expanded: false, aria-hidden: true, .is-active 削除
  var elWrapper = document.querySelector('.js-gnav-wrapper');
  var elBtns = document.querySelectorAll('.js-gnav');
  var elTarget = document.querySelector('.js-gnav-target');

  function init() {
    if (window.innerWidth > BREAK_POINTS.ltHbgMenu) {
      elTarget.classList.add('is-active');
    } else {
      elTarget.classList.remove('is-active');
    }

    toggleAtributes(elTarget);
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

  [].forEach.call(elBtns, function (el) {
    el.addEventListener('click', clickHandle);
  });
  window.addEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', init);
}history.scrollRestoration = "auto";

(function ($) {
  var ua = uajs();
  $(document).ready(function () {
    if (!ua.Mobile) {
      $('a[href^="tel:"]').addClass('reset-a-style').on('click', function (e) {
        e.preventDefault();
      });
    }

    if (ua.Mobile || ua.Tablet) {
      $('.hover').removeClass('hover');
    }

    if ($(window).width() > 767) {
      $('meta[name="viewport"]').attr('content', 'width=1200');
    }

    $('a:not(".no-scroll")').click(function (e) {
      var href = $(this).attr('href');

      if (href.match(/^#/) && $(href).length > 0) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 'fast');
      }
    });
    accessibleGnavToggle();
  });
})(jQuery);