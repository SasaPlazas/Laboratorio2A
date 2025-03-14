import * as components from './componente/indexPadre.js';


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

    <style>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

  *{
  font-family: 'Inter', sans-serif;
  }

 .app-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .blog-header {
          max-width: 1200px;
          margin: 0 auto; 
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 5px;
          
        }

        .blog-header h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0;
        }

        .blog-header h2 {
          font-size: 0.875rem;
          color: rgb(95, 98, 105);
          margin-bottom: 25px; 
          font-weight:normal;

        }

        .controls {
        
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin-left:0;
          gap: 10px;
          margin: 0 auto; 
          justify-content: flex-start;
          

        }

        .search-container {
          display: flex;
          align-items: center;
          gap: 10px;

        }

        .latest {
          max-width: 1200px;
          margin: 0 auto; /* Alineado con blog-header */
          text-align: left;
        }

        .comments-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* Solo dos columnas */
          gap: 20px;
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        the-coments p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .barras{
        margin: auto;
        display: flex; 
        align-items: right;
        justify-content: flex-end; 
        gap: 10px; 
        width: 100%;
        max-width: 300px; 
        margin-left: 330px;



  .barras{
  
    margin-right:0 ;
    max-width: 1200px;
  
  }
</style>
     
<div class="blog-header">
    <h1>Blog</h1>
    <h2>Stay in the loop with the latest about our products</h2>
</div>


<div class="controls">

      
    <los-botones txtbutton="All categories"></los-botones>
    <los-botones txtbutton="Company"></los-botones>
    <los-botones txtbutton="Product"></los-botones>
    <los-botones txtbutton="Design"></los-botones>
    <los-botones txtbutton="Engineering"></los-botones>
    
  
    
    <div class="barras">
     <search-bar placeholder="Search..." icon=""></search-bar>
     <the-icons wifi="true"></the-icons>
    </div>

</div>

<the-containers>
         <the-grande
         img="https://picsum.photos/800/450?random=1"
            alt="Norway"
            subtitle="Engineering"
            title="Revolutionizing software development with cutting-edge tools"
            description="Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software"
            names="Remy Sharp, Travis Howard"
            date="July 14, 2021"
         >
        </the-grande>
        <the-grande
            img="https://picsum.photos/800/450?random=2"
            alt="Norway"
            subtitle="Product"
            title="Innovative product features that drive success"
            description="Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out."
            names="Erica Johns"
            date="July 14, 2021"
            >
            </the-grande>

        <the-mediano
            img="https://picsum.photos/800/450?random=3"
            alt="Northern Lights"
            text="Design"
            title="Designing for the future: trends and insights"
            description="Stay ahead of the curve with the latest design trends and insights. Our design team shares their">
        </the-mediano>

        <the-pequeño
            text="Company"
            title="Our company's journey: milestones and achievements"
            description="Take a look at our company's journey and the milestones we've achieved along the way. From">
        </the-pequeño>
        <the-pequeño
            text="Engineering"
            title="Pioneering sustainable engineering solutions"
            description="Learn about our commitment to sustainability and the innovative engineering solutions we're">
        </the-pequeño>

        <the-mediano
            img="https://picsum.photos/800/450?random=6"
            alt="Northern Lights"
            text="Product"
            title="Maximizing efficiency with our latest product updates"
            description="Our recent product updates are designed to help you maximize efficiency and achieve more. Get a.">
        </the-mediano>


</the-containers>

<div class="latest">
      
        <h1>Latest</h1>

      </div>
        


    <div class="comments-container">
    
    
         <the-coments
        
            subtitle=" Engineering"
            title="The future of AI in software engineering"
            description="Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software..."
            names="RemySharp, Travis Howard"
            date="July 14,2021"
        
            ></the-coments>
        
            <the-coments
        
            subtitle="Design"
            title="Embracing minimalism in modern design"
            description="Minimalism is a key trend in modern design. Discover how our design team incorporates minimalist principles to create clean and impactful user experiences."
            names="Kate Morrison"
            date="July 13,2021"
        
            ></the-coments>

            <the-coments
        
            subtitle="Engineering"
            title="Advancing cybersecurity with next-gen solutions"
            description="Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats."
            names="Agnes Walker, Trevor Henderson"
            date="July 14,2021"
            ></the-coments>

            <the-coments
        
            subtitle="Engineering"
            title="Advancing cybersecurity with next-gen solutions"
            description="Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats."
            names="Agnes Walker, Trevor Henderson"
            date="July 14,2021"
            ></the-coments>
          


            <the-coments
        
            subtitle="Design"
            title="Designing for the future: trends and insights"
            description="Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user..."
            names="Kate Morrison"
            date="July 14, 2021"
            ></the-coments>

              <the-coments
        
            subtitle="Product"
            title="Driving growth with user-centric product design"
            description="Our user-centric product design approach is driving significant growth. Learn about the strategies we employ to create products that resonate with users."
            names="Erica Jhons"
            date="July 14, 2021"
            ></the-coments>

               <the-coments
        
            subtitle="Company"
            title="Cultivating a culture of innovation"
            description="Innovation is at the heart of our company culture. Learn about the initiatives we have in place to foster creativity and drive groundbreaking solutions."
            names="Cindy Baker"
            date="July 14, 2021"
            ></the-coments>


            <the-coments
        
            subtitle="Product"
            title="Enhancing customer experience through innovation"
            description="Our innovative approaches are enhancing customer experience. Learn about the new features and improvements that are delighting our users."
            names="Travis Howard"
            date="July 14, 2021"
            ></the-coments>

            <the-coments
        
            subtitle="Product"
            title="Maximizing efficiency with our latest product updates"
            description="Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that.."
            names="Travis Howard"
            date="July 14, 2021"
            ></the-coments>

            <the-coments
        
            subtitle="Company"
            title="Our company's journey: milestones and achievements"
            description="Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth..."
            names="Cindy Baker"
            date="July 14, 2021"
            ></the-coments>    


    
    </div>    
       

        ` 

    };

}

customElements.define('app-container', AppContainer); 
