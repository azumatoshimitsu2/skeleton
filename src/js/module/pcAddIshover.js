import uajs from './ua';

export default function () {

  // スマホタブレットでなければロールオーバーで使用する（二回タップ対策用）クラスを追加

  const ua = uajs();

  if (ua.Mobile || ua.Tablet) {
  } else {
    const hoverItems = document.querySelectorAll('a');
    hoverItems.forEach( (v, i) => {
      v.classList.add('is-hover');
    });
  }

}
