import {useState}  from "react";


function Counter(){
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount(count + 1)
    }
    
    return <div>
        <h1>Counter : {count}</h1>
        <button onClick={handleClick}>Increment</button>
       
    </div>
}


export  default Counter;