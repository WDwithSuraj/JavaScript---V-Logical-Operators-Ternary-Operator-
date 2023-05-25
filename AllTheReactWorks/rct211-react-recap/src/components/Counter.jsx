import { useEffect, useState } from "react";

 function Counter({initial}){
    function checkInitial(initial){
        if(Number(initial)){
            console.log(true)
        }
    }
    const state = useState({counter : initial || 0});
    const count = state[0];
    const setCount = state[1]
    return(
        <div>
            <h2>{count.counter}</h2>
            <button onClick={()=> setCount(prev => { return {...prev, counter:prev.counter + 1}})}>ADD</button>
            <button onClick={()=> setCount(prev => {return {...prev, counter : prev.counter-1}})}>REDUCE</button>
        </div>
    )
 }

 export default Counter;