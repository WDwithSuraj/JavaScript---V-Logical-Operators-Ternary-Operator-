import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodoError, getTodoLoading, postTodoSucsess } from '../redux/action';

export default function AddTodo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const newTodo = {
        title: text,
        status: false
    }
    const postTodos = () => {
        dispatch(getTodoLoading())
        axios.post(`http://localhost:8080/todos`, newTodo)
            .then((res) => dispatch(postTodoSucsess(res.data)))
            .catch((error) => dispatch(getTodoError()))
    }

    const addTodo = () => {
        postTodos();
        setText("")
    }


    return (
        <div>
            <input type="text" placeholder='Add Todo' value={text} onChange={(e) => setText(e.target.value)} />
            <button disabled={text.length <= 0} onClick={addTodo}>ADD</button>
        </div>
    )
}
