import { BREAK_POINTS } from '../settings';

export default function () {

  // PC のブレイクポイント以上ではビューポート を固定

  if ( window.innerWidth >= BREAK_POINTS.gtTAB) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1200');
  }

}
