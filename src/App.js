import React, {useState} from "react";

import laptop from "./images/laptop.jpg";

// const laptop =  require("./images/laptop.jpg")

import imagesData from "./imgData";
import Counter3 from "./Components/Counter3";


const App = () => {

//     let [clickedImage, setClickedImage] = useState("")

     
//      function displayName(image) {
//           setClickedImage(image)
//      }


    return(
        <div>
              {/* {
                    imagesData.map((image, index) => (
                          <img src={image.img_url} alt={image.alt} 
                           onClick={()=>displayName(image)}
                          />
                    ))
                    
              }
              {
                 clickedImage &&
                    <p>Image Name: {clickedImage.name}</p>
              }
      
                  <img src={laptop} alt="Laptop" /> */}
                  <Counter3 />
        </div>
    )

}

export default App

















// import React  from "react"; 
// import State1 from "./Components/State1";
// import Counter from "./Components/Counter";  
// import Forms1 from "./Components/Forms1";


// const App = () => {
//     return (
//         <div>
//              {/* <State1 /> */}
//                 {/* <Counter /> */}
//                 <Forms1 />
//         </div>
//     );
// }

// export default App;
