import React from 'react'
import { useTimer } from '../hooks/useTimer'

export default function Timer() {
    const show = useTimer(5000)
  return (
    <div>
        {show ||
                <h1>Timer</h1>
        }

    </div>
  )
}
