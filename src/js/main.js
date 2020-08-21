import accessibleGnavToggle from './module/accessibleGnavToggle';
import addCurrentClass from './module/addCurrentClass';
import smoothscroll from './module/jquery.smoothscroll';
import pcViewportFixed from './module/pcViewportFixed';
import spRemoveIshover from './module/spRemoveIshover';

(function ($) {
  $(document).ready(function () {
    accessibleGnavToggle();
    addCurrentClass();
    spRemoveIshover();
    pcViewportFixed();
    smoothscroll();
  });
})(jQuery);

