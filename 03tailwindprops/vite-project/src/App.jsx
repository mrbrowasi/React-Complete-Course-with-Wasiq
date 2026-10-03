import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './component/card.jsx'
function App() {
  return (
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-2xl font-200">
      Wasiq aur React
    </h1>
    <div className="flex min-h-screen items-center justify-center bg-black-100">
      <Card username="1st card" btntext="visit me"/>
      <Card username="2nd card" btntext="click me"/>
    </div>
    </>
  )
}

export default App

