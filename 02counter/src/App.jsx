import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [counter, setcounter] = useState(15)
  let addvalue
  let removevalue
  if(counter !== 20){
    addvalue = () => {
      setcounter(counter + 1)
    }
  }
  if(counter !== 0){
    removevalue = () =>{
      setcounter(counter - 1)
    }
  }
  
return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
        
      <button onClick={addvalue}>Add Value  {counter}</button>    
      <button onClick={removevalue}>Remove Value {counter}</button>
    </>
  )
}
export default App
