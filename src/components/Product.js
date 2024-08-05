
import one from "../assets/images/pic1.jpeg"
import two from "../assets/images/pic2.jpeg"
import three from "../assets/images/pic3.jpeg"

function Product(){

    return(
    <div className="products">
              
                <div className="box">
                  
                  <img src={three} alt="perfume"></img>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
                </div>
                    
                
                <div class="box">
                    <img src={one} alt="perfume"></img>
                    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
                </div>
                <div class="box">
                    <img src={two} alt="Designs Club"></img>
                    <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
                </div>
                
                </div>
            )
            }
            export default Product