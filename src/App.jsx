import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/addtodo'
import Todos from './components/todos'

function App() {


  return (
    <>
        <h1> HI from home page</h1>
        <AddTodo />
        <Todos />

    </>
  )
}

export default App
