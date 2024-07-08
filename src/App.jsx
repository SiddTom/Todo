import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-white my-8">TodoList</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
