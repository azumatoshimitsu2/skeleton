import {BREAK_POINTS} from '../settings';

export default function() {
  //ハンバーガーメニュークリックと画面サイズに応じて aria 属性とクラス名の切り替え
  //メニューが開いている状態 aria-expanded: true, aria-hidden: false, .is-active 追加
  //メニューが閉じている状態 aria-expanded: false, aria-hidden: true, .is-active 削除
  let elWrapper,elBtns,elTarget;

  function init() {
    elWrapper = document.querySelector('.js-gnav-wrapper');
    elBtns = document.querySelectorAll('.js-gnav-toggle');
    elTarget = document.querySelector('.js-gnav-target');
    if(window.innerWidth > BREAK_POINTS.ltHbgMenu) {
      elTarget.classList.add('is-active');
    } else {
      elTarget.classList.remove('is-active');
    }
    toggleAtributes(elTarget);

    [].forEach.call(elBtns, el => {
      el.addEventListener('click', clickHandle)
    })
  }

  function toggleAtributes(el) {
    if(el.classList.contains('is-active')) {
      elWrapper.setAttribute("aria-expanded", true);
      elTarget.setAttribute("aria-hidden", false);
      [].forEach.call(elBtns, el => {
        el.classList.add('is-active');
      });
    } else {
      elWrapper.setAttribute("aria-expanded", false);
      elTarget.setAttribute("aria-hidden", true);
      [].forEach.call(elBtns, el => {
        el.classList.remove('is-active');
      });
    }
  }

  function clickHandle(e) {
    e.preventDefault();
    elTarget.classList.toggle('is-active');
    toggleAtributes(elTarget);
  }

  window.addEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', init);
}
