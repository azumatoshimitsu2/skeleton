export default function () {
	const pageLink = document.querySelectorAll('a[href^="#"]');

	[].forEach.call(pageLink, function(v, i) {
		v.addEventListener('click', function(e) {
			e.preventDefault();
			let href = v.getAttribute('href');
			let target = document.getElementById(href.replace('#', ''));
			const rect = target.getBoundingClientRect();
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const targetPos = rect.top + scrollTop;

			window.scrollTo({
				top: targetPos,
				behavior: 'smooth',
			});
		})
	})
}
