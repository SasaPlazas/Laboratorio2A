class Pequeño extends HTMLElement {
	static get observedAttributes() {
		return ['title', 'description', 'subtitle', 'author', 'date', 'authorImg'];
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
					display: block;
					background: white;
					border-radius: 12px;
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
					overflow: hidden;
					width: 320px;
					max-width: 100%;
					font-family: Arial, sans-serif;
					padding: 20px;
				}

				.subtitle {
					font-size: 0.9em;
					color: #777;
					margin-bottom: 5px;
				}

				h1 {
					font-size: 1.3em;
					margin: 5px 0;
					color: #333;
				}

				p {
					font-size: 1em;
					color: #555;
					line-height: 1.5;
					margin-bottom: 15px;
				}

				.footer {
					border-top: 1px solid #eee;
					padding-top: 10px;
					font-size: 0.9em;
					color: #777;
				}
			</style>

			<div class="the-pequeño">
				<p class="subtitle">${this.getAttribute('subtitle') || ''}</p>
				<h1>${this.getAttribute('title') || ''}</h1>
				<p>${this.getAttribute('description') || ''}</p>
				<div class="footer">
					${this.getAttribute('footer') || ''}
				</div>
			</div>
		`;
	}
}

customElements.define('the-pequeño', Pequeño);
export default Pequeño;
//<link rel="stylesheet" href="./contenedores/pequeños/pequeños.css>