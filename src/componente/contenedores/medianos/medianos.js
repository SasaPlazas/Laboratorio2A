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
            <img src="${this.getAttribute('img')}" 
                 alt="${this.getAttribute('alt')}">
            <h1>${this.getAttribute('title') }</h1>
            <h3>${this.getAttribute('subtitle')}</h3>
            <p>${this.getAttribute('description')}</p>
            <div class="footer">
                <h4>${this.getAttribute('names')}</h4>
                <h4>${this.getAttribute('date')}</h4>
            </div>
        </div>
			
    `;
	}
}

customElements.define('the-mediano', mediano);
export default mediano;

const medianoStyle = document.createElement('link');
medianoStyle.rel = 'stylesheet';
medianoStyle.href = './contenedores/medianos/mediano.css';
document.head.appendChild(medianoStyle);

// <link rel="stylesheet" href="./contenedores/medianos/medianos.css>