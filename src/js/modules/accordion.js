export default function(){

  // アコーディオン HTML Sample
  // <div class="accordion">
  // <div class="accordion__switch">トグルボタン</div>
  //  <div class="accordion__target">
  //    アコーディゴンのコンンテンツ
  //  </div>
  // </div>

  var accordions = []

  $('.accordion').each(function() {
      let $trigger = $(this).find('.accordion__switch');
      let $target = $(this).find('.accordion__target');

      $trigger.on('click', function(e) {
        e.preventDefault();
        $trigger.toggleClass('active');
        $target.slideToggle(300);
      })

      accordions.push($(this));
  });

  return accordions;
}