import { useState } from "react";
import Clothes from "./Clothes";
import { data } from "./data";
import Buttons from "./Buttons";
function Maincenter () {

        const [clothes, setClothes] = useState(data);
         
        const chosenClothes = (searchTerm) => {
          const newClothes = data.filter(element => element.searchTerm === searchTerm);
          setClothes(newClothes);
        }
      
      
      
        return( 
  
      
          <div>
            <div className="cont">
              <h2 className="back">Free Standard Shipping</h2>
            </div>
            <Buttons filteredClothes={chosenClothes} />
            <Clothes itemsForSale={clothes} />
          </div>
       
      
        )
      }
      
export default Maincenter;
