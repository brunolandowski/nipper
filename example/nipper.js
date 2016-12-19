/*!
 * Nipper 1.0.0
 * https://github.com/brunolandowski/shift
 */
(function($) {
        $.fn.nipper = function(params) {
        var that = $(this)[0];


function lineclamp() {
   var lineheight = parseFloat($(that).children().css('line-height'));
	var articleheight = $(that).height(); 
	var calc = parseInt(articleheight/lineheight);
	$(that).children().css({
  	"-webkit-line-clamp": "" + calc + ""
	});
}


$(document).ready(function() {
    lineclamp();
});

$( window ).resize(function() {
 	lineclamp();
});

        };
})(jQuery);

console.log("%cNipper script made by Bruno Landowski", "background: #333; color: #bdbd0a; padding: 5px 10px;");
console.log("%chttp://brunolandowski.fr", "color:#333");
console.log("%chttps://github.com/brunolandowski", "color:#333");