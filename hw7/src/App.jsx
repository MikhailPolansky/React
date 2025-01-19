import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import {Wrapper, Example} from './components'

import './App.css'

export const ThemeContext = createContext('light')

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
    < div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h2>Vite + React</h2>
      <hr/>
      <Wrapper/>
      <Example/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
