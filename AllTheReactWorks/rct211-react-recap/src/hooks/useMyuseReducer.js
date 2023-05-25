import { useState } from "react"

export const useMyuseReducer = (reducer, initState) => {
    const [state, setState] = useState(initState)

    const dispatchFunction = (action) => {
        const newState = reducer(state, action);
        setState(newState);
    }

    return [state, dispatchFunction]
}