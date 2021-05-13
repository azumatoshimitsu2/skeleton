import addARIACurrent from './module/addARIACurrent';
import pcViewportFixed from './module/pcViewportFixed';
import fadeToggle from './module/fadeToggle';
import slideToggle from './module/slideToggle';
import pcAddIshover from './module/pcAddIshover';
import scroll2AddClass from './module/scroll2AddClass';
import accessibleGnavToggle from './module/accessibleGnavToggle';

(function () {
  window.addEventListener('DOMContentLoaded', function(e) {
    addARIACurrent();
    pcViewportFixed();
    fadeToggle();
    slideToggle();
    pcAddIshover();
    scroll2AddClass();
  });
  
  accessibleGnavToggle();
})();

