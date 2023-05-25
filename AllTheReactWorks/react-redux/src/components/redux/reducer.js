import { ADD, GET_TODO_SUCCSESS, POST_TODO_SUCSESS, REDUCE, TODO_ERROR, TODO_LOADING } from "./actionType";

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ADD: {
            return { ...state, counter: state.counter + payload }
        }
        case REDUCE: {
            return { ...state, counter: state.counter - payload }
        }

        case TODO_LOADING: {
            return { ...state, isLoading: true }
        }

        case GET_TODO_SUCCSESS: {
            return {
                ...state, isLoading: false, todos: [...payload]
            }
        }

        case TODO_ERROR: {
            return {
                ...state, isLoading: false, isError: true
            }
        }
        case POST_TODO_SUCSESS: {
            return {
                ...state, isLoading: false, todos: [...state.todos, payload]
            }
        }
        default: return state;
    }
}