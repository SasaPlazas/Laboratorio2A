class Mediano extends HTMLElement {
	static get observedAttributes() {
		return ['img', 'alt', 'title', 'description', 'subtitle', 'author', 'date', 'authorImg'];
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
					width: 400px; /* Aumentar el tamaño */
					max-width: 100%;
					font-family: Arial, sans-serif;
				}

				.the-mediano {
					display: flex;
					flex-direction: column;
					width: 100%;
				}

				.the-mediano img {
					width: 100%;
					height: 220px; 
					object-fit: cover;
					display: block;
					border-top-left-radius: 12px;
					border-top-right-radius: 12px;
				}

				.content {
					padding: 20px;
				}

				.subtitle {
					font-size: 0.9em;
					color: #777;
					margin-bottom: 5px;
				}

				h1 {
					font-size: 1.4em;
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
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 15px 20px;
					border-top: 1px solid #eee;
					font-size: 0.9em;
					color: #888;
				}

				.author-info {
					display: flex;
					align-items: center;
				}

				.author-info img {
					width: 30px;
					height: 30px;
					border-radius: 50%;
					margin-right: 10px;
				}
			</style>
	<div class="the-mediano">
				<img src="${this.getAttribute('img') || ''}" alt="${this.getAttribute('alt') || ''}">
				<div class="content">
					<p class="subtitle">${this.getAttribute('subtitle') || ''}</p>
					<h1>${this.getAttribute('title') || ''}</h1>
					<p>${this.getAttribute('description') || ''}</p>
				</div>
				<div class="footer">
					<span>${this.getAttribute('author') || ''}</span>
					<span>${this.getAttribute('date') || ''}</span>
				</div>
			</div>
		`;
	}
}

customElements.define('the-mediano', Mediano);
export default Mediano;
// <link rel="stylesheet" href="./contenedores/medianos/medianos.css>