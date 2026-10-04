import { useState, useCallback , useEffect, useRef} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [Noallowed, setNoallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  // useRef hook

  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(Noallowed) str += "0123456789"
    
    if(charallowed) str += "!@$$%^&*(){}[]"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)  
    }
    
    setpassword(pass)
  
  }, [length, Noallowed, charallowed, setpassword])
  useEffect(() => {
    passwordgenerator()
  },[length, Noallowed, charallowed, passwordgenerator])
  
  const copypasswordtoclipboard =useCallback(()=>{
    passwordref.current?.select();
    //passwordref.current?.ssetelectionrange(0,3) //if you want limited digit or words want in password for copy selection 
    window.navigator.clipboard.writeText(password) // this method is also use without ref
  }, [password])
  
  return (
    <>
      <div className='text-center w-full max-w-md mx-auto shoadow-md rounded-lg px-4 my-8 pb-1  text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center mb-4 text-white'>Password Generator</h1>
        <div className='flex shadow bg-white rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value= {password}
            className= 'oultline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordref}
          />
          <button
          onClick={copypasswordtoclipboard} 
          className='hover:bg-blue-400 outline-none bg-blue-700 text-white px-3 py-0 shrink-0'> 
            COPY
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex text-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length: {length} </label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={Noallowed}
              id="numberInput"
              onChange={() => {
                setNoallowed((prev) => !prev)
              }}
              
             />
              <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charallowed}
              id="CharacterInput"
              onChange={() => {
                setcharallowed((prev) => !prev)
              }}
             />
              <label htmlFor='CharacterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
