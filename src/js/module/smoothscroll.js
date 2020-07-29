export default function () {

  // a タグに # が含まれるもので現在のページに # で指定した id がある場合はその要素にスクロールして移動

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

}
