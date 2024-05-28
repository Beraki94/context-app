import React, { useContext, useState } from 'react';
import { TodoContext } from './context/TodoContext';
import{v4 as uuidv4} from 'uuid';

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState ('');
  const [todos, setTodos] = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(todoTitle === "" || undefined) {
      alert("Field can not be blank");
    }
    else{
      const newTodos =[...todos, {id: uuidv4(), title: todoTitle, completed: false}];
      setTodos(newTodos);
      setTodoTitle(' ');

    }
  }

 console.log(todos)

  return (
    <div className='todoForm'>
      <input type="text" value={todoTitle} placeholder='Enter Todo...' onChange={e => setTodoTitle(e.target.value)}/>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo