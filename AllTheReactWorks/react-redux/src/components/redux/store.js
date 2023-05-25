import { legacy_createStore } from 'redux'
import { reducer } from "./reducer"
const initalState = {
    counter: 0,
    isLoading: false,
    todos: [],
    isError: false
}

export const store = legacy_createStore(reducer, initalState)