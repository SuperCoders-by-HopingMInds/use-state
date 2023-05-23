import React, {useState} from "react"; 
let a = 10


const State1 = () => {  
    let [count, setCount] = useState(0) // count = 0 // state management 

    // if roelad = 1st , count = 0. otherwise count can only be updated by setCount

    // By design: 
    // dont update variable directly 
    // update varaible only by its function
    // when ever count values changes => component will reload
     
    console.log("This component is rendered 1")
    
    

    function increase(){
           a = a + 1 // 11
           console.log(a) // 11
    }

    function increaseCount(){
         setCount(count+1) // 1
    }
     console.log("compunent executed 2")
    return(
        <div>
            <h1>Value of a is {a} </h1>
            <button onClick={increase}>Increase</button>

            <h1>Value of count is {count} </h1>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )

}


export default State1