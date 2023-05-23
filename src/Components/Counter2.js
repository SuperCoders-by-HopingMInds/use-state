import React,{useState} from "react"; 


const Counter2 = () => {
     let [coins, setCoins] = useState({gold: 0, silver: 0, bronze: 0})

       //  coins = {gold: 0, silver: 0, bronze: 0}

       console.log("Coins", coins)
       
        function increaseGold(){
            //    setCoins({gold: coins.gold+1, silver: coins.silver, bronze: coins.bronze}) 
            setCoins({...coins, gold: coins.gold+1})
        }

        // coins = {gold: 1, silver: 0, bronze: 0}

        function increaseSilver(){
             setCoins({...coins, silver: coins.silver+1})
        }

    return(
        <div>
            <h1>Gold: {coins.gold}, Silver: {coins.silver}, Bronze: {coins.bronze} </h1>
            <button onClick={increaseGold}>Increase Gold</button>
            <button onClick={increaseSilver}>Increase Silver</button>
            <button>Increase Bronze</button>
        </div>
    )
}

export default Counter2