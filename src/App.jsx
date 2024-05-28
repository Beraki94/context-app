import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <h1>MY TODO APP</h1>
      <AddTodo/>
      <TodoList />
    </div>
  )
}

export default App
