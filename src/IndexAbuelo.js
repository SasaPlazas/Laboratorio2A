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

        <the-grande>
            img="https://picsum.photos/800/450?random=1"
            alt="Norway"
            text="Engineering"
            title="Revolutionizing software development with cutting-edge tools"
            description="Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.">
        </the-grande>
        <the-grande>
            img="https://picsum.photos/800/450?random=2"
            alt="Norway"
            text="Product"
            title="Innovative product features that drive success"
            description="Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.">
        </the-grande>

        <the-mediano>
            img="https://picsum.photos/800/450?random=3"
            alt="Northern Lights"
            text="Design"
            title="Designing for the future: trends and insights"
            description="Stay ahead of the curve with the latest design trends and insights. Our design team shares their">
        </the-mediano>

        <the-pequeño>
            text="Company"
            title="Our company's journey: milestones and achievements"
            description="Take a look at our company's journey and the milestones we've achieved along the way. From">
        </the-pequeño>
        <the-pequeño>
            text="Engineering"
            title="Pioneering sustainable engineering solutions"
            description="Learn about our commitment to sustainability and the innovative engineering solutions we're">
        </the-pequeño>

        <the-mediano>
            img="https://picsum.photos/800/450?random=6"
            alt="Northern Lights"
            text="Product"
            title="Maximizing efficiency with our latest product updates"
            description="Our recent product updates are designed to help you maximize efficiency and achieve more. Get a.">
        </the-mediano>

        
        ` 

    }

}

customElements.define('app-container', AppContainer); 

