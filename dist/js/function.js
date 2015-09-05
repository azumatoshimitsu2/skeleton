$(document).ready(function () {

	/**
	 * @画像名の末尾に -off がつくものをマウスオーバーで末尾 -on の画像に切り替え
	 *
	 * @return {undefined}
	 */
	var rollover = function () {
		$('img').mouseover( function () {
			var src = $(this).attr('src').replace('-off.', '-on.');
			$(this).attr('src', src);
		});

		$('img').mouseout( function () {
			var src = $(this).attr('src').replace('-on.', '-off.');
			$(this).attr('src', src);
		});
	}

	/**
	 * @ページ内リンクをアニメーション
	 *
	 * @return {undefined}
	 */
	var smoothScroll = function () {
		$('.totop a').click( function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'fast');
		});
	}

	function initialize () {
		rollover();
		smoothScroll();
	}

	initialize();

});
