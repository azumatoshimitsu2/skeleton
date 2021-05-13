export default function (element, event) {
	if (document.createEvent) {
	  var evt = document.createEvent("HTMLEvents");
	  evt.initEvent(event, true, true );
	  return element.dispatchEvent(evt);
	} else {
	  var evt = document.createEventObject();
	  return element.fireEvent("on"+event, evt)
	}
}
