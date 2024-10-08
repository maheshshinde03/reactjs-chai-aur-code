import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //const ref = useRef(initialValue)
  const passwordRef = useRef(null)
  //const cachedFn = useCallback(fn, dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])   //useEffect(setup, dependencies?)  

  const copyPasswordToClipBoard = useCallback(() => {
    // navigator.clipboard.writeText(passwordRef.current.value)
    // alert("Password copied to clipboard!")
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 18);
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3' placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={18}
              value={length} className='cursor-pointer'
              onChange={(event) => { setLength(event.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultValue={numberAllowed} 
            id='numberInput'
            onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultValue={charAllowed} 
            id='characterInput'
            onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
