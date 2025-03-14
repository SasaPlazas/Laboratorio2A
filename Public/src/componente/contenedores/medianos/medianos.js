class mediano extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'alt', 'title', 'description','subtitle', 'dates', 'names',];
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
	
		
			<div class="the-mediano">
				<img src=${this.img} alt=${this.alt}>
				<h1>${this.title}</h1>
				<p>${this.description}</p>
			</div>
			
    `;
	}
}

customElements.define('the-mediano', mediano);
export default mediano;

// <link rel="stylesheet" href="./contenedores/medianos/medianos.css>