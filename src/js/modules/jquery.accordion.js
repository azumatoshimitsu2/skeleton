export default function(){

  // アコーディオン HTML Sample

  //<div class="accordion">
  //  <div class="accordion__switch">アコーディオン</div>
  //  <div class="accordion__target set-hide">
  //    アコーディゴンのコンンテンツ
  //  </div>
  //</div>

  var accordions = []

  $('.accordion').each(function() {
      let $trigger = $(this).find('.accordion__switch');
      let $target = $(this).find('.accordion__target');

      $trigger.on('click', function(e) {
        e.preventDefault();
        $trigger.toggleClass('active');
        $target.slideToggle(250);
      })

      accordions.push($(this));
  });

  return accordions;
}