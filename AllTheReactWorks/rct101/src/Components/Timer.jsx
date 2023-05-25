import React, {useEffect, useState} from 'react'
import useTimer from './useTimer'

export default function Timer() {
    const showTimerText = useTimer(2000)
    console.log(showTimerText)
  return (
        <div>{showTimerText && <h1>Timer</h1>}</div>
  )
}
