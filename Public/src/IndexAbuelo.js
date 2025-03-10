import * as components from './componente/indexPadre';


class AppContainer extends HTMLElement{


    constructor(){
        super();
        this.attachShadow({mode: "open"}); //encapsula al dom
}


    connectedCallback(){
        this.render();
    }
    
    // se escribe el contenido de html dentro de las comillas
    
    render(){
        this.shadowRoot.innerHTML=`
        
        
        
        ` 

    }

}

customElements.define('app-container', AppContainer); 
