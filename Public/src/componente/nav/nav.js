class Nav extends HTMLElement{

    
    static get ObservedAttributes(){
        return ['title', 'txtButton']

    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }

    connectedCallback(){
        this.render();
    }

    attributeChangeCallback(propName, oldValue, newValue){
        this[propName] =newValue; 
        this.render();
    }

    render(){

        this.shadowRoot.innerHTML= `
        <a>${this.title}</a>
        <button>${this.txtButton}</button>
        
        `

    }
}

customElements.define('la-nav', Nav);

export default Nav;