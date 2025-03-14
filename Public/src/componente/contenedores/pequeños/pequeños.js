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

		
		
			<div class="the-pequeño">
				<h1>${this.title}</h1>
				<p>${this.description}</p>
			</div>
			
    `;
	}
}

customElements.define('the-pequeño', pequeño);
export default pequeño;

//<link rel="stylesheet" href="./contenedores/pequeños/pequeños.css>