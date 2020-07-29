import accessibleGnavToggle from './module/accessibleGnavToggle';
import smoothscroll from './module/smoothscroll';
import pcViewportFixed from './module/pcViewportFixed';
import spRemoveIshover from './module/spRemoveIshover';

(function ($) {
  $(document).ready(function () {
    pcViewportFixed();
    spRemoveIshover();
    smoothscroll();
    accessibleGnavToggle();
  });
})(jQuery);

