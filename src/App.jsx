import { useState, useEffect } from 'react'

import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/switch/ThemeButton'

function App() {

  const [themeMode, setthemeMode] = useState("dark"); 

  //weare over riding method here that are alreday define in theme.js

  const lightTheme = () => {
    setthemeMode("light");
  };

  const darkTheme = () => {
    setthemeMode("dark");
  };

    //actual theme mode
    useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);


  return (
    < ThemeProvider value={{themeMode , lightTheme , darkTheme}} >
        <div className=" relative mini-app-bg w-full h-screen bg-slate-100 dark:bg-black">

        <Background/>
        <Foreground/>
        <ThemeButton/>

        </div>
    </ThemeProvider>
  )
}

export default App
