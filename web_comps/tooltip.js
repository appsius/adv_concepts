class Tooltip extends HTMLElement {
	constructor() {
		super();
		console.log('My Custom Components...');
	}
}

customElements.define('uc-tooltip', Tooltip);
