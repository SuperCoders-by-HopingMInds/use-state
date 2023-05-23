import React,{useState} from "react"

const Counter = () => {
    let [count, setCount] = useState(10)


    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }
    function reset(){
        setCount(10)
    }


    return(
        <div>
            <h1>Value of count is {count}</h1>
            <button onClick={increase}>Increase</button> 
            <button onClick={decrease}>Decrease</button> 
            <button onClick={reset}>Reset</button>
        </div>
    )

}


export default Counter