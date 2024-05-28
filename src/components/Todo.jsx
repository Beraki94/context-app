import React, { useContext, useEffect } from 'react'
import { TodoContext } from './context/TodoContext'

const Todo = (props) => {
    const [todos, setTodos] = useContext(TodoContext);

    const handleCompletTodo = (e) =>{
        const filterTodos = todos.map((item) => {
            if(item.id === e.target.value){
                if(e.target.checked) {
                    item.completed = true;
                }
            }
           return item; 
        })

        setTodos(filterTodos);
    }

    const handleDeleteTodo = (e) => {
        e.preventDefault();

        const filteredTodos = todos.filter((item) =>{
            return item.id != e.target.id;
        })
        setTodos(filteredTodos);
    };

    useEffect(() =>{
        localStorage.setItem( "todos", JSON.stringify(todos));
    }, [todos] )

  return (
    <div className='todoList'>
        <input type="checkbox" value={props.id} id={props.id} onChange={handleCompletTodo}/>
        <label htmlFor={props.id}>{props.title}</label>
        <button id={props.id} onClick={handleDeleteTodo}>Delete</button>
    </div>
  )
}

export default Todo