import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {Pin} from './Pin';
export default function PinTab({length,maxChar}) {
    const [pinTabLength] = useState(new Array(length).fill(0))
    const inputRef = useRef([]);
    console.log(inputRef)
    const handleFocus = (e, index) =>{
        if(e.target.value.length === maxChar && index < length - 1){
            inputRef.current[index + 1].focus();
        }
    }

    const backSpaceHandler = (e, index) =>{
         if(e.target.value.length === 0 && index > 0){
            inputRef.current[index - 1].focus();
        }
    }

    const keyHandler = (e,index) =>{

         if(e.keyCode === 8){
            backSpaceHandler(e,index)
         }else{
            handleFocus(e,index)
         }
    }

const pasteHandler = (e) => {
    const data = e.clipboardData.getData("Text").split("").filter((el,index)=> index < length)
    data.forEach((el,index)=>{
        inputRef.current[index].value = el;
        if(e.target.value.length === maxChar && index < data.length - 1){
            inputRef.current[index + 1].focus();
        }
})
}
    return (
    <div onPaste={(e)=> pasteHandler(e)}>
       {
        pinTabLength.map((_, index)=>{
            return <Pin key={index} maxChar={maxChar} ref={(e)=> inputRef.current[index]=e} keyHandler={(e)=> keyHandler(e,index)}/>
        })
       }
    </div>
  )
}

PinTab.propTypes = {
    length : PropTypes.number.isRequired,
    maxChar : PropTypes.number
}