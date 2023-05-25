import { ADD, GET_TODO_SUCCSESS, POST_TODO_SUCSESS, REDUCE, TODO_ERROR, TODO_LOADING } from "./actionType"

export const addCounter = () => {
    return { type: ADD, payload: 1 }
}

export const reduceCounter = () => {
    return { type: REDUCE, payload: 1 }
}


//action type for todos

export const getTodoLoading = () => {
    return { type: TODO_LOADING }
}

export const getTodoSucsess = (payload) => {
    return { type: GET_TODO_SUCCSESS, payload }
}

export const getTodoError = () => {
    return { type: TODO_ERROR }
}

export const postTodoSucsess = (payload) => {
    return { type: POST_TODO_SUCSESS, payload: payload }
}