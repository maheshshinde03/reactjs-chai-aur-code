import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    //you can wrapped all you component in Provider in App.jsx file or in Main.jsx. only thungs is all components should wrapped
    <>
      <h1>Learn about Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
