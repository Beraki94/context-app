import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoContext } from './context/TodoContext';

const TodoList = () => {
    const [todos, setTodos] = useContext(TodoContext);
  return (
     1 <= todos.length ? todos.map((item) =>{
        return(
            <Todo key={item.id} id={item.id} title={item.title} completed={item.completed} />
        )
    })
    :
    (<h4>No todos found. Please add some</h4>)

        
    
  )
}

export default TodoList