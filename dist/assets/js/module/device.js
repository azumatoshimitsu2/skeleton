function isTouchDevs() {
	return window.ontouchstart === null ? true : false;
}
const ua = window.navigator.userAgent.toLowerCase();
const isTouch = isTouchDevs();
let isAndroid = false;
let isTouchDevice = false;
if(ua.indexOf("android") != -1) {
	isAndroid = true;
}
if(isAndroid) {
	isTouchDevice = true;
}
if(isTouch) {
	isTouchDevice = true;
}
const myDevice = {
	isTouch : isTouch,
	isAndroid : isAndroid,
	isTouchDevice : isTouchDevice
};

export {myDevice};
