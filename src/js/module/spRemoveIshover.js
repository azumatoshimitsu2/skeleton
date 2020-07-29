import uajs from './ua';

export default function () {

  // スマホタブレットではロールオーバーで使用する（二回タップ対策用）クラスを削除

  const ua = uajs();

  if (ua.Mobile || ua.Tablet) {
    $('.is-hover').removeClass('is-hover');
  }

}
