export default function (targetEl, wrapELName, wrapElAttrObj = {}) {
	const target = document.querySelector(targetEl);
	const wrapEL = document.createElement(wrapELName);

	for (const [key, value] of Object.entries(wrapElAttrObj)) {
			wrapEL.setAttribute(key, value);
	}
	target.before(wrapEL);
	wrapEL.append(target);
}
