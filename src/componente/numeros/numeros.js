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
			style>
				.product-numbers {
					background-color: #f1f1f1;
					border: 1px solid #ccc;
					margin: 10px;
					padding: 10px;
					width: 100px;
				}
    `;
	}
}

customElements.define('the-numbers', numbers);
export default numbers;