class Grande extends HTMLElement { 
    static get observedAttributes() {
        return ['img', 'alt', 'title', 'subtitle', 'description', 'names', 'date']
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
			
       
               <div class="the-grande">
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



customElements.define('the-grande', Grande);
export default Grande;

const grandeStyle = document.createElement('link');
grandeStyle.rel = 'stylesheet';
grandeStyle.href = './contenedores/grandes/grande.css';
document.head.appendChild(grandeStyle);




//  <link rel="stylesheet" href="./contenedores/grandes/grande.css>