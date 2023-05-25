import React from 'react'

export const Button = ({children, colorSheme = "default", size}) => {
  return (
   <button className={`${colorSheme} ${size}`}>{children}</button>
  )
}
