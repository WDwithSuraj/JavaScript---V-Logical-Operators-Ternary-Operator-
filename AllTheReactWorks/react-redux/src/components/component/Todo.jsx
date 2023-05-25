import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoError, getTodoLoading, getTodoSucsess } from '../redux/action'

export default function Todo() {

    const todos = useSelector((state) => state.todos)
    const isLoading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch();

    const getTodoData = () => {
        dispatch(getTodoLoading())
        axios.get(`http://localhost:8080/todos`)
            .then((res) => dispatch(getTodoSucsess(res.data)))
            .catch((error) => dispatch(getTodoError()))
    }

    useEffect(() => {
        getTodoData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>Todos</h1>
            <AddTodo />
            {
                isLoading ? <h1>Loading...</h1> :
                    todos?.map(({ title, id, status }, ind) => {
                        return <div key={ind} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", border: "1px solid black", margin: "7px" }}>
                            <h3>{title}</h3>
                            <p>{status ? "Complete" : "Pending"}</p>
                        </div>
                    })
            }
        </div>
    )
}
