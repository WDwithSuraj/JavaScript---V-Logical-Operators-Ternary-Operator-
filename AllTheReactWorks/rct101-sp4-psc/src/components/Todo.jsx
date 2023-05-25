import {Box, SimpleGrid} from '@chakra-ui/react'
import { AddTodo } from './AddTodo'
import { TodoItem } from './TodoItem'
import { useReducer } from 'react'


const initState = [];
const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TODO' :{
            return [...state, action.payload]
        }
        case "DELETE_TODO" : {
            const remainTodo = state.filter((todo)=>{
                if(todo.id !== action.payload){
                    return todo
                }
            })
            return remainTodo
        }
        case "UPDATE_TODO" : {
            const updatedTodo = state.map((todo)=> {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        status : !todo.status
                    }
                }else {
                    return todo
                }
            } ) 
            
            return updatedTodo
        }

        default : return state
    }
}

function Todos(){
    const [state, dispatch] = useReducer(reducer, initState);
    const handleAdd = (task) => {
        dispatch({type:"ADD_TODO", payload : task})
    }

    const handleUpdate = (id) => {
        dispatch({type:"UPDATE_TODO", payload : id })
    }

    const handleDelete =(id) => {
        dispatch({type:'DELETE_TODO', payload:id})
    }
    return  <Box>
            <AddTodo handleAdd={handleAdd}/>
            <SimpleGrid columns={{base:1, md:2, lg:3}} gap='4' mt='8'>
            {state.map((todoItem)=> <TodoItem key={todoItem.id} {...todoItem} handleUpdate={handleUpdate} handleDelete={handleDelete}/>)}
            </SimpleGrid>
        </Box>
    
}

export { Todos}