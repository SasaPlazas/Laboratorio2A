class numbers extends HTMLElement {
	static get observedAttributes() {
		return ['number',];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
			<div class="product-numbers">
				p ${this.number}
			</div>
			
    `;
	}
}

customElements.define('the-numbers', numbers);
export default numbers;