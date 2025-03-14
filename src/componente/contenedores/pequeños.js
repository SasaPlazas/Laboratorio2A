class pequeño extends HTMLElement {
	static get observedAttributes() {
		return ['title', 'description',];
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
			<link rel="stylesheet" href="./src/components/pequeño/pequeño.css">
			<div class="the-pequeño">
				<h1>${this.title}</h1>
				<p>${this.description}</p>
			</div>
			<style>
				.product-pequeño {
					background-color: #f1f1f1;
					border: 1px solid #ccc;
					margin: 10px;
					padding: 10px;
					width: 100px;
				}
    `;
	}
}

customElements.define('the-pequeño', pequeño);
export default pequeño;