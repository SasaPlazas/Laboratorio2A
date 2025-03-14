class mediano extends HTMLElement {
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
			<link rel="stylesheet" href="./src/components/mediano/mediano.css">
			<div class="the-mediano">
				<img src=${this.img} alt=${this.alt}>
				<h1>${this.title}</h1>
				<p>${this.description}</p>
			</div>
			stile>
				.product-mediano {
					background-color: #f1f1f1;
					border: 1px solid #ccc;
					margin: 10px;
					padding: 10px;
					width: 200px;
				}
    `;
	}
}

customElements.define('the-mediano', mediano);
export default mediano;