import {useState} from "react";



function Todo (){
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([])
    const handleChange = (e) =>{
        setText(e.target.value);
    }
    const handleAdd = () =>{
        const newTodoItem = {
            title : text,
            status : false,
            id : Date.now() + Math.random() +  text,
        }
        const todoListAfterNewAdd = [...todos, newTodoItem]
        setTodos(todoListAfterNewAdd)
        setText(' ')
    }
    return <div>
        <div>
            <input type="text" placeholder="Add new todo" value={ text} onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>
            <div>
                {todos.map((todo) =>(
                <div key={todo.id} style={{display:'flex',
                                         alignItems:"center", 
                                         justifyContent:"space-around", 
                                         border:"1px solid black",
                                         margin : '10px',
                                         padding : "5px"
                                       }}>
                    <div>{todo.title}</div>
                     <div>{todo.status? 'Complete' : 'Not Completed'}</div>
                    </div>
               
                    ))}
            </div>
        </div>
        {/* list of todo Item */}

    </div>
}


export default Todo;