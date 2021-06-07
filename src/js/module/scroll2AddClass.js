
import trigger from './customEvent';

export default function () {
  //自身の位置までウィンドウスクロールされると、クラスを追加
	
	const wel = document.querySelectorAll('.js-scroll-points');
	const el = document.querySelectorAll('.js-scroll-point');
	let elpos = [];
	let welpos = [];
	let winH, docH;

	function setPos() {
		winH = window.innerHeight;
		docH = document.body.clientHeight;
		elpos = [];
		welpos = [];
		var scTop = window.pageYOffset || document.documentElement.scrollTop;
		[].forEach.call(el, function (el) {
			var rect = el.getBoundingClientRect();
			elpos.push([el, rect.top + scTop - winH * .7])
		});

		[].forEach.call(wel, function (el) {
			var rect = el.getBoundingClientRect();
			welpos.push([el, rect.top + scTop - winH * .7])
		});
	}

	setPos();

	window.addEventListener('scroll', function(e) {
		const scTop = window.pageYOffset || document.documentElement.scrollTop;

		//一番下までスクロールされていれば全て処理
		if(scTop + winH >= docH) {
			elpos.forEach(function(v,i) {
				v[0].classList.add('is-fire');
			});
			welpos.forEach(function(v,i) {
				var innerEl = v[0].querySelectorAll('.u-tran');
				[].forEach.call(innerEl, function (el, i) {
					setTimeout(function() {
						el.classList.add('is-fire');
					}, 200 * i)
				});
			});
		} else {
			elpos.forEach(function(v,i) {
				if (scTop >= v[1]) {
					v[0].classList.add('is-fire');
				}
			});
	
			welpos.forEach(function(v,i) {
				if (scTop >= v[1]) {
					var innerEl = v[0].querySelectorAll('.u-tran');
					[].forEach.call(innerEl, function (el, i) {
						setTimeout(function() {
							el.classList.add('is-fire');
						}, 180 * i)
					});
				}
			});
		}
	});

	window.addEventListener('resize', setPos);
	trigger(window, 'scroll');

}
