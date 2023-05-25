import { Input, FormControl, FormLabel, Button, HStack} from '@chakra-ui/react'
import { useState } from 'react'

function AddTodo({handleAdd}){
    const [text, setText] = useState('');
    const handleClick = () => {
        const newTodo ={
            id : Math.random(Date.now()),  
            title : text,
            status : false
        }
        handleAdd(newTodo)
        setText('')
    }
    return <HStack >
        <FormControl>
            <FormLabel> Add New Task
         <Input placeholder="Add Todo here...." name='todo' value={text} onChange={(e)=> setText(e.target.value) }/>
         </FormLabel>
         <Button variant='outline' colorScheme="facebook" onClick={handleClick}>ADD TODO</Button>
         </FormControl>
    </HStack>
}

export {AddTodo}