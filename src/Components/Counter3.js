import React,{useState} from "react"; 


const Counter3 = () => {
    let [favouriteSports, setFavouriteSports] = useState(["cricket", "football"])
    let [sport, setSport] = useState("")
     

    function  addToFavourite() {
        //   let x = [...favouriteSports] 
        //   x.push(sport)
          setFavouriteSports([...favouriteSports, sport])
    }


       
    return(
        <div>
              <input type="text" placeholder="Enter your favourite sport" 
               onChange={(e)=>setSport(e.target.value)}
              />
              <button onClick={addToFavourite}>Add Sport</button>
              {
                    favouriteSports.map((sport, index) => {
                        return(
                          <p> {sport} </p>
                        )
                     })
              }
        </div>
    )
}

export default Counter3