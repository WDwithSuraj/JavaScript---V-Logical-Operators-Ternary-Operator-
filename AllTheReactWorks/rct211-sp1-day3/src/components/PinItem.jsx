import React, { useState } from 'react';
import PropTypes from "prop-types";

const style = {
    width:"40px",
    height:"40px",
    textAlign:'center',
    margin : "10px"
}



export default function PinItem({length, maxLength}) {
const [inputBox, setInputBox] = useState(new Array(length).fill(''))



  return (<>
    <div>PinItem</div>
    {inputBox.map((item,index) => <input maxLength={maxLength} key={index} style={style} />)}
    </>
  )


}

PinItem.propTypes = {
    length: PropTypes.number.isRequired,
    maxLength : PropTypes.number
}