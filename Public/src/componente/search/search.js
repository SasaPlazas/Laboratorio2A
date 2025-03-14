class Search extends HTMLElement{

    
    static get observedAttributes(){
        return ['placeholder', 'icon'];

    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }

    connectedCallback(){
        this.render();
    }

    attributeChangeCallback(propName, oldValue, newValue){
        if (oldValue !== newValue){

             this[propName] =newValue; 
        this.render();
        }
       
    }

    render(){

        this.shadowRoot.innerHTML= `
    
           <link rel="stylesheet" href="./src/componente/search/search.css">
        <div class="search-container">
            <div class="search-box">
                <span class="search-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14A4.5 4.5 0 1 1 14 9.5 4.505 4.505 0 0 1 9.5 14z"></path>
                    </svg>
                </span>
                <input type="text" placeholder="${this.placeholder || 'Search...'}">
            </div>
            
        </div>
                
        `

    }
}

customElements.define('search-bar', Search);

export default Search;

//me toco colocar el icono de wifi aqui para que no se borrara