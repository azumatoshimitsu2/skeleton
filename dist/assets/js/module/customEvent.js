function trigger(element, event, obj) {
	if(!obj) {
		obj = {};
	}

	if ( typeof window.CustomEvent === "function" ) {
		element.dispatchEvent(new CustomEvent(event, {
			detail: obj
			})
		);
	} else {
		params = { bubbles: false, cancelable: false, detail: obj };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
	}
}

export {trigger};
