import uajs from './module/ua';
import accessibleGnavToggle from './module/accessibleGnavToggle';

(function ($) {
  const ua = uajs();

  $(document).ready(function () {

    if (!ua.Mobile) {
      $('a[href^="tel:"]').addClass('reset-a-style').on('click', function (e) {
        e.preventDefault();
      });
    }
    if (ua.Mobile || ua.Tablet) {
      $('.is-hover').removeClass('is-hover');
    }

    if ($(window).width() > 767) {
      $('meta[name="viewport"]').attr('content', 'width=1200');
    }

    $('a:not(".no-scroll")').click(function (e) {
      let href = $(this).attr('href');
      if (href.match(/#/)) {
        if(!href.match(/^#/)) {
          href = href.split("#");
          href = "#" + href[1];
        }
        if($(href).length > 0) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: $(href).offset().top
          }, 'fast');
        }
      }
    });

    accessibleGnavToggle();

  });

})(jQuery);

