export default function () {

  // モーダル HTML Sample

  //<div class="modal-trigger" data-target="#modal-window-0">押すとモーダルウィンドウがでるよ</div>
  //<div id="modal-window-0" class="modal-window set-hide">
  //    <div class="modal-window__content">
  //      <div class="modal-close-trigger">押すとモーダルウィンドウが消えるよ</div>
  //      <p>モーダルウィンドウの内容</p>
  //    </div>
  //  </div>
  //</div>

  $('#container').append('<div id="modal-overlay" class="c-modal-overlay">');

  $('.modal-trigger').on('click', function (e) {
    e.preventDefault();
    let $target = $($(this).attr('data-target'));
    let scTop = $(window).scrollTop();
    $target.css({
      'top': (scTop + 100) + 'px'
    });
    $target.fadeIn(250);
    $('#modal-overlay').fadeIn(250);
  });

  $('.modal-close-trigger, #modal-overlay').on('click', function (e) {
    $('.modal-window').fadeOut(250);
    $('#modal-overlay').fadeOut(250);
  });

}
