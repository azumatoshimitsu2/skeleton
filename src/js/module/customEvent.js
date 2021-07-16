export default function (element, event, obj) {
	if(!obj) {
		obj = {};
	}
	element.dispatchEvent(new CustomEvent(event, {
		detail: obj
	  })
	);
}
