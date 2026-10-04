import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")  

  return (
    <>
      <div className="w-full h-screen duration-1000" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black
           px-3 py-2 rounded-3xl">
            <button onClick={()=> setcolor("red")} 
            className="outline-lime-50 px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "red"}}>
              RED
            </button>
              <button onClick={()=> setcolor("green")}className="outline-lime-50 px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "green"}}>
              GREEN
            </button>  
            <button onClick={()=> setcolor("blue")}className="outline-lime-50 px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "blue"}}>
              BLUE
            </button>  
            <button onClick={()=> setcolor("orange")}className="outline-lime-50 px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "orange"}}>
              ORANGE
            </button>  
          </div>  
        </div>
      </div>
      
    </>
  )
}

export default App