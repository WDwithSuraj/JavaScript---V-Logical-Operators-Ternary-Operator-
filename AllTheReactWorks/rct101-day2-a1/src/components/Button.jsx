

function createButton( {text,color, handleClick } ) {
  return <button onClick = {handleClick} style={{color:color}}>{text}</button>
}


export default createButton;