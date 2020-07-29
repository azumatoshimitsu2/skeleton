import { BREAK_POINTS } from '../settings';

export default function () {

  // PC のブレイクポイント以上ではビューポート を固定

  if ($(window).width() > BREAK_POINTS.gtTAB) {
    $('meta[name="viewport"]').attr('content', 'width=1200');
  }

}
