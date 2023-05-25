import React,{useEffect, useRef} from 'react'

export default function UseRefEx() {
    const fromRef = useRef();
    console.log(fromRef)

    useEffect(()=>{
        fromRef.current.focus()
    },[])
  return (
    <div>

        <input ref={(e)=> fromRef.current = e}/>

    </div>
  )
}
