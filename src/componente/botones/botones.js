class Botones extends HTMLElement{

    
    static get ObservedAttributes(){
        return ['txtbutton']

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

         <link rel="stylesheet" href="./src/componente/botones/botones.css">
        <button>${this.getAttribute('txtbutton')}</button>
        `
        
    }
}

customElements.define('los-botones', Botones);

export default Botones;

