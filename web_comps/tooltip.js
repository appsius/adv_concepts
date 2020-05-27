class Tooltip extends HTMLElement {
	constructor() {
		super();
		this._tooltipContainer;
		this._tooltipText = 'Some dommy text';
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
      <style>
        div {
			font-weight: normal;
         background-color: black;
			color: white;
			position: absolute;
			top: 1.5rem;
			z-index: 10;
			padding: 0.15rem;
			border-radius: 3px;
			box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26);
        }

        :host(.important) {
			 background: var(--color-primary, #ccc);
			 padding: 0.15px;
		  }
		  
		  :host-context(p) {
			  font-weight: bold;
		  }

        ::slotted(.highlight) {
          border-bottom: 2px dotted red;
        }

        .icon {
          background: black;
          color: white;
          padding: 0.1rem 0.4rem;
          text-align: center;
          border-radius: 50%;
        }
      </style>
      <slot>Some default</slot>
      <span class="icon">?</span>
    `;
	}

	connectedCallback() {
		if (this.hasAttribute('text')) {
			this._tooltipText = this.getAttribute('text');
		}

		const tooltipIcon = this.shadowRoot.querySelector('span');
		tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
		tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
		this.style.position = 'relative';
		this.shadowRoot.appendChild(tooltipIcon);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log(name, oldValue, newValue);
	}

	static get observedAttributes() {
		return ['text'];
	}

	_showTooltip() {
		this._tooltipContainer = document.createElement('div');
		this._tooltipContainer.textContent = this._tooltipText;
		this.shadowRoot.appendChild(this._tooltipContainer);
	}

	_hideTooltip() {
		this.shadowRoot.removeChild(this._tooltipContainer);
	}
}

customElements.define('uc-tooltip', Tooltip);
