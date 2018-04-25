// JavaScriptモジュール
import ua from './modules/ua.js';
// SCSSソース　（SASSはJavaScriptで一度インポートする必要があります!）
import '../sass/styles.scss';

$(document).ready(function () {
	let ua = u()

	if(!ua.Mobile){
	    $('a[href^="tel:"]').addClass("reset-a-style").on('click', function(e) {
	        e.preventDefault();
	    });
	}

	if($(window).width() >= 720) {
		$('meta[name="viewport"]').attr('content', 'width=1360');
	}
})
