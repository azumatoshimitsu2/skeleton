export default function(){

  // タブ HTML Sample
  // <div class="ui-tab">
  //   <ul class="ui-tab__switchs">
  //     <li data-target="targetID1">タブボタン1</li>
  //     <li data-target="targetID2">タブボタン2</li>
  //   </ul>
  //  <div className="ui-tab__content">
  //   <div id="targetID1" class="ui-tab__content__item">
  //    タブコンテンツ1
  //   </div>
  //   <div id="targetID2" class="ui-tab__content__item">
  //    タブコンテンツ2
  //   </div>
  //  </div>
  // </div>

  var tabs = [];
  var hash = location.hash;
  let loc = location.pathname;

  $('.ui-tab').each(function() {
      let $trigger = $(this).find('.ui-tab__switchs li');
      let $items = $(this).find('.ui-tab__content__item');

      if($(hash).length > 0) {
        $(this).find(hash)
        $trigger.removeClass('active')
        $(this).find('.ui-tab__switchs li[data-target="'+hash+'"]').addClass('active')
        $items.hide()
        $(hash).fadeIn(250)
      }

      $trigger.on('click', function(e) {
        $trigger.removeClass('active');
        $(this).addClass('active');
        let str = $(this).attr('data-target');
        let $target = $(str);

        $items.hide();
        $target.fadeIn(250);
        if( window.history && window.history.pushState ){
          window.history.pushState(null, null, str);
        }
      })

      tabs.push($(this));
  });

  return tabs;
}