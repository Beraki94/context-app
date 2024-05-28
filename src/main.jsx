import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './components/context/TodoContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
