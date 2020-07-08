export default function () {

  //自身の位置までウィンドウスクロールされると、クラスを追加

  $el = $('.js-scroll-point');

  $el.each(function () {
    $(this).data({
      'top': $(this).offset().top - $(window).height() * .8
    });
  });

  $(window).on('scroll', function () {
    let scTop = $(window).scrollTop();

    $el.each(function () {
      if (scTop >= $(this).data('top')) {
        $(this).addClass('is-fire');
      }
    });
  });

  $(window).trigger('scroll');

}
