import { useState } from 'react'

import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className=" relative mini-app-bg w-full h-screen bg-zinc-900">

        <Background/>

        <Foreground/>

        </div>
    </>
  )
}

export default App
