class Coments extends HTMLElement {
    static get observedAttributes() { 
        return ['subtitle', 'title', 'description', 'names', 'date'];
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
            if (this.isConnected) {
                this.render();
            }
        }
    }

    render() {

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/componente/comentarios/comentarios.css">
        
            <div class="comment">
                <h3>${this.getAttribute('subtitle')}</h3>
                <h2>${this.getAttribute('title')}</h2>
                <p>${this.getAttribute('description')}</p>

                <div class= "footer">
                    <h4>${this.getAttribute('names')}</h4>
                    <h4>${this.getAttribute('date')}</h4>
                </div>
                
            </div>
        `;
    }
}

customElements.define('the-coments', Coments);

export default Coments;