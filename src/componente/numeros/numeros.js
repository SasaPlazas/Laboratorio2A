class Numbers extends HTMLElement {
    static get observedAttributes() {
        return ['number', 'active'];
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
            <link rel="stylesheet" href="./styles/numbers.css">
            <div class="product-numbers ${this.getAttribute('active') === 'true' ? 'active' : ''}">
                ${this.getAttribute('number')}
            </div>
        `;
    }
}

customElements.define('the-numbers', Numbers);
export default Numbers;


