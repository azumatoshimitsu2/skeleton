import {BREAK_POINTS} from '../settings.js';
import {myDevice} from './device.js';

function gnavToggle() {
  //ハンバーガーメニュークリックと画面サイズに応じて aria 属性とクラス名の切り替え
  const toggleBtns = document.querySelectorAll('.js-gnav-toggle');
  const targetId = document.querySelector('.js-gnav-toggle').getAttribute('aria-controls');
	const expandTarget = document.getElementById(targetId);

  function init() {
    if(window.innerWidth > BREAK_POINTS.ltSP) {
      show();
    } else {
      hide();
    }
  }

	function setElmsAttribute(elms, name, value) {
		[].forEach.call(elms, el => {
			el.setAttribute(name, value);
		});
	}

	function hide() {
		setElmsAttribute(toggleBtns, "aria-expanded", false);
		expandTarget.setAttribute("aria-hidden", true);
		[].forEach.call(toggleBtns, btn => {
			btn.classList.remove('is-active');
		});
	}

	function show() {
		setElmsAttribute(toggleBtns, "aria-expanded", true);
		expandTarget.setAttribute("aria-hidden", false);
		[].forEach.call(toggleBtns, btn => {
			btn.classList.add('is-active');
		});
	}

  function toggleAtributes() {
    if(expandTarget.getAttribute('aria-hidden') == "true") {
			show();
    } else {
			hide();
    }
  }

  function clickHandle(e) {
    e.preventDefault();
    toggleAtributes();
  }

	[].forEach.call(toggleBtns, btn => {
		btn.addEventListener('click', clickHandle)
	})

  init();

  if(!myDevice.isTouchDevice) {
		window.addEventListener('resize', init);
  }
}

export {gnavToggle};
