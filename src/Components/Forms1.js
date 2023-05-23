import React, {useState} from "react";


const Forms1 = () => {

    let [name, setName] = useState("")
    let [para, setPara] = useState("")

      function updateName(event){
          console.log("updateName function called")
          setName(event.target.value)
      }

      function updatePara(event){
            event.preventDefault() 
            setPara(name)
      }
     
    return(
        <div>
             <form>
                    <input type="text" placeholder="Enter your name" 
                    onChange={updateName}
                    />
                    <button onClick={updatePara}>Submit</button>
             </form>
             <p>{para}</p>
        </div>
    )
}

export default Forms1