window.APP = (function (module, $) {
    "use strict";

    
    $(function() {
		if($.fn.popwindow) 
			$('[data-popup]').popwindow();
    });
    
    return module;
    

})(window.APP || {}, window.jQuery);
