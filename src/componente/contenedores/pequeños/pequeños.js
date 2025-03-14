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
			  <link rel="stylesheet" href="./contenedores/pequeños/pequeños.css>
			  
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

customElements.define('the-pequeño', pequeño);
export default pequeño;

const pequenoStyle = document.createElement('link');
pequenoStyle.rel = 'stylesheet';
pequenoStyle.href = './contenedores/pequeños/pequeño.css';
document.head.appendChild(pequenoStyle);


//<link rel="stylesheet" href="./contenedores/pequeños/pequeños.css>