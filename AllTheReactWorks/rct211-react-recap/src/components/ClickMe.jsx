import React from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useThrotle } from '../hooks/useThrotle'

export default function ClickMe() {
    const myRequest = () =>{
        console.log("Making connection request...")

    }
    // const debounce = useDebounce()
    const throtle = useThrotle();
   
  return (
    <div>
        <h1>Click me</h1>
            <button onClick={()=> throtle(myRequest, 4000)}>click</button>
        </div>
  )
}
