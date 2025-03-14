class grande extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'alt', 'title', 'description',];
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
			<link rel="stylesheet" href="./src/components/grande/grande.css">
			<div class="the-grande">
				<img src=${this.img} alt=${this.alt}>
				<h1>${this.title}</h1>
				<p>${this.description}</p>
			</div>
			style>
				.product-grande {
					background-color: #f1f1f1;
					border: 1px solid #ccc;
					margin: 10px;
					padding: 10px;
					width: 300px;
				}
    `;
	}
}

customElements.define('the-grande', grande);
export default grande;