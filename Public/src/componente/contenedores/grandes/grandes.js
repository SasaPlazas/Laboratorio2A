class Grande extends HTMLElement {  
    static get observedAttributes() {
        return ['img', 'alt', 'title', 'subtitle', 'description', 'names', 'date'];
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
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    width: 80%;
                    max-width: 700px;
                }

                .the-grande {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .the-grande img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .content {
                    padding: 20px;
                    width: 100%;
                    justify-content:left;
                }

                h1 {
                    font-size: 1.5em;
                    margin: 10px 0;
                    color: #333;
                }

                h3 {
                    font-size: 1em;
                    color: #777;
                }

                p {
                    font-size: 1em;
                    color: #555;
                    line-height: 1.5;
                }

                .footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid #eee;
                    padding: 15px 20px;
                    font-size: 0.9em;
                    color: #888;
                }

            </style>

            <div class="the-grande">
                <img src="${this.img || ''}" alt="${this.alt || ''}">
                <div class="content">
                    <h1>${this.title || ''}</h1>
                    <h3>${this.subtitle || ''}</h3>
                    <p>${this.description || ''}</p>
                    <div class="footer">
                        <span>${this.names || ''}</span>
                        <span>${this.date || ''}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('the-grande', Grande);
export default Grande;

//  <link rel="stylesheet" href="./contenedores/grandes/grande.css>
