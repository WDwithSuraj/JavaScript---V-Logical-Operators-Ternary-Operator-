import React from 'react'

import { addCounter, reduceCounter } from '../redux/action.js';
import { useDispatch, useSelector } from 'react-redux';
export default function Counter() {
    const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()


    const handleAdd = () => {
        dispatch(addCounter())

    }

    const handleReduce = () => {
        dispatch(reduceCounter())

    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>REDUCE</button>
        </div>

    )
}
