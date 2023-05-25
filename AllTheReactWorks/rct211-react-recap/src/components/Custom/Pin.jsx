import React, { forwardRef } from 'react'

export const Pin = forwardRef(({maxChar,keyHandler},ref) =>{
return (
   <input type="text" maxLength={maxChar} ref={ref} onKeyUp={(e)=> keyHandler(e)}/>
  )
})

