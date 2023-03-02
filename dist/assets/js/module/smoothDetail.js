import {trigger} from './customEvent.js';

function smoothDetail() {
	const accordions = document.querySelectorAll('.js-accordion');

	[].forEach.call(accordions, (item) => {
		const summary = item.querySelector('summary');
		const content = item.querySelector('.js-accordion-content');
		const options =  { fill: "forwards", duration: 350 };
		let isAnimation = false;
		item.style.overflow = "hidden";

		summary.onclick = (e) => {
			e.preventDefault();
			const summaryHeight = summary.offsetHeight;
			let animate;
			let contentHeight;
			if(!isAnimation) {
				isAnimation = true;
				if(item.open) {
					contentHeight = content.offsetHeight;
					animate = item.animate( { height: [contentHeight + summaryHeight +'px', summaryHeight +'px'] }, options );
					animate.finished.then( (anim) => {
						item.open = false;
					});
				} else {
					item.open = true;
					contentHeight = content.offsetHeight;
					animate = item.animate( { height: [summaryHeight +'px', contentHeight + summaryHeight +'px'] }, options );
				}
				animate.finished.then( (anim) => {
					isAnimation = false;
					trigger(window, 'changeHeight');
				});
			}
		}
	});

	window.onresize = (e) => {
		[].forEach.call(accordions, (item) => {
			const summary = item.querySelector('summary');
			const content = item.querySelector('.js-accordion-content');
			const resizeOptions =  { fill: "forwards", duration: 0 };
			const summaryHeight = summary.offsetHeight;
			if(item.open) {
				const contentHeight = content.offsetHeight;
				animate = item.animate( { height: [contentHeight + summaryHeight +'px', contentHeight + summaryHeight +'px'] }, resizeOptions );
			} else {
				animate = item.animate( { height: [summaryHeight +'px', summaryHeight +'px'] }, resizeOptions );
			}
		});
	};
}

export {smoothDetail};
