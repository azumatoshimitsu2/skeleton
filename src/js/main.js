import uajs from './modules/ua';

(function ($) {
  const ua = uajs();

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
      let href = $(this).attr('href');
      if (href.match(/^#/) && $(href).length > 0) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 'fast');
      }
    });

    $('.btn--toggle').click(function (e) {
      e.preventDefault();
      $(".btn--toggle").toggleClass("btn--toggle--open");
      $(".nav-main").fadeToggle(250);
    });

  });

})(jQuery);

