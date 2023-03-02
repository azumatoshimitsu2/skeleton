import {addARIACurrent} from './module/addARIACurrent.js';
import {fadeToggle} from './module/fade.js';
import {smoothDetail} from './module/smoothDetail.js';
import {scroll2AddClass} from './module/scroll2AddClass.js';
import {gnavToggle} from './module/gnavToggle.js';

(function () {
  window.addEventListener('DOMContentLoaded', function(e) {
		gnavToggle();
    addARIACurrent();
    scroll2AddClass();
		smoothDetail();

    const unitEl = document.querySelectorAll('.js-fade-unit');
    [].forEach.call(unitEl, function (el) {
      const btn = el.querySelector('.js-fade-switch')
      const elTarget = el.querySelector('.js-fade-target');
      btn.addEventListener('click', function(e) {
        fadeToggle(e.currentTarget, elTarget);
      })
    });
  });

})();
