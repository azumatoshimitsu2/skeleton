import accessibleGnavToggle from './module/accessibleGnavToggle';
import addCurrentClass from './module/addCurrentClass';
import smoothscroll from './module/jquery.smoothscroll';
import pcViewportFixed from './module/pcViewportFixed';
import spAddIshover from './module/spAddIshover';

(function ($) {
  $(document).ready(function () {
    accessibleGnavToggle();
    addCurrentClass();
    spAddIshover();
    pcViewportFixed();
    smoothscroll();
  });
})(jQuery);

