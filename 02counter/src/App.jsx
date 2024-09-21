import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const[counter, setCounter] = useState(0);     // no mandotry to give name 'setCounter', you can give any

  const increseValue = () => { 
    console.log("value added =>", counter);
    //counter = counter + 1;  // will through an error  => Assignment to constant variable
    //setCounter(counter);    // if we change let instead of const, it'll run
    setCounter(counter + 1)

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }

  const decreseValue = () => { 
    console.log("value decreased =>", counter);
    //counter = counter - 1;
   // setCounter(counter);
    setCounter(counter - 1)

    // setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
  }
  

  return (
    <>
      <h1> 02 Counter in react</h1>
      <h3>Counter Value : {counter}</h3>

      <button onClick={increseValue}>Increment</button>
      <button onClick={decreseValue}>Decrement</button>
    </>
  )
}

export default App
