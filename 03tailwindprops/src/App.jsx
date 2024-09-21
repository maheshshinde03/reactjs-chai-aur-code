import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj = {
    name: 'Mahesh',
    age: 30,
    city: 'Pune'
  }

  let newArr = [1, 2, 3] 

  return (
    <>  {/*this is called fragments */}
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Card userName="Mahesh" someObj={myObj} someArr={newArr}/> */}

      <Card userName="Mahesh" btnText="Click Me"/>
      <Card userName="Mahesh" />
    </>
  )
}

export default App
