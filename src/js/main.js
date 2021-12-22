import addARIACurrent from './module/addARIACurrent';
import {fadeToggle} from './module/fade';
import slideToggle from './module/slideToggle';
import pcAddIshover from './module/pcAddIshover';
import scroll2AddClass from './module/scroll2AddClass';
import accessibleGnavToggle from './module/accessibleGnavToggle';

(function () {
  window.addEventListener('DOMContentLoaded', function(e) {
    addARIACurrent();
    slideToggle();
    pcAddIshover();
    scroll2AddClass();

    const unitEl = document.querySelectorAll('.js-fade-unit');
    [].forEach.call(unitEl, function (el) {
      const btn = el.querySelector('.js-fade-switch')
      const elTarget = el.querySelector('.js-fade-target');
      btn.addEventListener('click', function(e) {
        fadeToggle(e.currentTarget, elTarget);
      })
    });
  });

  accessibleGnavToggle();
})();

